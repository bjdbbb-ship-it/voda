
import fs from 'fs';
import path from 'path';

const globalDataPath = path.join(process.cwd(), 'src', 'lib', 'global-data.ts');

const duplicateIds = [
    "g46", "g59", "g42", "g66", "g54", "g76", "g58", "g40",
    "g44", "g71", "g74", "g61", "g62", "g63", "g90", "g49",
    "g50", "g88", "g89", "g84"
];

function cleanupDuplicates() {
    let content = fs.readFileSync(globalDataPath, 'utf-8');
    const lines = content.split('\n');

    // We will comment out lines that contain the duplicate IDs
    // format: { id: "g46", ... 

    const newLines = lines.map(line => {
        // Check if line contains one of the IDs as a whole word/quoted string to be safe
        // e.g. id: "g46"
        const foundId = duplicateIds.find(id => line.includes(`id: "${id}"`));

        if (foundId) {
            if (line.trim().startsWith('//')) {
                return line; // Already commented
            }
            return `    // ${line.trim()} // Duplicate of data.ts`;
        }
        return line;
    });

    fs.writeFileSync(globalDataPath, newLines.join('\n'));
    console.log(`Commented out ${duplicateIds.length} duplicates in global-data.ts`);
}

cleanupDuplicates();
