const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('Original line count:', lines.length);

let newLines = [];
let inObject = false;
let inInterface = false;
let removedCount = 0;

for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 인터페이스 시작 감지
    if (trimmed.startsWith('export interface')) {
        inInterface = true;
    }

    // 객체 시작 감지
    if (trimmed.startsWith('{') || (trimmed.includes(':') && trimmed.endsWith('{'))) {
        inObject = true;
    }

    // 오염된 라인 식별 (인터페이스와 객체 외부의 프로퍼티 형식)
    if (!inInterface && !inObject &&
        trimmed.includes(':') &&
        !trimmed.startsWith('export const') &&
        !trimmed.startsWith('import') &&
        !trimmed.startsWith('//')) {

        console.log(`Removing ghost line ${i + 1}: ${trimmed}`);
        removedCount++;
        continue;
    }

    // KRW 단독 라인 제거
    if (!inInterface && !inObject && trimmed.includes('KRW') && !trimmed.includes(':') && !trimmed.startsWith('//')) {
        console.log(`Removing garbage line ${i + 1}: ${trimmed}`);
        removedCount++;
        continue;
    }

    // 객체/인터페이스 종료 처리
    if (trimmed.startsWith('}') || trimmed.startsWith('},')) {
        inObject = false;
        inInterface = false;
    }

    newLines.push(rawLine);
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Cleaned line count:', newLines.length);
console.log(`Removed ${removedCount} lines.`);
