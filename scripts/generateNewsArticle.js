#!/usr/bin/env node

/**
 * 신규 위스키 소식 전용 스크립트
 * - Serper API로 복수 쿼리 실시간 검색 (영문 + 한글)
 * - 실제 신규 위스키 뉴스가 있을 때만 기사 생성
 * - 없으면 기사를 만들지 않고 조용히 종료
 *
 * 실행: npx tsx scripts/generateNewsArticle.js
 * 테스트: npx tsx scripts/generateNewsArticle.js --dry-run
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

// KST 오늘 날짜 계산
function getKSTDate() {
    const now = new Date();
    const kstOffset = 9 * 60 * 60 * 1000;
    return new Date(now.getTime() + kstOffset).toISOString().split('T')[0];
}

/**
 * Serper API로 복수 쿼리 검색하여 신규 위스키 뉴스 수집
 */
async function searchWhiskyNews() {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) {
        console.warn('⚠️ SERPER_API_KEY 없음. 뉴스 검색을 건너뜁니다.');
        return [];
    }

    const today = getKSTDate();
    // 다양한 검색 쿼리로 폭넓게 검색
    const queries = [
        `new whisky release ${today}`,
        `whisky launch news ${today}`,
        `위스키 신제품 출시 ${today}`,
        `new scotch bourbon launch 2026`,
        `limited edition whisky release 2026`
    ];

    const allResults = [];
    const seenLinks = new Set();

    for (const q of queries) {
        try {
            const response = await fetch('https://google.serper.dev/search', {
                method: 'POST',
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ q, gl: 'kr', hl: 'ko', num: 5 })
            });

            const data = await response.json();
            if (data.organic && data.organic.length > 0) {
                for (const item of data.organic) {
                    if (item.link && !seenLinks.has(item.link)) {
                        seenLinks.add(item.link);
                        allResults.push({
                            title: item.title || '',
                            snippet: item.snippet || '',
                            link: item.link || ''
                        });
                    }
                }
            }
        } catch (err) {
            console.warn(`⚠️ 쿼리 "${q}" 검색 실패:`, err.message);
        }
    }

    return allResults;
}

/**
 * 검색 결과가 실제 신규 위스키 소식인지 판별
 * 키워드 기반으로 필터링
 */
function filterWhiskyNews(results) {
    const whiskyKeywords = [
        'whisky', 'whiskey', 'scotch', 'bourbon', 'distillery', 'distilleries',
        'malt', 'release', 'edition', 'launch', 'cask',
        '위스키', '출시', '신제품', '리미티드', '에디션', '증류'
    ];

    return results.filter(item => {
        const text = (item.title + ' ' + item.snippet).toLowerCase();
        return whiskyKeywords.some(kw => text.includes(kw.toLowerCase()));
    });
}

/**
 * Gemini API로 뉴스 기사 본문 생성
 */
async function generateNewsContent(newsItems, today) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY 없음');

    const newsText = newsItems.slice(0, 6).map((item, i) =>
        `[소식 ${i + 1}]\n제목: ${item.title}\n내용 요약: ${item.snippet}\n출처: ${item.link}`
    ).join('\n\n');

    const prompt = `당신은 위스키 매거진 'VODA'의 시니어 뉴스 에디터입니다.
아래의 오늘(${today}) 실시간 위스키 뉴스를 바탕으로 한국어 기사를 작성해주세요.

[오늘의 위스키 뉴스 원문]
${newsText}

작성 규칙:
1. 1,500자 이상, 마크다운 형식
2. ## 오늘의 위스키 소식 요약, ## 주요 소식 상세, ## 업계 영향 & VODA의 시각, ## 마치며 섹션 포함
3. 각 소식마다 반드시 원문 링크를 [출처명](URL) 형식으로 표기
4. '마치며' 끝에 전체 참고 자료 목록 정리
5. 건배 멘트로 마무리
6. 친근하고 전문적인 VODA 매거진 어조`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        }
    );

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.candidates[0].content.parts[0].text;
}

