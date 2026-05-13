#!/usr/bin/env node

/**
 * 2026-04-21 ~ 2026-05-12 기간의 누락된 데이터를 일괄 생성하는 스크립트
 * 실행: npx tsx scripts/catch-up-to-today.js
 */

const fs = require('fs');
const path = require('path');

// .env.local 로드
function loadEnvLocal() {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split(/\r?\n/).forEach(line => {
            const eqIdx = line.indexOf('=');
            if (eqIdx > 0) {
                const key = line.substring(0, eqIdx).trim();
                const value = line.substring(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
                if (key && !key.startsWith('#')) process.env[key] = value;
            }
        });
        console.log('✅ .env.local 로드 완료');
    }
}

// Serper API로 위스키 뉴스 검색
async function searchWhiskyNews(date) {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) {
        console.warn('⚠️ SERPER_API_KEY 없음. 뉴스 검색 건너뜀.');
        return [];
    }

    const queries = [
        `new whisky release announcement ${date}`,
        `new expressions scotch bourbon release 2026`,
        `whisky distillery new bottling news 2026`,
    ];

    const allResults = [];
    const seenLinks = new Set();

    for (const q of queries) {
        try {
            const response = await fetch('https://google.serper.dev/search', {
                method: 'POST',
                headers: { 'X-API-KEY': apiKey, 'Content-Type': 'application/json' },
                body: JSON.stringify({ q, num: 5 })
            });
            const data = await response.json();
            if (data.organic) {
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
            console.warn(`⚠️ 검색 실패: ${err.message}`);
        }
    }

    // 위스키 관련 필터
    const whiskyKeywords = ['new release', 'limited edition', 'unveils', 'launches', 'bottling', 'expression', 'distillery'];
    return allResults.filter(item => {
        const text = (item.title + ' ' + item.snippet).toLowerCase();
        const hasWhisky = text.includes('whisky') || text.includes('whiskey');
        const hasLaunch = whiskyKeywords.some(kw => text.includes(kw));
        return hasWhisky && hasLaunch;
    });
}

// Gemini API 호출 (재시도 포함)
async function callGemini(prompt, maxTokens = 8192) {
    const apiKeys = [process.env.GEMINI_API_KEY, process.env.GEMINI_API_KEY_FALLBACK].filter(Boolean);
    
    for (const apiKey of apiKeys) {
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                const model = 'gemini-2.5-flash';
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: { temperature: 0.8, maxOutputTokens: maxTokens }
                    })
                });
                const data = await response.json();
                if (data.error) {
                    if (data.error.code === 429 || (data.error.message && data.error.message.includes('quota'))) {
                        const delay = 2000 * Math.pow(2, attempt);
                        console.warn(`⚠️ API 과부하. ${delay}ms 후 재시도...`);
                        await new Promise(r => setTimeout(r, delay));
                        continue;
                    }
                    throw new Error(data.error.message);
                }
                return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            } catch (err) {
                if (attempt === 2) {
                    console.warn(`⚠️ API 키 실패, 다음 키 시도: ${err.message}`);
                    break;
                }
                const delay = 2000 * Math.pow(2, attempt);
                await new Promise(r => setTimeout(r, delay));
            }
        }
    }
    throw new Error('모든 Gemini API 키 소진');
}

