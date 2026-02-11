const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);

console.log('Total lines:', lines.length);

const ids = [];
lines.forEach((l, i) => {
    const match = l.match(/id:\s*"(w\d+)"/);
    if (match) {
        ids.push({ id: match[1], line: i + 1 });
    }
});

console.log('Found', ids.length, 'whisky ID entries.');

const idCounts = {};
ids.forEach(item => {
    if (!idCounts[item.id]) idCounts[item.id] = [];
    idCounts[item.id].push(item.line);
});

const duplicates = Object.keys(idCounts).filter(id => idCounts[id].length > 1);
console.log('Unique IDs:', Object.keys(idCounts).length);
console.log('Duplicate IDs found:', duplicates.length);

if (duplicates.length > 0) {
    console.log('\nSample duplicates:');
    duplicates.slice(0, 10).forEach(id => {
        console.log(`${id}: lines ${idCounts[id].join(', ')}`);
    });
}

// Check around the failing line 1857
console.log('\n--- Context around 1857 ---');
for (let i = 1850; i <= 1865; i++) {
    if (lines[i - 1]) console.log(`${i}: ${lines[i - 1]}`);
}
