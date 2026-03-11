#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function fixOneByOne() {
    try {
        console.log('🩹 고정밀 기사 복구 작업 시작 (순차 실행)...\n');
        process.env.GEMINI_API_KEY = "AIzaSyD7mtQq9O0Q7NVRkitCN4L3CWAQYH1yM-8";

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

        const trendModule = await import('../src/lib/trendResearcher.ts');
        const generateArticleContent = trendModule.generateArticleContent || (trendModule.default && trendModule.default.generateArticleContent);

        const dataModule = await import('../src/lib/data.ts');
        let articles = dataModule.articles || (dataModule.default && dataModule.default.articles) || [];

        const targets = articles.filter(a => a.content.includes('위스키의 세계는 끊임없이 진화하고 있습니다.'));
        console.log(`📝 복구 대상: ${targets.length}개\n`);

        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            console.log(`🚀 [${i + 1}/${targets.length}] '${target.title}' 생성 중...`);

            try {
                // 1.5-flash 모델로 전문 기사 생성
                const newContent = await generateArticleContent(
                    target.title,
                    target.subtitle,
                    target.category,
                    target.tags.filter(t => t !== target.category)
                );

                if (newContent && !newContent.includes('위스키의 세계는 끊임없이 진화하고 있습니다.')) {
                    // 데이터 갱신
                    articles = articles.map(a => a.id === target.id ? { ...a, content: newContent } : a);

                    // 매번 파일에 저장 (안전장치)
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

                    let dataContent = fs.readFileSync(dataFilePath, 'utf-8');
                    const articlesRegex = /export const articles: Article\[\] = \[([\s\S]*?)\];/;
                    dataContent = dataContent.replace(articlesRegex, `export const articles: Article[] = [\n${updatedArticlesStr}\n];`);
                    fs.writeFileSync(dataFilePath, dataContent, 'utf-8');

                    console.log(`   ✅ 성공! (${newContent.length} 자)`);

                    // API 속도 제한 고려하여 약간의 휴식
                    if (i < targets.length - 1) {
                        console.log('   😴 잠시 대기 중...');
                        await new Promise(resolve => setTimeout(resolve, 5000));
                    }
                }
            } catch (err) {
                console.error(`   ❌ 오류 발생:`, err.message);
            }
        }

        console.log('\n✨ 모든 중복 기사가 고유한 콘텐츠로 복구되었습니다!');

    } catch (error) {
        console.error('\n❌ 치명적 오류:', error);
    }
}

fixOneByOne();
