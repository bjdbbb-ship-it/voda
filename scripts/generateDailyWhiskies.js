#!/usr/bin/env node

/**
 * 매일 자동으로 위스키 평가 데이터를 갱신하는 스크립트
 * whisky-pool.ts + global-data.ts에서 10개를 랜덤으로 선택해 availableDate를 오늘자로 업데이트
 * → 위스키 가치판단 페이지에서 오늘의 10개 위스키를 노출
 */

const fs = require('fs');
const path = require('path');

function loadEnvLocal() {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const eqIdx = line.indexOf('=');
            if (eqIdx > 0) {
                const key = line.substring(0, eqIdx).trim();
                const value = line.substring(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
                if (key) process.env[key] = value;
            }
        });
    }
}

loadEnvLocal();

async function main() {
    try {
        console.log('🥃 데일리 위스키 가치판단 업데이트 시작...\n');

        // KST 오늘 날짜 또는 커스텀 날짜
        const dateArg = process.argv.find(arg => arg.startsWith('--date='));
        let today;
        if (dateArg) {
            today = dateArg.split('=')[1];
        } else {
            const now = new Date();
            const kstOffset = 9 * 60 * 60 * 1000;
            today = new Date(now.getTime() + kstOffset).toISOString().split('T')[0];
        }

        // 모듈 로드
        const poolDataMod = await import('../src/lib/whisky-pool.ts');
        const globalDataMod = await import('../src/lib/global-data.ts');

        // [Fix] ESM/CJS 호환성을 위한 데이터 접근 로직 개선
        const whiskyPool = poolDataMod.whiskyPool ||
            (poolDataMod.default && poolDataMod.default.whiskyPool) ||
            poolDataMod.default || [];
        const globalWhiskies = globalDataMod.globalWhiskies ||
            (globalDataMod.default && globalDataMod.default.globalWhiskies) ||
            globalDataMod.default || [];

        // 전체 후보군 합치기 (중복 ID 제거)
        const seen = new Set();
        const allCandidates = [...globalWhiskies, ...whiskyPool].filter(w => {
            if (!w || !w.name || !w.id) return false;
            if (seen.has(w.id)) return false;
            seen.add(w.id);
            return true;
        });

        if (allCandidates.length === 0) {
            console.log('❌ 위스키 후보군이 비어있습니다.');
            process.exit(1);
        }

        // 업데이트 순서 결정: availableDate가 가장 오래되었거나 없는 순으로 정렬
        // (이를 통해 전체 위스키가 한 번씩 돌아가며 노출되는 순환 구조 형성)
        const sorted = [...allCandidates].sort((a, b) => {
            const dateA = a.availableDate || '0000-00-00';
            const dateB = b.availableDate || '0000-00-00';
            return dateA.localeCompare(dateB);
        });

        // 상위 10개 선택
        const selected = sorted.slice(0, 10);

        console.log(`📝 오늘(${today}) 선정된 위스키 10종:`);
        selected.forEach((w, i) => console.log(`   ${i + 1}. ${w.name}`));

        // global-data.ts 업데이트
        const globalDataPath = path.join(process.cwd(), 'src', 'lib', 'global-data.ts');
        let fileContent = fs.readFileSync(globalDataPath, 'utf-8');
        let updatedCount = 0;

        for (const whisky of selected) {
            const escapedId = whisky.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // availableDate 필드가 있는 경우 업데이트
            const withDate = new RegExp(
                `(id:\\s*"${escapedId}"[\\s\\S]*?availableDate:\\s*")[^"]*(")`
            );
            if (withDate.test(fileContent)) {
                fileContent = fileContent.replace(withDate, `$1${today}$2`);
                updatedCount++;
            }
        }

        if (updatedCount > 0) {
            fs.writeFileSync(globalDataPath, fileContent, 'utf-8');
            console.log(`\n💾 global-data.ts: ${updatedCount}개 위스키 날짜 업데이트`);
        }

        // whisky-pool.ts 업데이트
        const poolDataPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
        let poolContent = fs.readFileSync(poolDataPath, 'utf-8');
        let poolUpdated = 0;

        for (const whisky of selected) {
            const escapedId = whisky.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const withDate = new RegExp(
                `(id:\\s*"${escapedId}"[\\s\\S]*?availableDate:\\s*")[^"]*(")`
            );
            if (withDate.test(poolContent)) {
                poolContent = poolContent.replace(withDate, `$1${today}$2`);
                poolUpdated++;
            }
        }

        if (poolUpdated > 0) {
            fs.writeFileSync(poolDataPath, poolContent, 'utf-8');
            console.log(`💾 whisky-pool.ts: ${poolUpdated}개 위스키 날짜 업데이트`);
        }

        console.log(`\n🎉 완료! ${today} 기준 10종의 위스키 가치판단이 선정되었습니다.`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