// 일일 기사 생성
async function generateDailyArticle(date) {
    const prompt = `당신은 위스키 전문 매거진 'VODA'의 시니어 에디터입니다.
${date} 날짜로 발행될 흥미로운 위스키 심층 기사를 작성하세요.

다음 카테고리 중 하나를 선택하여 전문적이고 풍성한 기사를 작성합니다:
- 테이스팅 리뷰 (특정 위스키 심층 분석)
- 증류소 이야기 (세계 유명 증류소 비화)
- 위스키 상식 (용어, 제조법, 역사)
- 페어링 가이드 (음식과의 궁합)
- 지역별 스타일 가이드 (스카치, 버번, 아이리시 등)
- 초보자 가이드
- 위스키 트렌드 & 시장 분석
- 한정판 & 컬렉터 가이드
- 칵테일 & 하이볼 레시피

요구사항:
1. 제목은 독자의 관심을 끄는 매력적인 한국어 제목
2. 본문 3000자 이상, 마크다운 형식
3. ## 소제목으로 구분된 체계적 구성
4. 전문적이면서도 읽기 쉬운 한국어
5. 위스키 브랜드명, 도수, 숙성 등 구체적 정보 포함
6. 마무리는 위스키 건배사로

반드시 아래 JSON 형식으로만 응답하세요:
{
  "title": "기사 제목",
  "subtitle": "부제목 (30자 내외)",
  "category": "카테고리 (추천/리뷰/지식/문화/트렌드/가이드 중 하나)",
  "content": "마크다운 형식의 본문 전체",
  "tags": ["태그1", "태그2", "태그3"]
}`;

    const text = await callGemini(prompt, 6000);
    
    // JSON 파싱
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('JSON 파싱 실패');
    
    const parsed = JSON.parse(jsonMatch[0]);
    const timestamp = new Date(date).getTime();
    const rand = Math.floor(Math.random() * 1000);
    
    // 이미지 풀
    const images = [
        'https://images.unsplash.com/photo-1527281405159-02071370b98f?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1574626003470-87f5b2d7085a?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1582819509237-d5b75f8eafa7?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1621873495884-845a939892f4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1566633806827-c44db7ede5f6?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1595872018818-97555653a011?auto=format&fit=crop&q=80&w=1200',
    ];
    const imageUrl = images[Math.floor(Math.random() * images.length)];

    return {
        id: `magazine-${timestamp}-${rand}`,
        slug: `article-${timestamp}-${rand}`,
        title: parsed.title,
        subtitle: parsed.subtitle,
        category: parsed.category || '추천',
        author: 'VODA',
        publishedAt: date,
        imageUrl,
        content: parsed.content,
        tags: parsed.tags || [],
        useTitleCover: false,
    };
}

// 뉴스 기사 생성
async function generateNewsArticle(date, newsItems) {
    const newsText = newsItems.slice(0, 5).map((item, i) =>
        `[뉴스 ${i + 1}]\n제목: ${item.title}\n요약: ${item.snippet}\n링크: ${item.link}`
    ).join('\n\n');

    const prompt = `당신은 글로벌 위스키 매거진 'VODA'의 시니어 뉴스 에디터입니다.
아래 영문 위스키 신제품 소식을 한국어로 상세하게 기사화해주세요.

[${date} 위스키 뉴스]
${newsText}

작성 규칙:
1. 제품명, 도수, 숙성 연수, 가격, 출시 지역 등 기술적 스펙 모두 포함
2. 전문적이면서도 친근한 매거진 어조
3. 구성: ## 오늘의 뉴스 핵심, ## 주요 신제품 상세 소식, ## 업계 분석, ## 마치며
4. 각 뉴스 끝에 [원문 보기](링크) 형식으로 출처 포함
5. 마무리는 위스키 건배사로
6. 최소 2000자 이상

반드시 기사 본문 텍스트만 응답하세요 (JSON 아님):`;

    return await callGemini(prompt, 5000);
}

