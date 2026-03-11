#!/usr/bin/env node

/**
 * 2026-02-02 ~ 2026-02-12 기간의 누락된 데이터를 일괄 생성하는 스크립트 (안정화 버전)
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🔄 대규모 데이터 복구 프로젝트 시작 (2/2 ~ 2/12)...\n');

        // [임시] 환경 변수 설정 문제 해결을 위한 직접 지정
        process.env.GEMINI_API_KEY = "AIzaSyD7mtQq9O0Q7NVRkitCN4L3CWAQYH1yM-8";

        if (!process.env.GEMINI_API_KEY) {
            console.error('❌ GEMINI_API_KEY가 설정되지 않았습니다.');
            process.exit(1);
        }

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

        // 1. 필요한 모듈 동적 import
        console.log('📦 모듈 로드 중...');
        const contentModule = await import('../src/lib/contentGenerator.ts');
        const generateDailyArticle = contentModule.generateDailyArticle || (contentModule.default && contentModule.default.generateDailyArticle);

        const dataModule = await import('../src/lib/data.ts');
        const existingWhiskies = dataModule.whiskies || (dataModule.default && dataModule.default.whiskies) || [];

        const globalDataModule = await import('../src/lib/global-data.ts');
        const globalWhiskies = globalDataModule.globalWhiskies || (globalDataModule.default && globalDataModule.default.globalWhiskies) || [];

        const poolModule = await import('../src/lib/whisky-pool.ts');
        const whiskyPool = poolModule.whiskyPool || (poolModule.default && poolModule.default.whiskyPool) || [];

        console.log(`📊 현재 위스키 DB 상태: ${existingWhiskies.length}종`);
        console.log(`📊 가용 풀 규모: ${whiskyPool.length + globalWhiskies.length}종`);

        const dates = [
            '2026-02-02', '2026-02-03', '2026-02-04', '2026-02-05',
            '2026-02-06', '2026-02-07', '2026-02-08', '2026-02-09',
            '2026-02-10', '2026-02-11', '2026-02-12'
        ];

        let allNewArticles = [];
        let allNewWhiskies = [];
        let existingNames = new Set(existingWhiskies.map(w => (w.name || '').toLowerCase()));

        for (const date of dates) {
            console.log(`\n📅 [${date}] 작업 진행 중...`);

            // --- 1. 기사 생성 ---
            console.log(`   📝 AI 기사 작성 중...`);
            try {
                const article = await generateDailyArticle({ customDate: date });
                if (article) {
                    const articleStr = `    {
        id: "${article.id}",
        slug: "${article.slug}",
        title: "${article.title}",
        subtitle: "${article.subtitle}",
        category: "${article.category}",
        author: "${article.author}",
        publishedAt: "${article.publishedAt}",
        imageUrl: "${article.imageUrl}",
        content: \`${article.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
        tags: ${JSON.stringify(article.tags)},
    }`;
                    allNewArticles.push(articleStr);
                    console.log(`      ✅ 기사 생성 성공: ${article.title}`);
                } else {
                    console.log(`      ⏭️ 기사 중복 또는 생성 건너뜐`);
                }
            } catch (artErr) {
                console.error(`      ❌ 기사 생성 실패 (${date}):`, artErr.message);
            }

            // --- 2. 위스키 데이터 생성 (매일 10종) ---
            console.log(`   🥃 위스키 데이터 선별 중...`);
            const candidates = [...whiskyPool, ...globalWhiskies].filter(w => {
                if (!w || !w.name) return false;
                return !existingNames.has(w.name.toLowerCase());
            });

            if (candidates.length >= 10) {
                const selected = candidates.sort(() => 0.5 - Math.random()).slice(0, 10);
                selected.forEach(w => {
                    existingNames.add(w.name.toLowerCase());
                    const whisky = {
                        ...w,
                        availableDate: date,
                        priceRange: w.priceRange || (w.basePrice > 200 ? 'luxury' : w.basePrice > 100 ? 'premium' : w.basePrice > 50 ? 'mid' : 'budget'),
                        flavorProfile: w.flavorProfile || { peat: 0, sweet: 5, fruit: 5, spice: 5, body: 5 },
                        description: w.description || `${w.name}은(는) ${w.region} 지역의 매력적인 ${w.type} 위스키입니다.`
                    };
                    const whiskyStr = `    {
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
        description: "${whisky.description.replace(/"/g, '\\"')}"
    }`;
                    allNewWhiskies.push(whiskyStr);
                });
                console.log(`      ✅ 위스키 10종 선별 완료`);
            } else {
                console.log(`      ⚠️ 후보 위스키 부족 (${candidates.length}종 남음).`);
            }
        }

        // --- 3. data.ts 일괄 업데이트 ---
        console.log('\n💾 data.ts 파일에 일괄 데이터 주입 중...');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // Articles 삽입
        const articlesRegex = /export const articles: Article\[\] = \[([\s\S]*?)\];/;
        const artMatch = dataContent.match(articlesRegex);
        if (artMatch && allNewArticles.length > 0) {
            let existing = artMatch[1].trim();
            if (existing && !existing.endsWith(',')) existing += ',';
            const updated = `export const articles: Article[] = [\n${existing}\n${allNewArticles.join(',\n')}\n];`;
            dataContent = dataContent.replace(articlesRegex, updated);
        }

        // Whiskies 삽입
        const whiskiesRegex = /export const whiskies: Whisky\[\] = \[([\s\S]*?)\];/;
        const wMatch = dataContent.match(whiskiesRegex);
        if (wMatch && allNewWhiskies.length > 0) {
            let existing = wMatch[1].trim();
            if (existing && !existing.endsWith(',')) existing += ',';
            const updated = `export const whiskies: Whisky[] = [\n${existing}\n${allNewWhiskies.join(',\n')}\n];`;
            dataContent = dataContent.replace(whiskiesRegex, updated);
        }

        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');
        console.log('\n✨ 모든 데이터 복구가 완료되었습니다! (기사: ' + allNewArticles.length + '건, 위스키: ' + allNewWhiskies.length + '종)');
        process.exit(0);

    } catch (error) {
        console.error('\n❌ 복구 중 치명적 오류 발생:', error);
        process.exit(1);
    }
}

main();
