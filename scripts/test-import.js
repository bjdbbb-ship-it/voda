import { whiskies } from '../src/lib/data.ts';
console.log('Whiskies type:', typeof whiskies);
if (whiskies) {
    console.log('Whiskies length:', whiskies.length);
} else {
    console.log('Whiskies is UNDEFINED');
}
