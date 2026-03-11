#!/usr/bin/env node

/**
 * 중복된 본문을 가진 기사들을 식별하고 
 * 제목에 맞는 고유한 AI 콘텐츠로 교체하는 스크립트
 */

const fs = require('fs');
const path = require('path');

async function fixDuplicateArticles() {
    try {
        console.log('🩹 중복 기사 본문 수술 시작...\n');

        // [임시] API 키 직접 지정
        process.env.GEMINI_API_KEY = "AIzaSyD7mtQq9O0Q7NVRkitCN4L3CWAQYH1yM-8";

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

        // 1. 필요한 모듈 동적 import
        const trendModule = await import('../src/lib/trendResearcher.ts');
        const generateArticleContent = trendModule.generateArticleContent || (trendModule.default && trendModule.default.generateArticleContent);

        const dataModule = await import('../src/lib/data.ts');
        let articles = dataModule.articles || (dataModule.default && dataModule.default.articles) || [];

        // 2. 중복 대상 식별 (폴백 문구가 포함된 기사들)
        const targets = articles.filter(a => a.content.includes('위스키의 세계는 끊임없이 진화하고 있습니다.'));
        console.log(`📝 총 ${targets.length}개의 중복 기사를 발견했습니다.\n`);

        if (targets.length === 0) {
            console.log('✅ 수정할 대상이 없습니다.');
            return;
        }

        // 3. 각 대상별로 고유한 본문 재생성
        for (const target of targets) {
            console.log(`🚀 [ID: ${target.id}] '${target.title}' 본문 재생성 중...`);
            try {
                // generateArticleContent(title, subtitle, category, keywords)
                const newContent = await generateArticleContent(
                    target.title,
                    target.subtitle,
                    target.category,
                    target.tags.filter(t => t !== target.category)
                );

                if (newContent && !newContent.includes('위스키의 세계는 끊임없이 진화하고 있습니다.')) {
                    target.content = newContent;
                    console.log(`   ✅ 본문 복구 성공! (${newContent.length} 자)`);
                } else {
                    console.log(`   ⚠️ 재생성된 본문이 여전히 유효하지 않습니다. (건너뜀)`);
                }
            } catch (err) {
                console.error(`   ❌ [${target.id}] 생성 오류:`, err.message);
            }
        }

        // 4. data.ts 파일 업데이트
        console.log('\n💾 data.ts 파일 업데이트 중...');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        const articlesRegex = /export const articles: Article\[\] = \[([\s\S]*?)\];/;
        const artMatch = dataContent.match(articlesRegex);

        if (artMatch) {
            const updatedArticlesStr = articles.map(article => {
                return `    {
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
            }).join(',\n');

            const finalArticlesSection = `export const articles: Article[] = [\n${updatedArticlesStr}\n];`;
            dataContent = dataContent.replace(articlesRegex, finalArticlesSection);

            fs.writeFileSync(dataFilePath, dataContent, 'utf-8');
            console.log('\n✨ 모든 중복 기사 본문이 고품질 콘텐츠로 교체되었습니다!');
        }

    } catch (error) {
        console.error('\n❌ 치명적 오류 발생:', error);
    }
}

fixDuplicateArticles();
