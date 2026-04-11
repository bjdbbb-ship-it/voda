// AI 기반 위스키 트렌드 검색 및 콘텐츠 생성 모듈 (Native Fetch 고도화 버전)
// SDK 라이브러리의 엔드포인트 이슈를 우회하기 위해 Fetch API를 직접 사용합니다.

import { Article } from "./data";

const CATEGORIES = [
    "트렌드", "추천", "역사", "칵테일", "페어링",
    "지역탐방", "입문", "컬렉팅", "리뷰", "뉴스", "신규 위스키 소식"
];

const PREMIUM_SOURCES = [
    "whiskymag.com",
    "whiskeybon.com",
    "thewhiskeywash.com"
];

let lastCategoryIndex = 9; // Temporarily set to 9 to test "신규 위스키 소식" (index 10) next

export function getNextCategory(): string {
    lastCategoryIndex = (lastCategoryIndex + 1) % CATEGORIES.length;
    return CATEGORIES[lastCategoryIndex];
}

/**
 * Serper API를 사용한 특정 사이트 기반 위스키 기사 검색
 */
async function searchPremiumWhiskyArticle(): Promise<{ content: string; sourceUrl: string }> {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) throw new Error('SERPER_API_KEY is missing');

    const randomSource = PREMIUM_SOURCES[Math.floor(Math.random() * PREMIUM_SOURCES.length)];
    const query = `site:${randomSource} whisky`;

    try {
        const response = await fetch('https://google.serper.dev/search', {
            method: 'POST',
            headers: {
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ q: query, num: 10 })
        });

        const data = await response.json();
        if (!data.organic || data.organic.length === 0) {
            throw new Error(`No results found for ${randomSource}`);
        }

        // 무작위로 검색 결과 중 하나 선택
        const randomIndex = Math.floor(Math.random() * Math.min(data.organic.length, 5));
        const item = data.organic[randomIndex];

        return {
            content: `원문 제목: ${item.title}\n요약: ${item.snippet}`,
            sourceUrl: item.link
        };
    } catch (error) {
        console.error('❌ 프리미엄 기사 검색 실패:', error);
        throw error;
    }
}

/**
 * Serper API를 사용한 실시간 위스키 소식 검색 (기존 로직 유지)
 */
async function searchRealTimeWhiskyNews(): Promise<string> {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) {
        console.warn('⚠️ SERPER_API_KEY is missing. Using static news fallback.');
        return `제목: 맥켈란, 새로운 '호라이즌' 디자인 공개\n설명: 벤트리와의 협업으로 탄생한 가로형 디캔터 위스키.\n\n제목: 야마자키 2024 리미티드 에디션 출시\n설명: 일본 현지 면세점 한정판 츠쿠바네 시리즈 공개.\n\n제목: 아드벡 '앤솔로지' 두 번째 에디션 출시\n설명: 13년 숙성 마데이라 캐스크 피니시 위스키.`;
    }

    try {
        const now = new Date();
        const kstOffset = 9 * 60 * 60 * 1000;
        const kstDate = new Date(now.getTime() + kstOffset);
        const today = kstDate.toISOString().split('T')[0];
        const query = `new whisky release news ${today}`;

        const response = await fetch('https://google.serper.dev/search', {
            method: 'POST',
            headers: {
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ q: query, gl: 'kr', hl: 'ko' })
        });

        const data = await response.json();
        if (!data.organic || data.organic.length === 0) {
            console.log('ℹ️ No organic results found. Using static news fallback.');
            return `제목: 맥켈란, 새로운 '호라이즌' 디자인 공개\n설명: 벤트리와의 협업으로 탄생한 가로형 디캔터 위스키.\n\n제목: 야마자키 2024 리미티드 에디션 출시\n설명: 일본 현지 면세점 한정판 츠쿠바네 시리즈 공개.\n\n제목: 아드벡 '앤솔로지' 두 번째 에디션 출시\n설명: 13년 숙성 마데이라 캐스크 피니시 위스키.`;
        }

        // 뉴스 제목과 내용을 하나의 문자열로 결합 (링크 포함)
        return data.organic.slice(0, 5).map((item: any, index: number) =>
            `[뉴스 ${index + 1}]\n제목: ${item.title}\n내용 요약: ${item.snippet}\n출처 링크: ${item.link}`
        ).join('\n\n');
    } catch (error) {
        console.error('❌ 실시간 검색 실패:', error);
        return "";
    }
}

