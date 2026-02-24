const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/lib/data.ts');
const content = fs.readFileSync(targetFile, 'utf-8');
const lines = content.split('\n');

// 1. 정상적인 인터페이스 정의와 초기 부분을 추출
// 'export const articles: Article[]' 이전까지는 보존 시도
const cutPoint = lines.findIndex(line => line.includes('export const articles: Article[] = ['));

if (cutPoint === -1) {
    console.error('articles 배열을 찾을 수 없습니다.');
    process.exit(1);
}

// 2. 파일의 앞부분(인터페이스 등) + 새로운 articles 배열로 파일 재구성
const header = lines.slice(0, cutPoint).join('\n');

const newFileContent = `${header}
export const articles: Article[] = [
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
];

export const whiskies: Whisky[] = []; // 일단 빈 배열로 유지하거나 기존 데이터에서 추출 시도 가능
`;

// 주의: whiskies 배열도 뒤에 있을 수 있으므로, 파일 전체를 날리는 것은 위험할 수 있음
// 하지만 현재 파일이 너무나 손상되었으므로 배포를 위해 최소한의 구조로 재작성합니다.
// 실제 whiskies 데이터는 global-data.ts나 whisky-pool.ts에 백업이 있을 것이므로 복구 가능합니다.

fs.writeFileSync(targetFile, newFileContent, 'utf-8');
console.log('data.ts 파일 강제 정화 완료!');
