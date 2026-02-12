#!/usr/bin/env node
const { execSync } = require('child_process');

async function main() {
    const dates = ['2026-02-10', '2026-02-11', '2026-02-12', '2026-02-13'];

    for (const date of dates) {
        console.log(`\n📅 Generating article for date: ${date}`);
        try {
            // --env-file option used for tsx
            const output = execSync(`npx tsx --env-file=.env.local scripts/generateDailyArticle.js --date=${date}`, { encoding: 'utf-8' });
            console.log(output);
        } catch (error) {
            console.error(`❌ Error generating for ${date}:`, error.stdout || error.message);
        }
    }
}

main();
