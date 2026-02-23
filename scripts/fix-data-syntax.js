import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
let fixedLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // 1. Fix missing quotes for properties: key: "value (missing closing quote)
    // Matches: key: "something
    // Includes whiskies properties: name, type, region, priceRange, currency, imageUrl, description, etc.
    const keys = ['id', 'slug', 'title', 'subtitle', 'category', 'author', 'publishedAt', 'imageUrl', 'name', 'type', 'region', 'priceRange', 'currency', 'description', 'bottleShape', 'liquidColor', 'glassColor'];

    let lineFixed = false;
    for (const key of keys) {
        const regex = new RegExp(`^(\\s+${key}:\\s*)"([^"]+?)(?![^"]*")(.*)$`);
        if (regex.test(line)) {
            // If it starts with quote but has no closing quote on this line
            // Check if it's not a template literal (starts with `)
            if (!line.includes('`')) {
                line = line.replace(/^(\s+)(\w+):\s*"([^"]+?)\s*(,?\s*(\/\/.*)?)$/, (match, indent, k, v, suffix) => {
                    // Ensure closing quote before comma/suffix
                    let cleanV = v.trim();
                    let cleanSuffix = suffix.trim() || ',';
                    if (!cleanSuffix.startsWith(',')) cleanSuffix = ',' + cleanSuffix;
                    return `${indent}${k}: "${cleanV}"${cleanSuffix}`;
                });
                lineFixed = true;
                break;
            }
        }
    }

    // 2. Fix tags array: tags: ["a", "b, "c"]
    if (line.includes('tags: [')) {
        const match = line.match(/tags:\s*\[(.*)\]/);
        if (match) {
            let inner = match[1];
            let tags = inner.split(',').map(t => {
                let cleaned = t.trim().replace(/^"+|"+$/g, '').trim();
                return cleaned ? `"${cleaned}"` : null;
            }).filter(t => t !== null);
            line = line.replace(/tags:\s*\[.*\]/, `tags: [${tags.join(', ')}]`);
        } else if (line.includes('tags: [') && !line.includes(']')) {
            // Handled as part of general property fix if it's multiline? 
            // Most are single line in this file.
        }
    }

    // 3. Special case for description which might be very corrupted
    if (line.trim().startsWith('description:')) {
        // Ensure it's quoted if it's not a template literal
        if (!line.includes('`') && line.includes('"')) {
            const dMatch = line.match(/description:\s*"([^"]+)$/);
            if (dMatch) {
                line = line.replace(/description:\s*"([^"]+)(\s*,?\s*)$/, 'description: "$1",$2').replace(/,,$/, ',');
            }
        }
    }

    fixedLines.push(line);
}

fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
console.log('✅ data.ts 전체 구문 오류 정밀 수정 완료!');
