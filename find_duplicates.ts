import { articles, whiskies, Article, Whisky } from './src/lib/data';
import { globalWhiskies } from './src/lib/global-data';
import { whiskyPool } from './src/lib/whisky-pool';
import { normalizeWhiskyName } from './src/lib/whisky-utils';

function findDuplicates() {
    const allWhiskies: { name: string, source: string, id: string }[] = [];

    whiskies.forEach(w => allWhiskies.push({ name: w.name, source: 'data.ts', id: w.id }));
    globalWhiskies.forEach(w => allWhiskies.push({ name: w.name || '', source: 'global-data.ts', id: w.id || '' }));
    whiskyPool.forEach(w => allWhiskies.push({ name: w.name || '', source: 'whisky-pool.ts', id: w.id || '' }));

    const nameMap = new Map<string, { name: string, source: string, id: string }[]>();

    allWhiskies.forEach(w => {
        const normalized = normalizeWhiskyName(w.name);
        if (!nameMap.has(normalized)) {
            nameMap.set(normalized, []);
        }
        nameMap.get(normalized)!.push(w);
    });

    console.log('--- Duplicate Findings ---');
    let hasDuplicates = false;
    nameMap.forEach((occurrences, normalized) => {
        if (occurrences.length > 1) {
            hasDuplicates = true;
            console.log(`Normalized Name: "${normalized}"`);
            occurrences.forEach(o => {
                console.log(`  - ${o.name} (Source: ${o.source}, ID: ${o.id})`);
            });
        }
    });

    if (!hasDuplicates) {
        console.log('No duplicates found across all sources.');
    }
}

findDuplicates();
