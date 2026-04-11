const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace unescaped ${ with \${
// But be careful not to escape already escaped ones like \\${
// A simple way is to replace all ${ with \${ and then fix any \\${
content = content.replace(/\$\{/g, '\\${');
// Fix double escapes if any (though unlikely to have \\${ in the original if it was failing)
content = content.replace(/\\\\\$\{/g, '\\${');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ data.ts fixed (escaped ${ variables)');
