const fs = require('fs');
const path = require('path');

function normalizeName(name) {
    // "Macallan 18 Year Old Sherry Oak / 맥캘란 18년 셰리 오크" -> "macallan 18 year old sherry oak"
    const englishPart = name.split('/')[0].trim().toLowerCase();
    // Remove special characters and extra spaces
    return englishPart.replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

async function main() {
    console.log('🔍 whisky-pool.ts 중복 제거 시작...');

    const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
    const content = fs.readFileSync(poolPath, 'utf-8');

    // Extract the array content
    const match = content.match(/export const whiskyPool: Partial<Whisky>\[] = \[([\s\S]*?)\];/);
    if (!match) {
        console.error('❌ whiskyPool 배열을 찾을 수 없습니다.');
        return;
    }

    const arrayContent = match[1];

    // Very basic object extraction - matching { ... } with trailing comma
    // This is tricky because content has nested objects (flavorProfile)
    // We'll use a more robust regex or manual matching
    const entries = [];
    let currentObject = '';
    let braceCount = 0;

    for (let i = 0; i < arrayContent.length; i++) {
        const char = arrayContent[i];
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;

        currentObject += char;

        if (braceCount === 0 && char === '}') {
            // Find next comma or start of next object
            let j = i + 1;
            while (j < arrayContent.length && (arrayContent[j] === ',' || /\s/.test(arrayContent[j]))) {
                currentObject += arrayContent[j];
                j++;
            }
            entries.push(currentObject.trim());
            currentObject = '';
            i = j - 1;
        }
    }

    console.log(`📊 총 ${entries.length}개의 항목을 찾았습니다.`);

    const uniqueWhiskies = new Map();
    const duplicatesToRemove = [];
    const keepEntries = [];

    entries.forEach(entry => {
        // Poor man's property extraction
        const nameMatch = entry.match(/name:\s*"([^"]+)"/);
        if (!nameMatch) {
            keepEntries.push(entry);
            return;
        }

        const fullName = nameMatch[1];
        const normalizedName = normalizeName(fullName);

        if (uniqueWhiskies.has(normalizedName)) {
            console.log(`❌ 중복 발견: ${fullName}`);
            duplicatesToRemove.push(fullName);
        } else {
            uniqueWhiskies.set(normalizedName, fullName);
            keepEntries.push(entry);
        }
    });

    if (duplicatesToRemove.length === 0) {
        console.log('✅ 중복된 항목이 없습니다.');
        return;
    }

    console.log(`\n🗑️  총 ${duplicatesToRemove.length}개의 중복 항목을 제거합니다.`);

    const newContent = content.replace(
        /export const whiskyPool: Partial<Whisky>\[] = \[[\s\S]*?\];/,
        `export const whiskyPool: Partial<Whisky>[] = [\n    ${keepEntries.join('\n    ')}\n];`
    );

    fs.writeFileSync(poolPath, newContent, 'utf-8');
    console.log('✅ whisky-pool.ts 파일이 업데이트되었습니다.');
}

main();
