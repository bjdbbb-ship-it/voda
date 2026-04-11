const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace any sequence of backslashes before ${ with exactly one backslash
// Regex: zero or more backslashes, followed by ${
// But wait, if it's zero backslashes, we want one.
// If it's one, we want one.
// If it's two, we want one.
content = content.replace(/\\*\$\{/g, '\\${');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ data.ts fixed (properly escaped ${ nodes)');
