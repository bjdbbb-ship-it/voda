const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/lib/data.ts');
const content = fs.readFileSync(targetFile, 'utf-8');
const lines = content.split('\n');

// articles 배열의 시작과 끝을 찾아 안전하게 교체
const startLineIdx = lines.findIndex(line => line.includes('export const articles: Article[] = ['));
if (startLineIdx === -1) {
    console.error('articles 배열 시작점을 찾을 수 없습니다.');
    process.exit(1);
}

// 다음 '];'를 찾아서 끝점으로 설정
let endLineIdx = -1;
for (let i = startLineIdx; i < lines.length; i++) {
    if (lines[i].trim() === '];' || lines[i].includes('];')) {
        endLineIdx = i;
        break;
    }
}

if (endLineIdx === -1) {
    console.error('articles 배열 끝점을 찾을 수 없습니다.');
    process.exit(1);
}

const newArticles = `export const articles: Article[] = [
    {
        id: "1",
        slug: "whisky-magazine-voda-launch",
        title: "위스키 매거진 VODA에 오신 것을 환영합니다",
        subtitle: "취향의 발견, 위스키의 모든 것",
        category: "공지사항",
        author: "VODA",
        publishedAt: "2026-02-23",
        imageUrl: "https://images.unsplash.com/photo-1527281473222-79366a5b8b73?auto=format&fit=crop&q=80&w=800",
        content: \`
## 환영합니다!

위스키 매거진 VODA가 정식 서비스를 시작했습니다. 
이곳에서 당신만의 위스키 취향을 발견하고, 전 세계의 다양한 위스키 소식을 접해보세요.

매일 새로운 위스키 정보와 기사가 업데이트됩니다.\`,
        tags: ["공지", "위스키", "VODA"],
        useTitleCover: true
    }
];`;

lines.splice(startLineIdx, endLineIdx - startLineIdx + 1, newArticles);

fs.writeFileSync(targetFile, lines.join('\n'), 'utf-8');
console.log('기사 데이터 안전하게 초기화 완료!');
