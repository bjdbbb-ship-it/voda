const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace all instances of multiple backslashes followed by ${ with exactly one backslash
// This will fix \\${ to \${
content = content.replace(/\\+\$\{/g, '\\${');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ data.ts globally fixed (all ${ variables properly escaped)');
