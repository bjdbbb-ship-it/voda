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

        // 뉴스 제목과 내용을 하나의 문자열로 결합
        return data.organic.slice(0, 5).map((item: any) =>
            `제목: ${item.title}\n설명: ${item.snippet}\n링크: ${item.link}`
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
        const prompt = `당신은 위스키 매거진 'VODA'의 수석 에디터입니다. 카테고리: ${category}, 트렌드: ${trendData}. 한국어 JSON 형식으로 기사 주제를 하나 제안해주세요: { "title": "제목", "subtitle": "부제", "keywords": ["키워드1", "키워드2"] }`;

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
    keywords: string[]
): Promise<string> {
    try {
        const prompt = `당신은 위스키 매거진 'VODA'의 시니어 라이터입니다. 기사 제목: ${title}, 부제목: ${subtitle}, 키워드: ${keywords.join(', ')}. 전문적이고 풍성한 한국어 위스키 기사 본문을 작성해주세요. 1,500자 이상, 마크다운 형식으로 작성하고 '마치며' 부분에 건배 인사를 포함하세요.`;

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
        "트렌드": { title: "2026년 위스키 업계를 이끄는 5가지 혁신", subtitle: "지속가능성에서 AI 블렌딩까지", keywords: ["미래", "혁신"] }
        // ... (필요 시 복사)
    };
    return (fallback as any)[category] || fallback["트렌드"];
}

function generateFallbackContent(title: string, subtitle: string, category: string): string {
    return `## ${subtitle}\n\n위스키의 세계는 끊임없이 진화하고 있습니다. ${title}는 최근 가장 주목받는 변화 중 하나입니다.`;
}
