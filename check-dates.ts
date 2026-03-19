import { articles } from './src/lib/data';
import { globalNews } from './src/lib/global-data';
import { whiskyPool } from './src/lib/whisky-pool';

console.log("Last Article:", articles[articles.length - 1]?.publishedAt || 'N/A');
console.log("Last News:", globalNews[globalNews.length - 1]?.publishedAt || 'N/A');
console.log("Last Whisky:", whiskyPool[whiskyPool.length - 1]?.dateAdded || 'N/A');