export async function searchWhiskyTrends(category: string): Promise<string> {
    if (category === "신규 위스키 소식") {
        return await searchRealTimeWhiskyNews();
    }

    const searchQueries = {
        "트렌드": "latest whisky trends 2026 innovations",
        "추천": "best whisky recommendations new releases",
        "역사": "whisky history heritage distilleries",
        "칵테일": "whisky cocktails mixology trends",
        "페어링": "whisky food pairing gastronomy",
        "지역탐방": "whisky regions distilleries terroir",
        "입문": "beginner whisky guide introduction",
        "컬렉팅": "whisky collecting investment rare",
        "리뷰": "whisky tasting notes reviews",
        "뉴스": "whisky industry news latest announcements"
    };
    const query = searchQueries[category as keyof typeof searchQueries] || "whisky news";

    const apiKey = process.env.SERPER_API_KEY;
    if (apiKey) {
        try {
            const response = await fetch('https://google.serper.dev/search', {
                method: 'POST',
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ q: query, num: 5 })
            });
            const data = await response.json();
            if (data.organic && data.organic.length > 0) {
                return data.organic.map((item: any) => `${item.title}: ${item.snippet}`).join('\n');
            }
        } catch (error) {
            console.warn('⚠️ 검색 실패, 기본값 사용:', error);
        }
    }

    return `최근 위스키 업계 주요 트렌드 (${category}): 지속 가능한 생산, 비전통적 캐스크 피니싱, 크래프트 증류소 성장, AI 블렌딩 기술.`;
}

