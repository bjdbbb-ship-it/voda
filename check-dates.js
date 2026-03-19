const fs = require('fs');
const dataContent = fs.readFileSync('src/lib/data.ts', 'utf8');
const whiskyContent = fs.readFileSync('src/lib/whisky-pool.ts', 'utf8');

const dateMatches = [...dataContent.matchAll(/date:\s*['"]([^'"]+)['"]/g)];
if (dateMatches.length > 0) {
    console.log('Last article/news date in data.ts:', dateMatches[dateMatches.length - 1][1]);
} else {
    console.log('No dates found in data.ts');
}

const whiskyMatches = [...whiskyContent.matchAll(/dateAdded:\s*['"]([^'"]+)['"]/g)];
if (whiskyMatches.length > 0) {
    console.log('Last dateAdded in whisky-pool.ts:', whiskyMatches[whiskyMatches.length - 1][1]);
} else {
    console.log('No dateAdded found in whisky-pool.ts');
}