/**
 * 이미지 URL 선택 (카테고리 기반)
 */
function getNewsImageUrl() {
    const newsImages = [
        'https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1569100133957-3f9dbe45cd72?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1582260661131-4191c94d03e2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1596300300958-f9468087799e?auto=format&fit=crop&q=80&w=800',
    ];
    return newsImages[Math.floor(Math.random() * newsImages.length)];
}

async function main() {
    const isDryRun = process.argv.includes('--dry-run');
    try {
        console.log(`🔍 신규 위스키 소식 검색 시작... ${isDryRun ? '[DRY-RUN 모드]' : ''}\n`);

        const today = getKSTDate();

        // 1. 뉴스 검색
        const allResults = await searchWhiskyNews();
        console.log(`📡 총 ${allResults.length}개 검색 결과 수집`);

        // 2. 위스키 관련 뉴스 필터링
        const whiskyNews = filterWhiskyNews(allResults);
        console.log(`🥃 위스키 관련 뉴스: ${whiskyNews.length}개`);

        // 3. 뉴스가 없으면 기사 생성 안 함
        if (whiskyNews.length === 0) {
            console.log('\n✅ 오늘은 신규 위스키 소식이 없습니다. 기사를 만들지 않습니다.');
            return;
        }

        // 4. data.ts 로드 후 오늘 이미 신규 위스키 소식 기사가 있으면 스킵
        const dataMod = await import('../src/lib/data.ts');
        const existingArticles = dataMod.articles || [];
        const alreadyExists = existingArticles.some(
            a => a.publishedAt === today && a.category === '신규 위스키 소식'
        );
        if (alreadyExists) {
            console.log(`⏭️  ${today} 날짜의 신규 위스키 소식 기사가 이미 있습니다. 건너뜁니다.`);
            return;
        }

        // 5. AI로 기사 본문 생성
        console.log('\n🤖 AI가 뉴스 기사를 작성 중...');
        const content = await generateNewsContent(whiskyNews, today);
        console.log(`✅ 기사 본문 생성 완료 (${content.length}자)`);

        if (isDryRun) {
            console.log('\n--- DRY-RUN: 생성된 기사 미리보기 ---');
            console.log(content.slice(0, 500) + '...');
            return;
        }

        // 6. 기사 제목 생성 (뉴스 첫 번째 항목 기반)
        const mainTitle = `${today} 위스키 소식: ${whiskyNews[0].title.slice(0, 30)}...`;
        const timestamp = Date.now();

        const newArticle = {
            id: `news-${timestamp}`,
            slug: `whisky-news-${today}`,
            title: mainTitle,
            subtitle: `오늘(${today}) 전 세계 위스키 업계 최신 소식`,
            category: '신규 위스키 소식',
            author: 'VODA',
            publishedAt: today,
            imageUrl: getNewsImageUrl(),
            content: `> **실시간 뉴스 요약**: 아래 내용은 공개된 웹 검색 결과를 바탕으로 AI가 재구성했습니다.\n\n${content}`,
            tags: ['신규 위스키 소식', '뉴스', '출시', today],
            useTitleCover: false
        };

        // 7. data.ts 업데이트
        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        dataContent = dataContent.replace(/,\s*,/g, ',');

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
        useTitleCover: ${newArticle.useTitleCover}
    }`;

        let existingArticlesStr = articlesMatch[1].trim();
        if (existingArticlesStr.endsWith(',')) {
            existingArticlesStr = existingArticlesStr.slice(0, -1).trim();
        }

        const updatedArticles = `export const articles: Article[] = [${existingArticlesStr},\n${newArticleString}\n];`;
        dataContent = dataContent.replace(/export const articles: Article\[\] = \[[\s\S]*?\];/, updatedArticles);
        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');

        console.log('\n💾 data.ts 업데이트 완료!');
        console.log(`📰 기사 제목: ${newArticle.title}`);
        console.log(`📅 발행일: ${newArticle.publishedAt}`);
        console.log('\n🎉 신규 위스키 소식 기사가 성공적으로 추가되었습니다!');

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
