const fs = require('fs');

function resolveConflict(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Conflict pattern: <<<<<<< Updated upstream ... ======= ... >>>>>>> Stashed changes
    // We want the stashed changes version (the one with 2026-04-11 usually)
    const regex = /<<<<<<< Updated upstream[^]*?=======([^]*?)>>>>>>> Stashed changes/g;
    const resolved = content.replace(regex, (match, stashedContent) => {
        return stashedContent.trim();
    });
    fs.writeFileSync(filePath, resolved, 'utf8');
    console.log(`✅ Resolved conflicts in ${filePath}`);
}

['src/lib/global-data.ts', 'src/lib/whisky-pool.ts'].forEach(resolveConflict);
