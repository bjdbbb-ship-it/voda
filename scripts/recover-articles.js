#!/usr/bin/env node

/**
 * 누락된 날짜의 위스키 기사를 일괄 생성하여 data.ts에 추가하는 스크립트
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🚀 누락 기사 복구 시작...\n');

        const module = await import('../src/lib/contentGenerator.ts');
        const generateDailyArticle = module.generateDailyArticle || (module.default && module.default.generateDailyArticle);

        if (typeof generateDailyArticle !== 'function') {
            throw new Error(`generateDailyArticle is not a function (type: ${typeof generateDailyArticle})`);
        }

        const missingDates = [
            '2026-01-31',
            '2026-02-01',
            '2026-02-02',
            '2026-02-03',
            '2026-02-04',
            '2026-02-05'
        ];

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        for (const date of missingDates) {
            console.log(`📝 ${date} 기사 생성 중...`);
            const newArticle = await generateDailyArticle({ customDate: date });

            console.log(`✅ 생성 완료: ${newArticle.title}`);

            // articles 배열 찾기
            const articlesMatch = dataContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
            if (!articlesMatch) throw new Error('articles 배열을 찾을 수 없습니다.');

            const newArticleString = `    {
        id: "${newArticle.id}",
        slug: "${newArticle.slug}",
        title: "${newArticle.title}",
        subtitle: "${newArticle.subtitle}",
        category: "${newArticle.category}",
        author: "${newArticle.author}",
        publishedAt: "${newArticle.publishedAt}",
        imageUrl: "${newArticle.imageUrl}",
        content: \`${newArticle.content.replace(/`/g, '\\`')}\`,
        tags: ${JSON.stringify(newArticle.tags)},
    }`;

            const existingArticles = articlesMatch[1].trim();
            const updatedArticlesContent = existingArticles.endsWith(',')
                ? `${existingArticles}\n${newArticleString},`
                : `${existingArticles},\n${newArticleString},`;

            dataContent = dataContent.replace(
                /export const articles: Article\[\] = \[[\s\S]*?\];/,
                `export const articles: Article[] = [\n${updatedArticlesContent}\n];`
            );
        }

        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');
        console.log('\n🎉 모든 누락 기사가 복구되어 data.ts에 저장되었습니다.');

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
