import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/data.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const head = lines.slice(0, 45); // Line 1 to 45 (0-indexed 0-44)
const tailStart = lines.findIndex(line => line.includes('export const whiskies: Whisky[] = ['));

if (tailStart === -1) {
    console.error('❌ Could not find whiskies export!');
    process.exit(1);
}

const tail = lines.slice(tailStart);

const newArticles = [
    'export const articles: Article[] = [',
    '    {',
    '        id: "1",',
    '        slug: "whisky-magazine-voda-launch",',
    '        title: "위스키 매거진 VODA에 오신 것을 환영합니다",',
    '        subtitle: "취향의 발견, 위스키의 모든 것",',
    '        category: "공지사항",',
    '        author: "VODA",',
    '        publishedAt: "2026-02-23",',
    '        imageUrl: "https://images.unsplash.com/photo-1527281473222-79366a5b8b73?auto=format&fit=crop&q=80&w=800",',
    '        content: `',
    '## 환영합니다!',
    '',
    '위스키 매거진 VODA가 정식 서비스를 시작했습니다. ',
    '이곳에서 당신만의 위스키 취향을 발견하고, 전 세계의 다양한 위스키 소식을 접해보세요.',
    '',
    '매일 새로운 위스키 정보와 기사가 업데이트됩니다.',
    '        `,',
    '        tags: ["공지", "위스키", "VODA"]',
    '    }',
    '];',
    ''
];

const newFileContent = [...head, ...newArticles, ...tail].join('\n');
fs.writeFileSync(filePath, newFileContent, 'utf8');

console.log('✅ data.ts 기사 섹션 재구성 완료!');
