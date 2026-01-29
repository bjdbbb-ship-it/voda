// AI 기반 위스키 콘텐츠 생성기
// 독창적인 위스키 기사를 자동으로 생성

import { Article } from './data';
import { getRandomTopic, TopicTemplate } from './topicTemplates';
import { whiskies } from './data';

// 기사 생성 설정
interface ArticleGenerationConfig {
    minLength: number; // 최소 글자 수
    maxLength: number; // 최대 글자 수
    includeWhiskies: boolean; // 위스키 추천 포함 여부
    whiskeyCount: number; // 추천 위스키 개수
}

const defaultConfig: ArticleGenerationConfig = {
    minLength: 800,
    maxLength: 2000,
    includeWhiskies: true,
    whiskeyCount: 3
};

/**
 * 주제에 맞는 위스키 선택
 */
function selectRelevantWhiskies(topic: TopicTemplate, count: number = 3) {
    const keywords = topic.keywords.join(' ').toLowerCase();

    // 키워드에 맞는 위스키 필터링
    let relevant = whiskies.filter(w => {
        const tags = w.tags.join(' ').toLowerCase();
        const desc = w.description.toLowerCase();
        const name = w.name.toLowerCase();

        // 피트 관련
        if (keywords.includes('peat') || keywords.includes('smoky')) {
            return w.flavorProfile.peat >= 6;
        }

        // 셰리 캐스크
        if (keywords.includes('sherry')) {
            return tags.includes('sherry') || desc.includes('셰리');
        }

        // 가성비
        if (keywords.includes('affordable') || keywords.includes('budget')) {
            return w.priceRange === 'budget' || w.priceRange === 'mid';
        }

        // 일본 위스키
        if (keywords.includes('japanese')) {
            return w.region.includes('Japan');
        }

        // 버번
        if (keywords.includes('bourbon')) {
            return w.type.includes('Bourbon');
        }

        return true;
    });

    // 관련 위스키가 부족하면 전체에서 선택
    if (relevant.length < count) {
        relevant = whiskies;
    }

    // 무작위로 선택
    const shuffled = relevant.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * 주제에 맞는 콘텐츠 생성
 * 실제 환경에서는 AI API (OpenAI, Claude 등)를 사용할 수 있습니다
 */
function generateArticleContent(topic: TopicTemplate, selectedWhiskies: typeof whiskies): string {
    // 여기서는 템플릿 기반으로 생성
    // 실제로는 AI API를 호출하여 더 풍부한 콘텐츠 생성 가능

    const intro = generateIntroduction(topic);
    const body = generateBody(topic, selectedWhiskies);
    const conclusion = generateConclusion(topic);

    return `${intro}\n\n${body}\n\n${conclusion}`;
}

function generateIntroduction(topic: TopicTemplate): string {
    const intros = {
        "트렌드": `위스키 업계는 끊임없이 진화하고 있습니다. ${topic.title}는 최근 가장 주목받는 변화 중 하나입니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.`,

        "추천": `위스키의 세계는 넓고 깊습니다. 수많은 선택지 앞에서 어떤 위스키를 선택해야 할지 고민이 되시나요? 오늘은 ${topic.title.toLowerCase()}를 소개합니다.`,

        "테이스팅": `위스키를 제대로 즐기기 위해서는 올바른 테이스팅 기술이 필요합니다. ${topic.title}는 당신의 위스키 경험을 한 단계 끌어올려줄 것입니다.`,

        "칵테일": `위스키는 그 자체로도 훌륭하지만, 칵테일로 즐길 때 또 다른 매력을 발산합니다. ${topic.title}를 통해 위스키의 새로운 가능성을 발견해보세요.`,

        "페어링": `음식과 위스키의 조합은 무한한 가능성을 가지고 있습니다. ${topic.title}를 통해 완벽한 페어링의 세계로 안내하겠습니다.`,

        "지역탐방": `위스키의 맛은 그것이 만들어진 땅의 이야기를 담고 있습니다. ${topic.title}를 통해 위스키 생산지의 매력을 탐험해봅시다.`,

        "역사": `오늘날의 위스키를 이해하기 위해서는 그 역사를 알아야 합니다. ${topic.title}는 위스키 산업의 중요한 전환점이었습니다.`,

        "입문": `위스키의 세계에 첫 발을 내딛는 것은 설레면서도 두려운 일입니다. ${topic.title}를 통해 자신감 있게 위스키 여정을 시작하세요.`,

        "컬렉팅": `위스키는 단순한 음료를 넘어 투자와 컬렉션의 대상이 되었습니다. ${topic.title}를 통해 현명한 컬렉터가 되는 방법을 알아봅시다.`,

        "계절": `계절에 따라 어울리는 위스키도 달라집니다. ${topic.title}로 이번 시즌을 더욱 특별하게 만들어보세요.`
    };

    return intros[topic.category as keyof typeof intros] || intros["추천"];
}

function generateBody(topic: TopicTemplate, selectedWhiskies: typeof whiskies): string {
    let body = "";

    // 주제별 본문 생성
    if (topic.category === "추천") {
        body += "## 추천 위스키\n\n";

        selectedWhiskies.forEach((whisky, index) => {
            body += `### ${index + 1}. ${whisky.name}\n\n`;
            body += `**타입**: ${whisky.type} | **지역**: ${whisky.region} | **가격대**: ${getPriceRangeKorean(whisky.priceRange)}\n\n`;
            body += `${whisky.description}\n\n`;

            // 풍미 프로필
            body += `**풍미 특징**:\n`;
            body += `- 피트: ${whisky.flavorProfile.peat}/10\n`;
            body += `- 단맛: ${whisky.flavorProfile.sweet}/10\n`;
            body += `- 과일향: ${whisky.flavorProfile.fruit}/10\n`;
            body += `- 스파이시: ${whisky.flavorProfile.spice}/10\n`;
            body += `- 바디감: ${whisky.flavorProfile.body}/10\n\n`;
        });
    }

    // 추가 콘텐츠
    body += generateAdditionalContent(topic);

    return body;
}

function generateAdditionalContent(topic: TopicTemplate): string {
    const contents = {
        "테이스팅": `## 테이스팅 팁\n\n위스키를 제대로 즐기기 위해서는 올바른 순서와 방법이 중요합니다:\n\n1. **시각적 관찰**: 색상과 점도를 확인합니다\n2. **향 감지**: 코를 가까이 대고 천천히 향을 맡습니다\n3. **첫 모금**: 소량을 입에 머금고 혀 전체로 맛을 느낍니다\n4. **물 추가**: 몇 방울의 물을 추가하여 향이 어떻게 변하는지 관찰합니다`,

        "칵테일": `## 칵테일 레시피\n\n집에서도 쉽게 만들 수 있는 레시피를 소개합니다. 신선한 재료와 좋은 위스키만 있다면 바에서 마시는 것 못지않은 훌륭한 칵테일을 즐길 수 있습니다.`,

        "페어링": `## 페어링 가이드\n\n음식과 위스키를 매칭할 때는 다음 원칙을 기억하세요:\n\n- **보완**: 서로 다른 풍미가 조화를 이루도록\n- **대비**: 강한 맛과 부드러운 맛의 균형\n- **증폭**: 비슷한 풍미 요소를 강화`,

        "입문": `## 시작하기 전에\n\n위스키 입문자라면 다음 사항을 기억하세요:\n\n- 가격이 높다고 항상 좋은 것은 아닙니다\n- 자신의 취향을 찾는 것이 가장 중요합니다\n- 천천히, 다양하게 시도해보세요`
    };

    return contents[topic.category as keyof typeof contents] || "";
}

function generateConclusion(topic: TopicTemplate): string {
    return `## 마치며\n\n${topic.subtitle} 위스키의 세계는 끝없이 넓고 깊습니다. 오늘 소개한 내용이 여러분의 위스키 여정에 작은 도움이 되기를 바랍니다. 

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`;
}

function getPriceRangeKorean(range: string): string {
    const map: Record<string, string> = {
        'budget': '가성비 (5만원 이하)',
        'mid': '중가 (5-10만원)',
        'premium': '프리미엄 (10-20만원)',
        'luxury': '럭셔리 (20만원 이상)'
    };
    return map[range] || range;
}

/**
 * 완전한 기사 생성
 */
export async function generateDailyArticle(config: Partial<ArticleGenerationConfig> = {}): Promise<Article> {
    const finalConfig = { ...defaultConfig, ...config };

    // 1. 무작위 주제 선택
    const topic = getRandomTopic();

    // 2. 관련 위스키 선택
    const selectedWhiskies = selectRelevantWhiskies(topic, finalConfig.whiskeyCount);

    // 3. 콘텐츠 생성
    const content = generateArticleContent(topic, selectedWhiskies);

    // 4. 기사 객체 생성
    const article: Article = {
        id: `auto-${Date.now()}`,
        slug: `${topic.keywords[0] || 'article'}-${Date.now()}`,
        title: topic.title,
        subtitle: topic.subtitle,
        category: topic.category,
        author: "VODA",
        publishedAt: new Date().toISOString().split('T')[0],
        imageUrl: getImageForCategory(topic.category),
        content: content,
        tags: [...topic.keywords, topic.category]
    };

    return article;
}

function getImageForCategory(category: string): string {
    // Unsplash 이미지 (카테고리별)
    const images: Record<string, string> = {
        "트렌드": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=3000&auto=format&fit=crop",
        "추천": "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=3000&auto=format&fit=crop",
        "테이스팅": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=3000&auto=format&fit=crop",
        "칵테일": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=3000&auto=format&fit=crop",
        "페어링": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=3000&auto=format&fit=crop",
        "지역탐방": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=3000&auto=format&fit=crop",
        "역사": "https://images.unsplash.com/photo-1504279807066-1c4f5c5e8e3c?q=80&w=3000&auto=format&fit=crop",
        "입문": "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=3000&auto=format&fit=crop",
        "컬렉팅": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=3000&auto=format&fit=crop",
        "계절": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=3000&auto=format&fit=crop"
    };

    return images[category] || images["추천"];
}

// 테스트용 함수
export async function generateSampleArticle() {
    const article = await generateDailyArticle();
    console.log("=== Generated Article ===");
    console.log(`Title: ${article.title}`);
    console.log(`Subtitle: ${article.subtitle}`);
    console.log(`Category: ${article.category}`);
    console.log(`Content Length: ${article.content.length} characters`);
    console.log("\n" + article.content);
    return article;
}