async function main() {
    loadEnvLocal();

    if (!process.env.GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY가 없습니다. .env.local을 확인하세요.');
        process.exit(1);
    }

    console.log('🚀 위스키 매거진 콘텐츠 복구 시작 (2026-04-21 ~ 2026-05-12)\n');

    // 날짜 범위 생성
    const dates = [];
    const start = new Date('2026-04-21');
    const end = new Date('2026-05-12');
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(d.toISOString().split('T')[0]);
    }
    console.log(`📅 대상 기간: ${dates[0]} ~ ${dates[dates.length - 1]} (${dates.length}일)\n`);

    const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
    let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

    // 기존 날짜 파악
    const existingDates = new Set();
    const dateMatches = [...dataContent.matchAll(/publishedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/g)];
    for (const m of dateMatches) existingDates.add(m[1]);
    console.log(`📊 기존 기사 날짜 수: ${existingDates.size}개\n`);

    const allNewArticleStrings = [];

    for (const date of dates) {
        console.log(`\n📅 [${ date }] 처리 중...`);

        // 이미 해당 날짜에 일반 기사가 있으면 스킵
        const hasArticle = existingDates.has(date);
        
        if (hasArticle) {
            console.log(`   ✅ ${date} 기사 이미 존재 - 건너뜀`);
            continue;
        }

        // 1. 일일 매거진 기사 생성
        console.log(`   📝 일일 기사 생성 중...`);
        try {
            const article = await generateDailyArticle(date);
            
            const safeContent = article.content
                .replace(/\\/g, '\\\\')
                .replace(/`/g, '\\`')
                .replace(/\$\{/g, '\\${');

            const articleStr = `    {
        id: "${article.id}",
        slug: "${article.slug}",
        title: "${article.title.replace(/"/g, '\\"')}",
        subtitle: "${article.subtitle.replace(/"/g, '\\"')}",
        category: "${article.category}",
        author: "${article.author}",
        publishedAt: "${article.publishedAt}",
        imageUrl: "${article.imageUrl}",
        content: \`${safeContent}\`,
        tags: ${JSON.stringify(article.tags)},
        useTitleCover: ${article.useTitleCover},
    }`;
            allNewArticleStrings.push(articleStr);
            console.log(`   ✅ 기사: "${article.title}"`);
        } catch (err) {
            console.error(`   ❌ 기사 생성 실패: ${err.message}`);
        }

        // 2. 뉴스 기사 생성 (3일에 한 번 또는 뉴스가 있을 때)
        const dayNum = dates.indexOf(date);
        if (dayNum % 3 === 0) {
            console.log(`   📰 뉴스 기사 생성 중...`);
            try {
                const newsItems = await searchWhiskyNews(date);
                
                let newsContent;
                if (newsItems.length > 0) {
                    newsContent = await generateNewsArticle(date, newsItems);
                    console.log(`   ✅ 뉴스 ${newsItems.length}건 기반 기사 생성`);
                } else {
                    // 뉴스가 없어도 일반 위스키 소식 기사 생성
                    newsContent = await callGemini(`당신은 위스키 매거진 에디터입니다. ${date} 날짜로 글로벌 위스키 업계의 최신 동향, 신제품 소식, 시장 트렌드를 다루는 풍성한 뉴스 기사를 한국어로 작성하세요. 최소 2000자, 마크다운 형식으로 작성하되 기사 본문만 응답하세요.`, 4000);
                    console.log(`   ✅ 트렌드 뉴스 기사 생성`);
                }

                const newsId = `news-${date}-${Math.floor(Math.random() * 1000)}`;
                const safeNewsContent = newsContent
                    .replace(/\\/g, '\\\\')
                    .replace(/`/g, '\\`')
                    .replace(/\$\{/g, '\\${');

                const newsArticleStr = `    {
        id: "${newsId}",
        slug: "${newsId}",
        title: "[글로벌 뉴스] ${date} 신규 위스키 출시 소식",
        subtitle: "최신 위스키 업계 소식 및 신제품 발표 요약",
        category: "위스키 소식",
        author: "VODA AI 에디터",
        publishedAt: "${date}",
        imageUrl: "https://images.unsplash.com/photo-1527281405159-02071370b98f?q=80&w=2000&auto=format&fit=crop",
        content: \`${safeNewsContent}\`,
        tags: ["신제품","출시","한정판","글로벌뉴스","위스키소식"],
        useTitleCover: true
    }`;
                allNewArticleStrings.push(newsArticleStr);
            } catch (err) {
                console.error(`   ❌ 뉴스 기사 생성 실패: ${err.message}`);
            }
        }

        // API 과부하 방지를 위한 딜레이
        await new Promise(r => setTimeout(r, 1500));
    }

    // data.ts에 일괄 삽입
    if (allNewArticleStrings.length > 0) {
        console.log(`\n💾 data.ts에 ${allNewArticleStrings.length}개 기사 삽입 중...`);
        
        const insertion = allNewArticleStrings.join(',\n') + ',\n';
        dataContent = dataContent.replace(
            /export const articles: Article\[\] = \[/,
            `export const articles: Article[] = [\n${insertion}`
        );

        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');
        console.log(`✅ data.ts 업데이트 완료! (${allNewArticleStrings.length}개 추가)`);
    } else {
        console.log('\n⚠️ 추가할 기사가 없습니다.');
    }

    console.log('\n🎉 콘텐츠 복구 완료!\n');
    console.log('📌 다음 단계:');
    console.log('   1. node scripts/generateDailyWhiskies.js  (위스키 데이터 추가)');
    console.log('   2. npm run build  (빌드 확인)');
    console.log('   3. git add . && git commit -m "콘텐츠 업데이트" && git push  (배포)\n');
}

main().catch(err => {
    console.error('❌ 치명적 오류:', err);
    process.exit(1);
});