/**
* Native Fetch를 사용한 Gemini API 호출 헬퍼
*/
async function callGeminiAPI(prompt: string): Promise<string> {
    const primaryKey = process.env.GEMINI_API_KEY;
    const fallbackKey = process.env.GEMINI_API_KEY_FALLBACK;
    
    if (!primaryKey) throw new Error('GEMINI_API_KEY is missing');

    const model = "gemini-flash-latest";
    const MAX_RETRIES = 3;
    const INITIAL_DELAY = 5000;

    // 시도할 키 목록 (기본 키 우선, 백업 키가 있으면 추가)
    const apiKeys = fallbackKey ? [primaryKey, fallbackKey] : [primaryKey];

    for (const apiKey of apiKeys) {
        console.log(`🔑 Using API Key: ${apiKey.substring(0, 10)}... (isFallback: ${apiKey === fallbackKey})`);
        
        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: {
                            temperature: 0.7,
                            topP: 0.95,
                            topK: 40,
                            maxOutputTokens: 8192,
                        }
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    const errorMessage = errorData.error?.message || response.statusText;

                    // 429 (Quota) 혹은 기타 일시적 오류의 경우 개별 키에 대해 재시도
                    if (response.status === 429 || errorMessage.includes('quota') || errorMessage.includes('high demand')) {
                        const delayMs = INITIAL_DELAY * Math.pow(2, attempt - 1);
                        console.warn(`⚠️ Gemini API 429/Quota (Key: ${apiKey.substring(0, 6)}, Attempt ${attempt}/${MAX_RETRIES}). Retrying in ${delayMs}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delayMs));
                        continue;
                    }
                    
                    // 다른 에러(예: 400, 403 등)는 해당 키 실패로 보고 다음 키로 넘어감
                    console.error(`❌ Key Failure (${apiKey.substring(0, 6)}): ${response.status} ${errorMessage}`);
                    break; 
                }

                const data = await response.json();
                if (data.error) throw new Error(data.error.message);
                if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                    throw new Error('No content generated from Gemini API');
                }

                return data.candidates[0].content.parts[0].text;
            } catch (error: any) {
                console.warn(`⚠️ Connection Error (Key: ${apiKey.substring(0, 6)}, Attempt ${attempt}/${MAX_RETRIES}): ${error.message}`);
                if (attempt === MAX_RETRIES) break; // 이번 키 시도 종료
                
                const delayMs = INITIAL_DELAY * Math.pow(2, attempt - 1);
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }
        }
        
        if (apiKeys.length > 1 && apiKey === primaryKey) {
            console.log('🔄 Primary API Key failed. Switching to fallback key...');
        }
    }
    
    throw new Error('Failed to call Gemini API after trying all available keys');
}

export async function generateTopicFromTrends(category: string): Promise<{
    title: string;
    subtitle: string;
    keywords: string[];
    sourceUrl?: string;
    originalContent?: string;
}> {
    try {
        let trendData = "";
        let sourceUrl = "";

        // 특정 전문 사이트 재구성 모드 (사용자 요청 반영)
        const premiumArticle = await searchPremiumWhiskyArticle();
        trendData = premiumArticle.content;
        sourceUrl = premiumArticle.sourceUrl;

        const prompt = `당신은 세계적인 위스키 전문 매거진 'VODA'의 편집장입니다. 
다음은 해외 위스키 전문 사이트의 최신 기사 정보입니다. 이를 바탕으로 한국 독자들에게 매력적으로 다가갈 수 있는 기사 주제를 생성해주세요.

원문 소스 정보: ${trendData}
원문 링크: ${sourceUrl}

[필수 지침]
1. 단순 번역이 아닌, 'VODA'만의 관점으로 재해석한 제목(title)을 만드십시오.
2. 제목에 절대 날짜나 요일을 포함하지 마십시오.
3. 부제(subtitle)는 원문의 핵심을 찌르면서도 세련된 한국어 문장으로 작성하십시오.
4. 카테고리는 가급적 '${category}'의 성격을 유지하되, 원문 내용이 더 적합한 카테고리가 있다면 그에 맞춰 주제를 잡으십시오.

한국어 JSON 형식으로 응답하십시오: 
{ 
  "title": "매력적인 재구성 제목", 
  "subtitle": "흥미로운 부제", 
  "keywords": ["핵심키워드1", "핵심키워드2", "핵심키워드3"] 
}`;

        const responseText = await callGeminiAPI(prompt);
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('Invalid JSON');

        const result = JSON.parse(jsonMatch[0]);
        return { ...result, sourceUrl, originalContent: trendData };
    } catch (error) {
        console.error('❌ AI 주제 생성 실패:', error);
        return { ...generateFallbackTopic(category), sourceUrl: "", originalContent: "" };
    }
}

export async function generateArticleContent(
    title: string,
    subtitle: string,
    category: string,
    keywords: string[],
    seedContent?: string,
    sourceUrl?: string,
    originalContent?: string
): Promise<string> {
    try {
        let prompt: string;

        if (sourceUrl && originalContent) {
            prompt = `당신은 위스키 매거진 'VODA'의 수석 에디터입니다. 
아래의 해외 전문 기사 원문/내용을 바탕으로, 원문의 **모든 세부 사항, 감정선, 정보의 깊이와 분량**을 100% 동일하게 유지하여 한글 위스키 기사를 작성해주세요. 절대 요약하거나 누락해서는 안 됩니다.

[원문 정보]
출처: ${sourceUrl}
내용: ${originalContent}

[기사 가이드라인]
제목: ${title}
부제목: ${subtitle}
키워드: ${keywords.join(', ')}

[작성 조건]
1. **원문의 모든 내용 보존**: 원문에 서술된 철학, 비하인드 스토리, 테이스팅 노트, 대화 등 원문에 포함된 모든 텍스트를 하나도 빠짐없이 번역/재구성하십시오. 짧게 요약하는 것은 절대 금지입니다. 원문이 긴 만큼 기사도 그만큼 혹은 그 이상 길게 작성되어야 합니다.
2. 기사 분량은 원문 길이에 비례해 매우 길게(최소 2,500글자 이상), 마크다운 형식으로 작성하십시오.
3. 도입부 - 원문의 모든 디테일이 살아있는 깊이 있는 상세 본문(최소 3개 이상의 섹션) - 전문가의 조언 - 마치며 섹션으로 구성하십시오. **만약 제목에 'N가지', 'N개', 'N선' 등 구체적인 숫자가 포함되어 있다면, 본문의 주요 항목(섹션) 개수도 반드시 그 숫자와 일치시켜야 합니다.**
4. 위스키 용어는 전문가답게 사용하며, 독자들에게 품격 있게 전달하십시오.
5. '마치며' 섹션 끝부분에는 반드시 다음과 같이 출처를 명시하십시오:
   ---
   **📎 원문 출처**: [기사 원문 보기](${sourceUrl})
6. 마지막은 품격 있는 건배 멘트로 마무리하십시오.`;
        } else if (category === "신규 위스키 소식") {
            prompt = `당신은 위스키 매거진 'VODA'의 시니어 라이터입니다.
기사 제목: ${title}
부제목: ${subtitle}
키워드: ${keywords.join(', ')}

아래 조건을 반드시 지켜 전문적인 한국어 위스키 뉴스 기사를 작성해주세요:
1. **분량과 깊이 극대화**: 내용의 요약이나 축약은 절대 금지됩니다. 소스코드가 가진 모든 정보를 활용하여 원문과 동일하거나 그 이상의 깊이와 세부 정보를 가진 방대한 분량의 텍스트를 작성하십시오. (최소 2,000자 이상, 마크다운 형식). **제목에 숫자가 있다면(예: 5가지 소식), 뉴스 항목의 개수를 정확히 그 숫자만큼 구성하십시오.**
2. ## 소식 원문 상세 내용 (가장 비중이 큼, 빠짐없이 상세 서술), ## 위스키 업계에 미치는 영향, ## 마치며 섹션 포함
3. '마치며' 섹션 맨 끝에는 반드시 아래 형식으로 출처 링크를 표기하세요:
   ---
   **📎 참고 자료**: [출처명](URL) 형식
4. 건배 멘트로 마무리
5. 독자에게 친근하고 전문적인 어조로 작성`;
        } else {
            const seedSection = seedContent
                ? `\n\n참고할 콘텐츠 스타일 및 방향 (이를 바탕으로 더 풍성하게 확장하세요):\n${seedContent}`
                : '';
            prompt = `당신은 위스키 매거진 'VODA'의 시니어 에디터입니다.
기사 제목: ${title}
부제목: ${subtitle}
카테고리: ${category}
키워드: ${keywords.join(', ')}
${seedSection}

아래 조건을 반드시 지켜 전문적인 한국어 위스키 매거진 기사를 작성해주세요:
1. 2,000자 이상, 마크다운 형식으로 작성
2. 도입부, 전문 지식 섹션(최소 2개), 추천 또는 팁, 마치며 섹션 포함. **단, 제목에 'N가지 이야기'와 같이 숫자가 명시된 경우 본문의 핵심 섹션 개수를 반드시 그 숫자와 일치시키십시오.**
3. 독자가 실제로 배울 수 있는 깊이 있는 내용 포함
4. '마치며'에서 건배 멘트로 마무리
5. 친근하면서도 전문적인 매거진 어조로 작성`;
        }

        const content = await callGeminiAPI(prompt);
        console.log('✅ AI 기반 본문 생성 완료:', content.length, '자');
        return content;
    } catch (error) {
        console.error('❌ AI 본문 생성 실패:', error);
        return generateFallbackContent(title, subtitle, category);
    }
}

function generateFallbackTopic(category: string) {
    const fallback = {
        "트렌드": { title: "위스키 업계를 변화시키는 혁신적 기술들", subtitle: "지속가능성에서 AI 블렌딩까지", keywords: ["미래", "혁신", "기술"] },
        "추천": { title: "지금 당장 경험해야 할 싱글 몰트 큐레이션", subtitle: "전문가들이 선별한 이달의 위스키", keywords: ["추천", "싱글몰트", "큐레이션"] },
        "역사": { title: "증류소의 영혼: 위스키의 기원을 찾아서", subtitle: "수세기를 이어온 전통의 기록", keywords: ["역사", "전통", "증류소"] },
        "리뷰": { title: "명작과 범작 사이: 심층 테이스팅 리포트", subtitle: "VODA가 전하는 가감 없는 솔직 리뷰", keywords: ["리뷰", "테이스팅", "분석"] }
    };
    return (fallback as any)[category] || fallback["트렌드"];
}

function generateFallbackContent(title: string, subtitle: string, category: string): string {
    return `## ${subtitle}\n\n위스키의 세계는 끊임없이 진화하고 있습니다. ${title}는 최근 가장 주목받는 변화 중 하나입니다.`;
}
