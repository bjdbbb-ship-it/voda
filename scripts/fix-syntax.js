const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);
let newLines = [];
let skipped = 0;

for (let i = 0; i < lines.length; i++) {
    // 만약 현재 줄이 '}'이고 다음 줄이 '},'라면 (공백 무시)
    // 혹은 현재 줄이 '},'이고 다음 줄이 '},'라면
    const trimmedCurrent = lines[i].trim();
    const trimmedNext = lines[i + 1] ? lines[i + 1].trim() : '';

    if (trimmedCurrent === '}' && trimmedNext === '},') {
        process.stdout.write(`Skipping redundant brace at line ${i + 1}\n`);
        skipped++;
        continue;
    }

    if (trimmedCurrent === '},' && trimmedNext === '},') {
        process.stdout.write(`Skipping redundant brace with comma at line ${i + 1}\n`);
        skipped++;
        continue;
    }

    newLines.push(lines[i]);
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
process.stdout.write(`Total redundancy skipped: ${skipped}\n`);
