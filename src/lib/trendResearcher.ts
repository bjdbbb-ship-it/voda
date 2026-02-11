// AI 기반 위스키 트렌드 검색 및 콘텐츠 생성 모듈
// Gemini API를 활용하여 실시간 트렌드를 반영한 독창적인 기사를 생성

import { GoogleGenerativeAI } from "@google/generative-ai";
import { Article } from "./data";

// 카테고리 목록 (순환 선택용)
const CATEGORIES = [
    "트렌드",
    "추천",
    "역사",
    "칵테일",
    "페어링",
    "지역탐방",
    "입문",
    "컬렉팅",
    "리뷰",
    "뉴스"
];

let lastCategoryIndex = -1;

/**
 * 다음 카테고리 선택 (순환)
 */
export function getNextCategory(): string {
    lastCategoryIndex = (lastCategoryIndex + 1) % CATEGORIES.length;
    return CATEGORIES[lastCategoryIndex];
}

/**
 * 위스키 트렌드 검색 (시뮬레이션)
 * 실제 환경에서는 웹 검색 API나 RSS 피드를 사용할 수 있습니다
 */
async function searchWhiskyTrends(category: string): Promise<string> {
    // 검색 쿼리 생성
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

    // 실제 검색 구현 시 여기서 웹 검색 API 호출
    // 현재는 시뮬레이션 데이터 반환
    const simulatedResults = `
최근 위스키 업계 주요 트렌드:
- 지속 가능한 생산 방식에 대한 관심 증가
- 비전통적인 캐스크 피니싱 (와인, 맥주, 사케 등)
- 크래프트 증류소의 성장과 지역 특산물 활용
- AI와 데이터 분석을 활용한 블렌딩 기술
- 환경 친화적 패키징과 탄소 중립 목표
- 전통 vs 혁신의 균형을 추구하는 움직임
`;

    return simulatedResults;
}

/**
 * Gemini API를 활용한 독창적인 기사 주제 생성
 */
export async function generateTopicFromTrends(category: string): Promise<{
    title: string;
    subtitle: string;
    keywords: string[];
}> {
    try {
        // 환경 변수에서 API 키 가져오기
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.warn('⚠️ GEMINI_API_KEY가 설정되지 않았습니다. 기본 템플릿을 사용합니다.');
            return generateFallbackTopic(category);
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        // 트렌드 검색
        const trendData = await searchWhiskyTrends(category);

        // AI 프롬프트 생성
        const prompt = `당신은 한국의 프리미엄 위스키 매거진 'VODA'의 수석 에디터입니다.

카테고리: ${category}
최신 트렌드 데이터:
${trendData}

위 데이터를 바탕으로 한국 독자들이 흥미를 가질만한 독창적이고 매력적인 위스키 기사 주제를 하나 제안해주세요.

다음 JSON 형식으로만 응답해주세요:
{
  "title": "매력적이고 독창적인 제목 (한국어, 40자 이내)",
  "subtitle": "제목을 보완하는 부제목 (한국어, 60자 이내)",
  "keywords": ["키워드1", "키워드2", "키워드3", "키워드4", "키워드5"]
}

주의사항:
- 제목은 독자의 호기심을 자극해야 함
- 부제목은 제목을 구체화하고 흥미를 더해야 함
- 키워드는 영어와 한국어 혼용 가능
- 이미 다뤄진 듯한 뻔한 주제는 피할 것
- 최신 트렌드를 반드시 반영할 것`;

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        // JSON 파싱
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Invalid JSON response from Gemini');
        }

        const topic = JSON.parse(jsonMatch[0]);

        console.log('✅ AI 기반 주제 생성 완료:', topic.title);
        return topic;

    } catch (error) {
        console.error('❌ AI 주제 생성 실패:', error);
        console.log('🔄 기본 템플릿으로 대체합니다.');
        return generateFallbackTopic(category);
    }
}

/**
 * API 실패 시 사용할 기본 주제 생성
 */
