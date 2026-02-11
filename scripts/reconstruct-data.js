const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const rawContent = fs.readFileSync(filePath, 'utf8');

// 1. Extract Header (Imports and Interfaces)
// Assuming imports and interfaces are at the top and end before "export const articles"
const headerMatch = rawContent.match(/^([\s\S]*?)(?=export const articles)/);
const header = headerMatch ? headerMatch[1] : '';

// 2. Extract Articles Block
// Assuming articles block is relatively safe or we can extract it by finding its start and end
// But if articles block is also corrupted, we might need similar logic. 
// For now, let's assume articles are fine or we extract until "export const whiskies"
const articlesMatch = rawContent.match(/(export const articles: Article\[\] = \[[\s\S]*?\];)/);
const articlesBlock = articlesMatch ? articlesMatch[1] : 'export const articles: Article[] = [];';

// 3. Extract Whiskies
// We will scan the entire file for objects that look like whiskies.
// Pattern: start with '{', contains 'id: "w..."', ends with '},'
// But since structure is broken, we scan for 'id: "w' and capture surrounding braces.

const whiskiesMap = new Map();
const lines = rawContent.split('\n');
let currentWhisky = [];
let capturing = false;
let braceCount = 0;
let currentId = null;

// Heuristic: Find lines starting with 'id: "w' inside an object
// We will iterate lines.
// If we find 'id: "w...', we assume a new whisky object started just before this line (at the previous '{').
// But if the previous '{' was part of a broken object, it's tricky.

// Alternative Strategy: Regex for IDs
const idRegex = /id:\s*"(w\d+)"/g;
let match;
const validWhiskies = [];

// We will use a precise block extractor.
function extractBlock(startIndex) {
    let openBraces = 0;
    let block = '';
    let foundStart = false;

    // Search backwards for the opening brace of this object
    // scan backwards from index
    let i = startIndex;
    // Actually, usually 'id' is the first property. 
    // The '{' should be on the same line or previous lines.

    // New Strategy: specific to the file format
    // search for { then id: "w..."

    // Let's blindly extract all strings that look like:
    // {
    //    id: "w...",
    //    ...
    // },

    // We can't rely on valid JSON or JS structure.

    return null;
}

// Simple Line Scanner
// 1. Look for `id: "w..."`.
// 2. Identify the start brace `{` for that ID.
// 3. Scan forward until matching closing brace `}`.
// 4. If we hit ANOTHER `id: "w..."` before closing -> Corruption! discard current, start new.

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('id: "w')) {
        // Found a whisky ID candidate
        const idMatch = line.match(/id:\s*"(w\d+)"/);
        if (idMatch) {
            const newId = idMatch[1];

            // Check if we were already capturing a whisky
            if (capturing) {
                // If we were capturing and haven't finished (braceCount > 0), 
                // and we found a NEW ID, it means the previous one was corrupted/cut-off.
                console.log(`⚠️ Corruption detected! Abandoning ID ${currentId} (incomplete) found new ID ${newId} at line ${i + 1}`);
            }

            // Start capturing new whisky
            capturing = true;
            currentId = newId;
            currentWhisky = [];
            braceCount = 1; // We assume the '{' was just before or we treat this block as starting

            // Look backwards for '{'
            let prevIndex = i;
            let foundStart = false;
            while (prevIndex >= 0) {
                const prevLine = lines[prevIndex];
                if (prevLine.trim().includes('{') && !prevLine.trim().startsWith('//')) {
                    // We add lines from prevIndex to i-1 to currentWhisky
                    // But wait, what if prevLine has closure of previous?
                    // Assuming standard formatting:
                    // },
                    // {
                    //    id: "w..."

                    // So we only grab the line with '{'
                    currentWhisky.push(prevLine.trim().startsWith('{') ? '{' : lines[prevIndex]); // Simplified
                    // Add intermediate lines?
                    for (let k = prevIndex + 1; k < i; k++) currentWhisky.push(lines[k]);

                    foundStart = true;
                    break;
                }
                prevIndex--;
                // Safety breakdown limit
                if (i - prevIndex > 5) break;
            }

            if (!foundStart) {
                // Formatting is weird, start from current line?
                // Probably line i contains "id", previous line was "{"
                currentWhisky.push('{'); // Force start
            }

            currentWhisky.push(line);
            continue;
        }
    }

    if (capturing) {
        currentWhisky.push(line);
        // Count braces
        // This is naive count. 
        // { inside flavorProfile counts up. } inside flavorProfile counts down.
        // Final } closes the object.

        const openMatches = (line.match(/{/g) || []).length;
        const closeMatches = (line.match(/}/g) || []).length;

        // We already accounted for the starting brace manually or via loop
        if (lines[i].includes('id: "w')) {
            // current line has id, and optionally { if it's on same line (unlikely in this formatting)
            // braces accounted
        } else {
            braceCount += openMatches;
        }
        braceCount -= closeMatches;

        if (braceCount <= 0) {
            // End of object
            capturing = false;
            // Validate: check if it looks complete (has name, etc)
            const blockStr = currentWhisky.join('\n');
            if (blockStr.includes('name:') && blockStr.includes('id:')) {
                if (!whiskiesMap.has(currentId)) {
                    whiskiesMap.set(currentId, blockStr);
                    console.log(`✅ Recovered: ${currentId}`);
                }
            }
        }
    }
}

// 4. Reconstruct File
const headerClean = `import { Article, Whisky } from '@/types';

export interface FlavorProfile {
    peat: number;
    sweet: number;
    fruit: number;
    spice: number;
    body: number;
}

export interface VisualProfile {
    bottleShape: string;
    liquidColor: string;
    glassColor: string;
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    content: string;
    tags: string[];
}
`;

// Re-fetch articles just in case regex failed
// We will assume articles are Article[] = [ ... ];
// If articles block is damaged, we might lose articles. 
// User verified articles were fixed. So we trust the top part?
// Let's use the regex match.
const articlesClean = articlesBlock;

const whiskiesArrayStr = Array.from(whiskiesMap.values()).join('\n');
const whiskiesClean = `export const whiskies: Whisky[] = [
${whiskiesArrayStr}
];`;

const finalContent = `${headerClean}\n\n${articlesClean}\n\n${whiskiesClean}\n`;

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log(`🎉 Reconstruction Complete! Saved ${whiskiesMap.size} unique whiskies.`);
