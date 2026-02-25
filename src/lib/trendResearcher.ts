// AI 기반 위스키 트렌드 검색 및 콘텐츠 생성 모듈 (Native Fetch 고도화 버전)
// SDK 라이브러리의 엔드포인트 이슈를 우회하기 위해 Fetch API를 직접 사용합니다.

import { Article } from "./data";

const CATEGORIES = [
    "트렌드", "추천", "역사", "칵테일", "페어링",
    "지역탐방", "입문", "컬렉팅", "리뷰", "뉴스", "신규 위스키 소식"
];

let lastCategoryIndex = 9; // Temporarily set to 9 to test "신규 위스키 소식" (index 10) next

export function getNextCategory(): string {
    lastCategoryIndex = (lastCategoryIndex + 1) % CATEGORIES.length;
    return CATEGORIES[lastCategoryIndex];
}

/**
 * Serper API를 사용한 실시간 위스키 소식 검색
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
    return `최근 위스키 업계 주요 트렌드 (${category}): 지속 가능한 생산, 비전통적 캐스크 피니싱, 크래프트 증류소 성장, AI 블렌딩 기술.`;
}

/**
* Native Fetch를 사용한 Gemini API 호출 헬퍼
*/
async function callGeminiAPI(prompt: string): Promise<string> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is missing');

    // 할당량 문제 완화를 위해 안정성을 우선하여 gemini-2.0-flash 모델 사용
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    return data.candidates[0].content.parts[0].text;
}

export async function generateTopicFromTrends(category: string): Promise<{
    title: string;
    subtitle: string;
    keywords: string[];
}> {
    try {
        const trendData = await searchWhiskyTrends(category);
        const prompt = `당신은 세계적인 위스키 전문 매거진 'VODA'의 편집장입니다. 
다음 트렌드 데이터를 바탕으로 독자들의 시선을 사로잡을 만한 매력적이고 전문적인 기사 주제를 제안해주세요.

카테고리: ${category}
최신 트렌드/데이터: ${trendData}

[필수 지침]
1. 제목(title)에 절대 '오늘의 뉴스', '2/26 소식', '2026-02-26' 처럼 날짜나 요일을 포함하지 마십시오.
2. 제목은 Master of Malt나 Whisky Advocate 같은 프리미엄 매거진 스타일로 작성하십시오. (예: "셰리 캐스크의 숨겨진 과학", "독립 병입자의 세계: 왜 그들은 특별한가?")
3. 부제(subtitle)는 본문의 내용을 기대하게 만드는 세련된 문장으로 작성하십시오.

한국어 JSON 형식으로 응답하십시오: 
{ 
  "title": "날짜가 없는 매력적인 제목", 
  "subtitle": "흥미로운 부제", 
  "keywords": ["핵심키워드1", "핵심키워드2", "핵심키워드3"] 
}`;

        const responseText = await callGeminiAPI(prompt);
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('Invalid JSON');

        return JSON.parse(jsonMatch[0]);
    } catch (error) {
        console.error('❌ AI 주제 생성 실패:', error);
        return generateFallbackTopic(category);
    }
}

export async function generateArticleContent(
    title: string,
    subtitle: string,
    category: string,
    keywords: string[],
    seedContent?: string
): Promise<string> {
    try {
        let prompt: string;

        if (category === "신규 위스키 소식") {
            prompt = `당신은 위스키 매거진 'VODA'의 시니어 라이터입니다.
기사 제목: ${title}
부제목: ${subtitle}
키워드: ${keywords.join(', ')}

아래 조건을 반드시 지켜 전문적인 한국어 위스키 뉴스 기사를 작성해주세요:
1. 1,500자 이상, 마크다운 형식으로 작성
2. ## 소식 요약, ## 상세 내용, ## 위스키 업계에 미치는 영향, ## 마치며 섹션 포함
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
2. 도입부, 전문 지식 섹션(최소 2개), 추천 또는 팁, 마치며 섹션 포함
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
