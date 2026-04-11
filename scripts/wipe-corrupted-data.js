const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// match the articles array
const startMarker = 'export const articles: Article[] = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
    console.error('Could not find articles array start');
    process.exit(1);
}

// Find the balancing end bracket
let bracketCount = 1;
let endIndex = -1;
for (let i = startIndex + startMarker.length; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') bracketCount--;
    if (bracketCount === 0) {
        endIndex = i;
        break;
    }
}

if (endIndex === -1) {
    console.error('Could not find articles array end');
    process.exit(1);
}

const articlesContent = content.substring(startIndex + startMarker.length, endIndex);

// Split into individual article objects
// A simple way is to match by }{ or similar patterns, but articles have nested braces.
// We can use a smarter split.
const articles = [];
let buffer = "";
let nestedBraces = 0;
let inString = null;

for (let i = 0; i < articlesContent.length; i++) {
    const char = articlesContent[i];
    buffer += char;
    
    if (char === '`') {
        if (inString === '`') inString = null;
        else if (!inString) inString = '`';
    } else if (char === '"') {
        if (inString === '"') inString = null;
        else if (!inString) inString = '"';
    } else if (char === "'") {
        if (inString === "'") inString = null;
        else if (!inString) inString = "'";
    }
    
    if (!inString) {
        if (char === '{') nestedBraces++;
        if (char === '}') {
            nestedBraces--;
            if (nestedBraces === 0) {
                articles.push(buffer.trim());
                buffer = "";
            }
        }
    }
}

console.log(`Original articles count: ${articles.length}`);

// Filter articles
const filteredArticles = articles.filter(art => {
    const dateMatch = art.match(/publishedAt:\s*"(2026-0[3-9]-[0-9]{2})"/);
    if (dateMatch) {
        const date = dateMatch[1];
        if (date >= "2026-03-30") return false; // Remove
    }
    return true;
});

console.log(`Filtered articles count: ${filteredArticles.length}`);

// Rebuild content
const newArticlesString = '\n' + filteredArticles.join(',\n\n') + '\n';
const newContent = content.substring(0, startIndex + startMarker.length) + newArticlesString + content.substring(endIndex);

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('✅ data.ts cleaned (removed articles from 2026-03-30 onwards)');
