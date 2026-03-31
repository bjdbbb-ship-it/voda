const fs = require('fs');
const dataContent = fs.readFileSync('src/lib/data.ts', 'utf8');
const whiskyContent = fs.readFileSync('src/lib/whisky-pool.ts', 'utf8');

const tDateMatches = [...dataContent.matchAll(/publishedAt:\s*['"]([^'"]+)['"]/g), ...dataContent.matchAll(/date:\s*['"]([^'"]+)['"]/g)];
const whiskyMatches = [...whiskyContent.matchAll(/availableDate:\s*['"]([^'"]+)['"]/g)];

tDateMatches.sort((a,b) => a[1].localeCompare(b[1]));
whiskyMatches.sort((a,b) => a[1].localeCompare(b[1]));

console.log('Last date in data.ts:', tDateMatches.length ? tDateMatches[tDateMatches.length - 1][1] : 'none');
console.log('Last date in whisky-pool.ts:', whiskyMatches.length ? whiskyMatches[whiskyMatches.length - 1][1] : 'none');
