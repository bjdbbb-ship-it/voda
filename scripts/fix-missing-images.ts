import fs from 'fs';
import path from 'path';
// @ts-ignore
import { whiskyPool } from '../src/lib/whisky-pool';
// @ts-ignore
import { getRandomImageForKeywords } from '../src/lib/imagePool';

const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
let content = fs.readFileSync(poolPath, 'utf8');

// 이미지 없음, 혹은 placeholder, 혹은 비어있는 url 찾기
const missing = whiskyPool.filter(w => !w.imageUrl || w.imageUrl === '' || w.imageUrl.includes('placeholder') || w.imageUrl === '이미지 없음');
console.log(`총 ${missing.length}개의 위스키에서 이미지가 누락된 것을 발견했습니다.`);

if (missing.length > 0) {
    missing.forEach(w => {
        // 사용할 키워드 추출
        const tags = (w.tags || []).join(" ").toLowerCase();
        const type = (w.type || "").toLowerCase();
        const region = (w.region || "").toLowerCase();
        const keywords = tags.split(" ").concat(type.split(" ")).concat(region.split(" "));
        
        // 언스플래시 이미지 풀에서 적절한 이미지 가져오기
        const newUrl = getRandomImageForKeywords(keywords);
        console.log(`[${w.id}] ${w.name} => 새로운 이미지 할당: ${newUrl}`);

        // 1. 이미 imageUrl 속성이 존재하는 경우 치환
        // 이름에 괄호 등 특수문자가 있을 수 있으므로 id를 기준으로 블록을 탐색합니다.
        const idRegex = new RegExp(`(id:\\s*['"]${w.id}['"][^}]*?imageUrl:\\s*['"])(.*?)(['"])`, 'g');
        const match = idRegex.exec(content);
        
        if (match) {
            content = content.replace(idRegex, `$1${newUrl}$3`);
        } else {
            // 2. imageUrl 속성이 아예 없는 경우: tags 속성 바로 위에 추가
            const blockRegex = new RegExp(`(id:\\s*['"]${w.id}['"][^}]*?)(tags:\\s*\\[)`, 'g');
            if (blockRegex.test(content)) {
                content = content.replace(blockRegex, `$1imageUrl: "${newUrl}",\n        $2`);
            } else {
                console.log(`⚠️ ${w.id}의 삽입 위치를 찾을 수 없습니다.`);
            }
        }
    });

    fs.writeFileSync(poolPath, content);
    console.log(`\n✨ 성공적으로 ${poolPath} 파일을 업데이트했습니다.`);
} else {
    console.log('이미지 보완이 필요한 위스키가 없습니다!');
}
