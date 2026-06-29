import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

// @ts-ignore
import { whiskyPool } from '../src/lib/whisky-pool';
// @ts-ignore
import { dailyWhiskies } from '../src/lib/data';
// @ts-ignore
import { globalWhiskies } from '../src/lib/global-data';
// @ts-ignore
import { getRandomImageForKeywords } from '../src/lib/imagePool';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const globalPath = path.join(process.cwd(), 'src', 'lib', 'global-data.ts');

// 1. 위스키 이름에서 숙성 연수(Age) 추출
function extractAge(name: string): string | null {
    const ageMatch = name.match(/(\d+)\s*(Year|Yr|년)/i);
    return ageMatch ? ageMatch[1] : null;
}

// 2. 이미지 URL의 연도 불일치 검사
function isAgeMismatched(name: string, url: string): boolean {
    const nameAge = extractAge(name);
    if (!nameAge) return false;

    const agePattern = new RegExp(`(\\D|^)${nameAge}(\\D|$)`);
    const hasCorrectAgeInUrl = agePattern.test(url);

    // 다른 주요 연수들이 URL에 박혀있는지 검사
    const otherAges = [10, 12, 15, 18, 21, 25, 30].filter(a => a.toString() !== nameAge);
    const hasWrongAgeInUrl = otherAges.some(a => {
        const wrongAgePattern = new RegExp(`(\\D|^)${a}(\\D|$)`);
        return wrongAgePattern.test(url);
    });

    return hasWrongAgeInUrl && !hasCorrectAgeInUrl;
}

// 3. 이미지 URL 접속 불능 검사
async function isUrlBroken(url: string): Promise<boolean> {
    if (!url) return true;
    if (!url.startsWith('http')) {
        const localPath = path.join(process.cwd(), 'public', url);
        return !fs.existsSync(localPath);
    }
    
    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
            },
            timeout: 5000
        }, (res) => {
            if (res.statusCode && res.statusCode >= 400) {
                resolve(true);
            } else {
                resolve(false);
            }
        }).on('error', () => {
            resolve(true);
        }).on('timeout', () => {
            req.destroy();
            resolve(true);
        });
    });
}

// 고유 이미지를 찾기 위한 캐시
const usedImageUrls = new Set<string>();

function getUniqueImageForWhisky(whisky: any, fallbacks: string[] = []): string {
    const tags = (whisky.tags || []).join(" ").toLowerCase();
    const type = (whisky.type || "").toLowerCase();
    const keywords = tags.split(" ").concat(type.split(" "));
    
    // 최대 10번 시도하여 고유 이미지 확보 시도
    for (let i = 0; i < 10; i++) {
        const newUrl = getRandomImageForKeywords(keywords);
        if (!usedImageUrls.has(newUrl)) {
            usedImageUrls.add(newUrl);
            return newUrl;
        }
    }
    
    // Unsplash 고유 이미지 실패 시, 임의의 고유 Unsplash id 파라미터를 추가하여 중복 방지 우회
    const baseImg = getRandomImageForKeywords(keywords);
    const uniqueUrl = baseImg + `&unique=${Math.random().toString(36).substring(7)}`;
    usedImageUrls.add(uniqueUrl);
    return uniqueUrl;
}

