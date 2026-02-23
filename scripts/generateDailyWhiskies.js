#!/usr/bin/env node

/**
 * 매일 자동으로 새로운 위스키 10종을 data.ts에 추가하는 스크립트
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🥃 데일리 위스키 업데이트 시작...\n');

        // 모듈 로드
        const dataPath = path.join(process.cwd(), 'src/lib/data.ts');
        const globalDataPath = path.join(process.cwd(), 'src/lib/global-data.ts');
        const poolDataPath = path.join(process.cwd(), 'src/lib/whisky-pool.ts');

        // Dynamic imports for TS files using tsx
        console.log('📦 데이터 모듈 로드 중...');
        const dataMod = await import('../src/lib/data.ts');
        const whiskies = dataMod.whiskies || (dataMod.default && dataMod.default.whiskies);

        const globalDataMod = await import('../src/lib/global-data.ts');
        const globalWhiskies = globalDataMod.globalWhiskies || (globalDataMod.default && globalDataMod.default.globalWhiskies);

        const poolDataMod = await import('../src/lib/whisky-pool.ts');
        const whiskyPool = poolDataMod.whiskyPool || (poolDataMod.default && poolDataMod.default.whiskyPool);

        if (!whiskies) {
            console.log('Data module keys:', Object.keys(dataMod));
            console.error('❌ whiskies가 undefined입니다!');
            process.exit(1);
        }

        const existingNames = new Set(whiskies.map(w => w.name.toLowerCase()));
        const existingIds = new Set(whiskies.map(w => w.id));

        // 후보군 합치기 및 중복 제거
        const candidates = [...whiskyPool, ...globalWhiskies].filter(w => {
            if (!w || !w.name || !w.id) return false;
            // 이름 또는 ID가 이미 존재하면 제외
            return !existingNames.has(w.name.toLowerCase()) && !existingIds.has(w.id);
        });

        if (candidates.length === 0) {
            console.log('ℹ️ 추가할 새로운 위스키가 없습니다.');
            return;
        }

        // 10개 무작위 선택
        const shuffled = candidates.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);
        const today = new Date().toISOString().split('T')[0];

        console.log(`📝 오늘 추가될 위스키 (${selected.length}종):`);
        selected.forEach(w => console.log(`   - ${w.name}`));

        // data.ts 업데이트
        let dataContent = fs.readFileSync(dataPath, 'utf-8');

        // [Fix] 기존 데이터의 잘못된 쉼표(,,) 정리
        dataContent = dataContent.replace(/,\s*,/g, ',');

        // whiskies 배열 찾기
        const whiskiesRegex = /export const whiskies: Whisky\[\] = \[([\s\S]*?)\];/;
        const match = dataContent.match(whiskiesRegex);

        if (!match) {
            throw new Error('whiskies 배열을 찾을 수 없습니다.');
        }

        const newWhiskiesStrings = selected.map(w => {
            const whisky = {
                ...w,
                availableDate: today,
                priceRange: w.priceRange || (w.basePrice > 200 ? 'luxury' : w.basePrice > 100 ? 'premium' : w.basePrice > 50 ? 'mid' : 'budget'),
                flavorProfile: w.flavorProfile || { peat: 0, sweet: 5, fruit: 5, spice: 5, body: 5 },
                description: w.description || `${w.name}은(는) ${w.region} 지역의 매력적인 ${w.type} 위스키입니다.`
            };
            return `    {
        id: "${whisky.id}",
        name: "${whisky.name}",
        type: "${whisky.type}",
        region: "${whisky.region}",
        priceRange: "${whisky.priceRange}",
        basePrice: ${whisky.basePrice},
        currency: "${whisky.currency || 'USD'}",
        flavorProfile: ${JSON.stringify(whisky.flavorProfile)},
        availableDate: "${whisky.availableDate}",
        tags: ${JSON.stringify(whisky.tags || [])},
        imageUrl: "${whisky.imageUrl || ''}",
        description: "${whisky.description}"
    }`;
        });

        // 기존 배열 끝에 새 위스키 추가 (중복 쉼표 방지 로직)
        let existingWhiskies = match[1].trim();
        if (existingWhiskies.endsWith(',')) {
            existingWhiskies = existingWhiskies.slice(0, -1).trim();
        }

        const updatedWhiskies = `export const whiskies: Whisky[] = [${existingWhiskies},
${newWhiskiesStrings.join(',\n')}
];`;

        dataContent = dataContent.replace(whiskiesRegex, updatedWhiskies);
        fs.writeFileSync(dataPath, dataContent, 'utf-8');

        console.log('\n💾 data.ts 가 성공적으로 업데이트되었습니다.');
        console.log(`\n🎉 완료! 한국 시간 ${new Date().getHours()}시에 10종의 위스키가 추가되었습니다.`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
