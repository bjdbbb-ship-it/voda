import { globalWhiskies } from '../src/lib/global-data.ts';
import { whiskyPool } from '../src/lib/whisky-pool.ts';

console.log('Global whiskies count:', globalWhiskies.length);
console.log('Pool whiskies count:', whiskyPool.length);

const all = [...globalWhiskies, ...whiskyPool];
const ids = new Set(all.map(w => w.id));
console.log('Unique source whiskies count:', ids.size);