async function fixAllImages() {
    console.log('🚀 [통합 이미지 교정 시작] 깨짐 / 중복 / 연도 불일치 교정 작업을 진행합니다...');

    // 모든 위스키 정보 수집
    const allWhiskies: { id: string; name: string; imageUrl: string; tags: string[]; type: string; file: string }[] = [];

    // 1. global-data.ts
    if (globalWhiskies) {
        globalWhiskies.forEach((w: any) => {
            allWhiskies.push({ id: w.id, name: w.name || '', imageUrl: w.imageUrl || '', tags: w.tags || [], type: w.type || '', file: globalPath });
        });
    }
    // 2. whisky-pool.ts
    if (whiskyPool) {
        whiskyPool.forEach((w: any) => {
            allWhiskies.push({ id: w.id, name: w.name || '', imageUrl: w.imageUrl || '', tags: w.tags || [], type: w.type || '', file: poolPath });
        });
    }
    // 3. data.ts (dailyWhiskies)
    if (dailyWhiskies) {
        dailyWhiskies.forEach((dw: any) => {
            if (dw.whiskies) {
                dw.whiskies.forEach((w: any) => {
                    allWhiskies.push({ id: w.id, name: w.name || '', imageUrl: w.imageUrl || '', tags: w.tags || [], type: w.type || '', file: dataPath });
                });
            }
        });
    }

    console.log(`총 검사 대상 위스키 개수: ${allWhiskies.length}`);

    // 초기 사용 중인 이미지 주소 등록
    allWhiskies.forEach(w => {
        if (w.imageUrl) usedImageUrls.add(w.imageUrl);
    });

    // 1. 중복 이미지 식별
    const urlGroups: { [url: string]: typeof allWhiskies } = {};
    allWhiskies.forEach(w => {
        if (!w.imageUrl) return;
        if (!urlGroups[w.imageUrl]) {
            urlGroups[w.imageUrl] = [];
        }
        urlGroups[w.imageUrl].push(w);
    });

    const duplicatesToFix = new Set<string>(); // 중복으로 판명되어 교체해야 할 위스키 ID 리스트
    for (const [url, list] of Object.entries(urlGroups)) {
        // 영어 이름 기준 고유성 체크
        const uniqueNames = new Set(list.map(w => w.name.split('/')[0].trim()));
        if (uniqueNames.size > 1) {
            // 첫 번째 것만 남기고, 두 번째 이후 위스키들은 이미지 교정 대상으로 등록
            const firstWhisky = list[0];
            for (let i = 1; i < list.length; i++) {
                // 단, 서로 이름이 실질적으로 다른 경우만 중복으로 봄
                if (list[i].name.split('/')[0].trim() !== firstWhisky.name.split('/')[0].trim()) {
                    duplicatesToFix.add(list[i].id);
                }
            }
        }
    }

    console.log(`🔗 중복 사용으로 인해 교체해야 할 이미지 개수: ${duplicatesToFix.size}`);

    // 2. 개별 위스키 검사 및 교체 맵 구성
    const replacementMap = new Map<string, { oldUrl: string; newUrl: string; reason: string }>();

    for (const w of allWhiskies) {
        let needFix = false;
        let fixReason = '';

        // A. 나이 불일치 검사
        if (w.imageUrl && isAgeMismatched(w.name, w.imageUrl)) {
            needFix = true;
            fixReason = 'Age Mismatched';
        }
        // B. 중복 이미지 검사
        else if (duplicatesToFix.has(w.id)) {
            needFix = true;
            fixReason = 'Duplicate URL';
        }
        // C. 깨진 링크 검사
        else {
            const broken = await isUrlBroken(w.imageUrl);
            if (broken) {
                needFix = true;
                fixReason = 'Broken Link';
            }
        }

        if (needFix) {
            const newUrl = getUniqueImageForWhisky(w);
            replacementMap.set(w.id, { oldUrl: w.imageUrl, newUrl, reason: fixReason });
            console.log(`[감지] ID: ${w.id} | Name: ${w.name} | 사유: ${fixReason}\n  - Old: ${w.imageUrl.substring(0, 70)}...\n  - New: ${newUrl.substring(0, 70)}...`);
        }
    }

    console.log(`\n⚙️ 총 ${replacementMap.size}개의 이미지 교체 대상을 반영합니다.`);

    // 3. 파일 쓰기 반영
    const filePaths = [globalPath, poolPath, dataPath];
    for (const filePath of filePaths) {
        if (!fs.existsSync(filePath)) continue;
        
        console.log(`✍️ ${path.basename(filePath)} 파일 업데이트 중...`);
        let content = fs.readFileSync(filePath, 'utf-8');
        let fileChanges = 0;

        // 해당 파일에 속한 위스키들 중 교체 대상이 있으면 교체 실행
        for (const [id, val] of replacementMap.entries()) {
            // 해당 위스키 ID 블록의 imageUrl을 찾아 변경하는 정규식
            // 예: { id: "n177...", ... imageUrl: "..." }
            // 혹은 단순히 oldUrl을 newUrl로 글로벌 매치하여 변경해도 안전함 (위스키 데이터에 특화)
            const escapeRegex = (s: string) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const oldUrlPattern = new RegExp(`imageUrl:\\s*(['"])${escapeRegex(val.oldUrl)}\\1`, 'g');
            
            if (oldUrlPattern.test(content)) {
                content = content.replace(oldUrlPattern, `imageUrl: "${val.newUrl}"`);
                fileChanges++;
            }
        }

        if (fileChanges > 0) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✨ ${path.basename(filePath)} 파일에 ${fileChanges}건의 이미지 주소가 성공적으로 수정되었습니다.`);
        } else {
            console.log(`✅ ${path.basename(filePath)} 에는 수정할 이미지가 없거나 이미 수정되었습니다.`);
        }
    }

    console.log('\n🎉 모든 이미지 교정 작업 완료!');
}

fixAllImages().catch(console.error);
