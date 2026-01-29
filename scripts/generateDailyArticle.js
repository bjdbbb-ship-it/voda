#!/usr/bin/env node

/**
 * 매일 자동으로 새로운 위스키 기사를 생성하여 data.ts에 추가하는 스크립트
 * 
 * 사용법:
 * npm run generate:article
 * 
 * 또는 직접 실행:
 * node scripts/generateDailyArticle.js
 */

const fs = require('fs');
const path = require('path');

// TypeScript 파일을 직접 실행하기 위해 ts-node 사용
// 또는 빌드된 파일 사용
async function main() {
    try {
        console.log('🚀 일일 위스키 기사 생성 시작...\n');

        // contentGenerator 모듈 동적 import
        const module = await import('../src/lib/contentGenerator.ts');
        const generateDailyArticle = module.generateDailyArticle || (module.default && module.default.generateDailyArticle);

        if (typeof generateDailyArticle !== 'function') {
            throw new Error(`generateDailyArticle is not a function (type: ${typeof generateDailyArticle})`);
        }

        // 새 기사 생성 (Whiskymag, American Whiskey Mag 등 다양한 소스 반영)
        console.log('📝 AI가 최신 위스키 매거진 주제를 분석하여 독창적인 기사를 작성 중입니다...');
        const newArticle = await generateDailyArticle();

        console.log(`\n✅ 기사 생성 완료!`);
        console.log(`   제목: ${newArticle.title}`);
        console.log(`   카테고리: ${newArticle.category}`);
        console.log(`   출판일: ${newArticle.publishedAt}`);
        console.log(`   길이: ${newArticle.content.length} 자`);

        // data.ts 파일 업데이트 로직 (이미지 및 마크다운 지원 강화)
        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // 기존 articles 배열 찾기
        const articlesMatch = dataContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);

        if (!articlesMatch) {
            throw new Error('articles 배열을 찾을 수 없습니다.');
        }

        // 새 기사를 JavaScript 객체 문자열로 변환
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

        // 기존 배열 끝에 새 기사 추가
        const existingArticles = articlesMatch[1];
        const updatedArticles = `export const articles: Article[] = [${existingArticles},
${newArticleString}
];`;

        // data.ts 업데이트
        dataContent = dataContent.replace(
            /export const articles: Article\[\] = \[[\s\S]*?\];/,
            updatedArticles
        );

        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');

        console.log('\n💾 data.ts 파일이 업데이트되었습니다.');
        console.log(`\n🎉 완료! 새 기사가 성공적으로 추가되었습니다.`);
        console.log(`\n📰 사이트를 확인하세요: http://localhost:3000\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
