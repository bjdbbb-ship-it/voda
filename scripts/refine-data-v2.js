const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf-8');

// whiskies 배열 구간 추출
const whiskiesMatch = content.match(/export const whiskies: Whisky\[\] = \[([\s\S]*?)\];/);
if (!whiskiesMatch) {
    console.error('whiskies 배열을 찾을 수 없습니다.');
    process.exit(1);
}

const whiskiesStr = whiskiesMatch[1];
// 각 객체를 분리 (단순 정규표현식으로는 중첩 구조 때문에 어려울 수 있으므로 조심스럽게 접근)
// 여기서는 w1~w80까지의 원본 데이터만 남기는 것이 목표이므로, 
// 1997라인 이전의 데이터만 살리는 방식으로 접근

const splitIndex = content.indexOf('id: "w5"', content.indexOf('id: "w80"'));
// w80 이후에 처음 나타나는 w5가 중복의 시작점

if (splitIndex !== -1) {
    const header = content.substring(0, splitIndex).trim();
    // 마지막 쉼표 처리 및 배열 닫기
    let refinedHeader = header;
    if (refinedHeader.endsWith('{')) {
        refinedHeader = refinedHeader.substring(0, refinedHeader.lastIndexOf('{')).trim();
    }
    if (refinedHeader.endsWith(',')) {
        refinedHeader = refinedHeader.substring(0, refinedHeader.length - 1).trim();
    }

    const finalContent = refinedHeader + '\n];\n';
    fs.writeFileSync(dataFilePath, finalContent, 'utf-8');
    console.log('✅ data.ts 정제가 완료되었습니다.');
} else {
    console.log('ℹ️ 중복 패턴을 찾지 못했거나 이미 정제된 상태입니다.');
}
