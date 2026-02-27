const fs = require('fs');
const path = require('path');

// .env.local 파일 로드 함수
function loadEnvLocal() {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split(/\r?\n/).forEach(line => {
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
    const kstDate = new Date(now.getTime() + kstOffset);
    return kstDate.toISOString().split('T')[0];
}

/**
 * Serper API를 사용한 실시간 위스키 소식 검색 (고도화 버전)
 */
async function searchWhiskyNews() {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) throw new Error('SERPER_API_KEY 없음');

    const today = getKSTDate();
    // 신제품 출시 및 한정판 소식에 집중된 정교한 쿼리
    const queries = [
        `new whisky release announcement ${today}`,
        `latest limited edition whisky launch ${today}`,
        `new expressions scotch bourbon release 2026`,
        `whisky distillery new bottling news 2026`,
        `upcoming whisky releases February 2026`,
        `recent scotch whisky launch news`,
        `limited release bourbon announcements 2026`
    ];

    const allResults = [];
    const seenLinks = new Set();

    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        try {
            const response = await fetch('https://google.serper.dev/search', {
                method: 'POST',
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ q, num: 10 })
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
 */
function filterWhiskyNews(results) {
    const skipKeywords = ['shop', 'buy', 'price comparison', 'amazon', 'ebay'];
    const whiskyKeywords = [
        'new release', 'limited edition', 'unveils', 'launches', 'bottling',
        'expression', 'distillery news', 'single cask', 'special release'
    ];

    return results.filter(item => {
        const text = (item.title + ' ' + item.snippet).toLowerCase();
        const hasWhisky = text.includes('whisky') || text.includes('whiskey');
        const hasLaunch = whiskyKeywords.some(kw => text.includes(kw));
        const isNotShop = !skipKeywords.some(kw => text.includes(kw));
        return hasWhisky && hasLaunch && isNotShop;
    });
}

/**
 * Gemini API로 뉴스 기사 본문 생성 (원문 충실 번역)
 */
async function generateNewsContent(newsItems, today) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY 없음');

    const newsText = newsItems.slice(0, 5).map((item, i) =>
        `[News Source ${i + 1}]\nTitle: ${item.title}\nSnippet: ${item.snippet}\nLink: ${item.link}`
    ).join('\n\n');

    const prompt = `당신은 글로벌 위스키 매거진 'VODA'의 시니어 뉴스 에디터이자 전문 번역가입니다.
아래의 영문 위스키 신제품 소식들을 **원문 내용에 매우 충실하게** 한국어로 번역하고 정교한 기사로 작성해주세요.

[오늘(${today})의 영문 위스키 뉴스 원문]
${newsText}

작성 및 번역 규칙:
1. **팩트 중심의 충실한 번역**: 제품명, 도수(ABV), 숙성 연수, 가격, 출시 지역 등 기술적 스펙을 절대 누락하거나 임의로 수정하지 마십시오.
2. 기사 구성: ## 오늘의 글로벌 위스키 뉴스 요약, ## 주요 신제품 상세 소식 (각 제품별 상세 번역), ## 업계 분석, ## 마치며 (참고 자료 포함)
3. 어조: 전문적이면서도 한국 독자들에게 친숙한 프리미엄 매거진 어조
4. 각 뉴스 섹션 끝에 반드시 [원문 보기](URL) 형식으로 출처 링크를 포함하십시오.
5. 분량: 1,500자 이상으로 풍성하게 작성하십시오. (원문의 정보를 최대한 상세히 한글로 풀어쓰세요)
6. 마지막은 품격 있는 건배 멘트로 마무리하십시오.`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
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
 * data.ts 파일 업데이트
 */
function updateDataFile(article) {
    const dataPath = path.join(process.cwd(), 'src/lib/data.ts');
    let content = fs.readFileSync(dataPath, 'utf-8');

    // articles 배열 시작 지점 찾기 (더 유연하게)
    const match = content.match(/export const articles: Article\[\] = \[/);
    if (!match) throw new Error('articles 배열을 찾을 수 없습니다.');

    // 새 기사를 배열 맨 앞에 추가 (Article 타입에 맞게 필드명 수정)
    const newArticleStr = `    {
        id: "news-${article.id}",
        slug: "news-${article.id}",
        title: "${article.title.replace(/"/g, '\\"')}",
        subtitle: "${article.subtitle.replace(/"/g, '\\"')}",
        category: "${article.category}",
        author: "${article.author}",
        publishedAt: "${article.publishedAt}",
        imageUrl: "${article.imageUrl}",
        content: \`${article.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
        tags: ${JSON.stringify(article.tags)},
        useTitleCover: true
    },\n`;

    content = content.replace(/export const articles: Article\[\] = \[/, `export const articles: Article[] = [\n${newArticleStr}`);

    fs.writeFileSync(dataPath, content, 'utf-8');
    console.log(`✅ data.ts 업데이트 완료: ${article.title}`);
}

async function main() {
    const isDryRun = process.argv.includes('--dry-run');
    console.log(`🔍 신규 위스키 소식 검색 시작...${isDryRun ? ' [DRY-RUN 모드]' : ''}`);

    try {
        const today = getKSTDate();

        // 1. 뉴스 검색
        const allResults = await searchWhiskyNews();
        console.log(`📡 총 ${allResults.length}개 검색 결과 수집`);

        // 2. 필터링
        const whiskyNews = filterWhiskyNews(allResults);
        console.log(`🥃 위스키 관련 뉴스: ${whiskyNews.length}개`);

        // 3. 뉴스가 없으면 종료
        if (whiskyNews.length === 0) {
            console.log('\n✅ 오늘은 신규 위스키 소식이 없습니다. 기사를 만들지 않습니다.');
            return;
        }

        // 4. 기사 생성
        const content = await generateNewsContent(whiskyNews, today);

        const newArticle = {
            id: Date.now(),
            title: `[글로벌 뉴스] ${today} 신규 위스키 출시 소식`,
            subtitle: `${whiskyNews.length}개의 주요 위스키 브랜드 신제품 및 한정판 발표 요약`,
            content: content,
            category: "위스키 소식",
            publishedAt: today,
            author: "VODA AI 에디터",
            imageUrl: "https://images.unsplash.com/photo-1527281405159-02071370b98f?q=80&w=2000&auto=format&fit=crop",
            tags: ["신제품", "출시", "한정판", "글로벌뉴스", "위스키소식"]
        };

        if (isDryRun) {
            console.log('\n--- DRY RUN 기사 내용 예시 ---');
            console.log(`제목: ${newArticle.title}`);
            console.log(`내용 미리보기: ${newArticle.content.substring(0, 300)}...`);
            console.log('--- DRY RUN 종료 ---');
        } else {
            updateDataFile(newArticle);
        }

    } catch (error) {
        console.error('❌ 실행 중 오류 발생:', error);
        process.exit(1);
    }
}

main();
