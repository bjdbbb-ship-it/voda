const fs = require('fs');
const path = require('path');

const oldDataPath = path.join(__dirname, '../temp_final.ts');
const newDataPath = path.join(__dirname, '../src/lib/data.ts');

if (!fs.existsSync(oldDataPath)) {
    console.error('temp_final.ts 가 없습니다.');
    process.exit(1);
}

// 1. 바이너리로 읽기
const buffer = fs.readFileSync(oldDataPath);

// 2. PowerShell 출력 파일 정규화 (BOM 제거 및 Null 바이트 필터링)
// UTF-16LE든 UTF-8이든 한글과 ASCII 텍스트를 보존하기 위한 공격적인 필터링
const sanitized = buffer.filter(b => b !== 0 && b !== 0xFE && b !== 0xFF).toString('utf8');

// 3. 기사 데이터 추출 (정규식 개선)
const articlesRegex = /export const articles: Article\[\] = \[([\s\S]*?)\];/;
const match = sanitized.match(articlesRegex);

if (!match) {
    console.error('기사 데이터를 찾을 수 없습니다.');
    process.exit(1);
}

const articlesBody = match[1].trim();

// 4. 현재 파일의 articles 배열 교체
const newContent = fs.readFileSync(newDataPath, 'utf-8');
const updatedContent = newContent.replace(articlesRegex, `export const articles: Article[] = [\n${articlesBody}\n];`);

fs.writeFileSync(newDataPath, updatedContent, 'utf-8');
console.log('기사 데이터 복구 완료!');
