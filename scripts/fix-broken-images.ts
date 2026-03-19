import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
// @ts-ignore
import { whiskyPool } from '../src/lib/whisky-pool';
// @ts-ignore
import { dailyWhiskies } from '../src/lib/data';
// @ts-ignore
import { getRandomImageForKeywords } from '../src/lib/imagePool';

// Node.js TLS 이슈 회피용 (일부 이미지 서버가 인증서 문제로 에러를 뱉는 것을 무시)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

async function isUrlBroken(url: string): Promise<boolean> {
    if (!url || !url.startsWith('http')) return false; // 로컬 경로나 비어있는 경우 제외
    
    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
            },
            timeout: 5000 // 5초 타임아웃
        }, (res) => {
            if (res.statusCode && res.statusCode >= 400) {
                resolve(true); // 400 이상 에러면 깨진 링크로 간주
            } else {
                resolve(false);
            }
        }).on('error', () => {
            resolve(true); // 요청 자체 에러 시 깨진 링크로 간주
        }).on('timeout', () => {
            req.destroy();
            resolve(true);
        });
    });
}

async function fixBrokenImagesInFile(filePath: string, whiskiesList: any[]) {
    if (!fs.existsSync(filePath)) return;
    
    console.log(`\n🔍 Scanning ${path.basename(filePath)}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    let changes = 0;

    // 모든 위스키의 URL을 비동기로 긁어모아 확인
    const promises = whiskiesList.map(async (w: any) => {
        if (!w.imageUrl || !w.imageUrl.startsWith('http')) return null;
        
        const broken = await isUrlBroken(w.imageUrl);
        if (broken) {
            return w; // 깨진 위스키 반환
        }
        return null;
    });

    const results = await Promise.all(promises);
    const brokenWhiskies = results.filter(w => w !== null);

    if (brokenWhiskies.length === 0) {
        console.log(`✅ ${path.basename(filePath)} 에는 깨진 이미지가 없습니다.`);
        return;
    }

    console.log(`⚠️ ${path.basename(filePath)} 에서 ${brokenWhiskies.length}개의 깨진 이미지를 발견했습니다! 교체를 시작합니다.`);

    for (const w of brokenWhiskies) {
        const tags = (w.tags || []).join(" ").toLowerCase();
        const type = (w.type || "").toLowerCase();
        const keywords = tags.split(" ").concat(type.split(" "));
        const newUrl = getRandomImageForKeywords(keywords);

        console.log(`[${w.id}] ${w.name} 깨진 이미지 교체:\n  - Old: ${w.imageUrl.substring(0,60)}...\n  - New: ${newUrl}`);

        // 해당 파일 내에서 정확히 오래된 URL을 찾아 새로운 URL로 글로벌 치환
        // 동일 URL을 쓰는 여러 요소가 있을 수 있으므로 모두 교체
        const escapeRegex = (s: string) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const oldUrlPattern = new RegExp(`imageUrl:\\s*(['"])${escapeRegex(w.imageUrl)}\\1`, 'g');
        
        content = content.replace(oldUrlPattern, `imageUrl: "${newUrl}"`);
        changes++;
    }

    if (changes > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`✨ ${path.basename(filePath)} 에 총 ${changes}건의 업데이트가 반영되었습니다.`);
    }
}

async function main() {
    console.log('🚀 위스키 이미지 링크 접속 테스트 및 자동 복구 스크립트 시작...');
    
    // whisky-pool 은 1차원 배열
    if (whiskyPool && whiskyPool.length > 0) {
        await fixBrokenImagesInFile(poolPath, whiskyPool);
    }
    
    // data.ts 는 2차원 배열 구조 (dailyWhiskies[].whiskies[])
    if (dailyWhiskies && dailyWhiskies.length > 0) {
        const flattenedDataWhiskies = dailyWhiskies.flatMap((dw: any) => dw.whiskies);
        await fixBrokenImagesInFile(dataPath, flattenedDataWhiskies);
    }
    
    console.log('\n✅ 모든 깨진 이미지 갱신 작업이 완료되었습니다!');
}

main().catch(console.error);