function generateFallbackTopic(category: string): {
    title: string;
    subtitle: string;
    keywords: string[];
} {
    const fallbackTopics: Record<string, any> = {
        "트렌드": {
            title: "2026년 위스키 업계를 이끄는 5가지 혁신",
            subtitle: "지속가능성에서 AI 블렌딩까지, 변화의 물결",
            keywords: ["innovation", "sustainability", "AI", "craft", "future"]
        },
        "추천": {
            title: "가성비 위스키 베스트 10: 5만원 이하의 숨은 보석",
            subtitle: "입문자부터 애호가까지 만족하는 가치있는 선택",
            keywords: ["value", "affordable", "recommendation", "beginner", "best"]
        },
        "역사": {
            title: "위스키가 세계를 바꾼 순간들",
            subtitle: "금주령부터 글로벌 열풍까지",
            keywords: ["history", "prohibition", "heritage", "legacy", "culture"]
        },
        "칵테일": {
            title: "홈바텐더를 위한 위스키 칵테일 마스터클래스",
            subtitle: "클래식부터 모던까지, 집에서 즐기는 바 퀄리티",
            keywords: ["cocktail", "mixology", "recipe", "home bar", "drinks"]
        },
        "페어링": {
            title: "위스키와 음식의 완벽한 조화",
            subtitle: "한식부터 디저트까지, 놀라운 페어링의 세계",
            keywords: ["pairing", "food", "gastronomy", "matching", "flavor"]
        },
        "지역탐방": {
            title: "스코틀랜드 증류소 순례: 숨겨진 명소 10곳",
            subtitle: "위스키 애호가라면 꼭 방문해야 할 성지들",
            keywords: ["scotland", "distillery", "travel", "tour", "pilgrimage"]
        },
        "입문": {
            title: "위스키 입문자를 위한 완벽 가이드",
            subtitle: "첫 잔부터 올바르게 시작하는 방법",
            keywords: ["beginner", "guide", "introduction", "basics", "starter"]
        },
        "컬렉팅": {
            title: "위스키 투자: 현명한 컬렉터가 되는 법",
            subtitle: "희소성, 보관, 그리고 가치 상승의 비밀",
            keywords: ["collecting", "investment", "rare", "value", "auction"]
        },
        "리뷰": {
            title: "이달의 위스키: VODA의 솔직한 테이스팅 노트",
            subtitle: "과대광고 없이, 있는 그대로의 평가",
            keywords: ["review", "tasting", "notes", "honest", "evaluation"]
        },
        "뉴스": {
            title: "위스키 업계 이번 주 하이라이트",
            subtitle: "놓치면 안 될 최신 소식 총정리",
            keywords: ["news", "update", "industry", "announcement", "latest"]
        }
    };

    return fallbackTopics[category] || fallbackTopics["트렌드"];
}

/**
 * Gemini API를 활용한 풍성한 기사 본문 생성
 */
export async function generateArticleContent(
    title: string,
    subtitle: string,
    category: string,
    keywords: string[]
): Promise<string> {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.warn('⚠️ GEMINI_API_KEY가 설정되지 않았습니다. 기본 콘텐츠를 사용합니다.');
            return generateFallbackContent(title, subtitle, category);
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        const trendData = await searchWhiskyTrends(category);

        const prompt = `당신은 한국의 프리미엄 위스키 매거진 'VODA'의 시니어 라이터입니다.

기사 제목: ${title}
부제목: ${subtitle}
카테고리: ${category}
키워드: ${keywords.join(', ')}

최신 트렌드:
${trendData}

위 주제에 대한 풍성하고 전문적인 기사 본문을 작성해주세요.

요구사항:
1. 분량: 1,500-2,000자
2. 구조: 마크다운 형식 (##, ###, bullet points 활용)
3. 톤: VODA 매거진 스타일 - 전문적이면서도 친근하고, 흥미롭게
4. 내용:
   - 도입부: 독자의 관심을 끄는 훅
   - 본론: 구체적인 정보, 데이터, 예시
   - 마무리: "다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃"로 끝내기
5. 실제 위스키 이름과 브랜드를 언급하되 과도한 광고는 피할 것
6. 한국 독자에게 유용하고 흥미로운 정보 제공

중요: JSON이나 메타데이터 없이 마크다운 본문만 반환하세요.`;

        const result = await model.generateContent(prompt);
        const content = result.response.text();

        console.log('✅ AI 기반 본문 생성 완료:', content.length, '자');
        return content;

    } catch (error) {
        console.error('❌ AI 본문 생성 실패:', error);
        console.log('🔄 기본 콘텐츠로 대체합니다.');
        return generateFallbackContent(title, subtitle, category);
    }
}

/**
 * API 실패 시 사용할 기본 콘텐츠 생성
 */
function generateFallbackContent(title: string, subtitle: string, category: string): string {
    return `## ${subtitle}

위스키의 세계는 끊임없이 진화하고 있습니다. ${title}는 최근 가장 주목받는 변화 중 하나입니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

특히 젊은 세대의 위스키 애호가들은 단순히 '좋은 맛' 이상의 가치를 요구합니다. 지속 가능성, 투명성, 독창성이 이제는 위스키 선택의 중요한 기준이 되었습니다.

## 우리에게 주는 의미

이러한 변화는 소비자들에게 더 넓은 선택지와 더 풍부한 경험을 제공합니다. 전통적인 스타일을 사랑하는 사람들은 여전히 클래식한 위스키를 즐길 수 있으며, 새로운 것을 추구하는 사람들은 혁신적인 시도들을 경험할 수 있습니다.

위스키의 미래는 밝습니다. 전통과 혁신이 조화를 이루며, 더욱 다양하고 흥미로운 제품들이 우리를 기다리고 있습니다.

## 마치며

위스키의 세계는 끝없이 넓고 깊습니다. 오늘 소개한 내용이 여러분의 위스키 여정에 작은 도움이 되기를 바랍니다. 

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`;
}
