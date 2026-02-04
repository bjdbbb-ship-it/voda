#!/usr/bin/env node

/**
 * 모든 데이터 파일에서 위스키 이름 중복을 체크하는 스크립트
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🔍 위스키 데이터 중복 전수 조사 시작...\n');

        const module = await import('../src/lib/whisky-utils.ts');
        const normalizeWhiskyName = module.normalizeWhiskyName || (module.default && module.default.normalizeWhiskyName);

        if (typeof normalizeWhiskyName !== 'function') {
            throw new Error(`normalizeWhiskyName is not a function (type: ${typeof normalizeWhiskyName})`);
        }

        const files = [
            'src/lib/data.ts',
            'src/lib/global-data.ts',
            'src/lib/whisky-pool.ts'
        ];

        const allWhiskies = [];

        for (const file of files) {
            const filePath = path.join(process.cwd(), file);
            if (!fs.existsSync(filePath)) {
                console.warn(`⚠️ 파일을 찾을 수 없음: ${file}`);
                continue;
            }

            const content = fs.readFileSync(filePath, 'utf-8');

            // name: "..." 패턴 매칭
            const nameMatches = content.match(/name:\s*["'](.+?)["']/g);
            if (nameMatches) {
                nameMatches.forEach(match => {
                    const name = match.match(/["'](.+?)["']/)[1];
                    allWhiskies.push({
                        original: name,
                        normalized: normalizeWhiskyName(name),
                        file: file
                    });
                });
            }
        }

        console.log(`📊 총 검사 항목 수: ${allWhiskies.length}`);

        const duplicates = {};
        const seen = {};

        allWhiskies.forEach(item => {
            if (seen[item.normalized]) {
                if (!duplicates[item.normalized]) {
                    duplicates[item.normalized] = [seen[item.normalized]];
                }
                duplicates[item.normalized].push(item);
            } else {
                seen[item.normalized] = item;
            }
        });

        const duplicateCount = Object.keys(duplicates).length;
        if (duplicateCount > 0) {
            console.log(`\n❌ 중복 발견! (${duplicateCount}개 그룹):`);
            for (const key in duplicates) {
                console.log(`\n--- [${key}] ---`);
                duplicates[key].forEach(d => {
                    console.log(`  - ${d.original} (${d.file})`);
                });
            }
        } else {
            console.log('\n✅ 중복이 발견되지 않았습니다. 모든 데이터가 정규화되었습니다.');
        }

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
