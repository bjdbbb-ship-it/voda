async function test() {
    try {
        const pool = await import('../src/lib/whisky-pool.ts');
        const global = await import('../src/lib/global-data.ts');
        console.log('Pool keys:', Object.keys(pool));
        console.log('Global keys:', Object.keys(global));
        console.log('Pool length:', pool.whiskyPool?.length);
        console.log('Global length:', global.globalWhiskies?.length);
    } catch (e) {
        console.error(e);
    }
}
test();
