// AI 기반 위스키 콘텐츠 생성기
// 독창적인 위스키 기사를 자동으로 생성

import { Article } from './data';
import { getRandomTopic, TopicTemplate, topicTemplates } from './topicTemplates';
import { whiskies } from './data';

// 기사 생성 설정
interface ArticleGenerationConfig {
    minLength: number; // 최소 글자 수
    maxLength: number; // 최대 글자 수
    includeWhiskies: boolean; // 위스키 추천 포함 여부
    whiskeyCount: number; // 추천 위스키 개수
    style?: 'classic' | 'witty' | 'podcast'; // 스타일 옵션 추가
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
        "계절": `계절에 따라 어울리는 위스키도 달라집니다. ${topic.title}로 이번 시즌을 더욱 특별하게 만들어보세요.`,
        "리뷰": `이번 주는 조금 특별한 녀석을 가져왔습니다. Master of Malt 블로그에서 영감을 받은 VODA의 아주 솔직하고 가감 없는 리뷰! ${topic.title}의 속살을 낱낱이 파헤쳐 봅니다.`,
        "뉴스": `위스키 업계에 또 다른 소란이 발생했군요. 좋은 의미로든, 나쁜 의미로든 말이죠. ${topic.title} 소식을 통해 지금 가장 뜨거운 감자가 무엇인지 전해드립니다.`,
        "팟캐스트": `전 세계 위스키 애호가들의 필청 팟캐스트, 'WhiskyCast'의 최신 에피소드 내용을 VODA가 한국어로 정리해 드립니다. ${topic.title}를 통해 글로벌 업계의 생생한 목소리를 들어보세요.`,
        "인터뷰": `증류소의 심장부에서는 어떤 대화가 오고 갈까요? WhiskyCast의 마크 길레스피가 진행한 ${topic.title} 내용을 바탕으로, 글로 읽는 위스키 다큐멘터리를 준비했습니다.`
    };

    return intros[topic.category as keyof typeof intros] || intros["추천"];
}

function generateBody(topic: TopicTemplate, selectedWhiskies: typeof whiskies): string {
    let body = "";

    // 주제별 본문 생성
    if (topic.category === "추천" || topic.category === "리뷰") {
        body += topic.category === "리뷰" ? "## VODA의 테이스팅 노트\n\n" : "## 추천 위스키\n\n";

        selectedWhiskies.forEach((whisky, index) => {
            body += `### ${index + 1}. ${whisky.name}\n\n`;
            body += `**타입**: ${whisky.type} | **지역**: ${whisky.region} | **가격대**: ${getPriceRangeKorean(whisky.priceRange)}\n\n`;

            if (topic.category === "리뷰") {
                body += `> **VODA의 한마디**: "이 위스키는 마치 ${whisky.flavorProfile.peat > 5 ? '폭풍우 치는 바다' : '햇살 가득한 정원'}을 병에 담아둔 것 같네요. 처음엔 강렬하지만 끝은 놀라울 정도로 부드럽습니다."\n\n`;
            }

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

    // WhiskyCast 전용 본문 생성
    if (topic.category === "팟캐스트" || topic.category === "인터뷰") {
        body += "## 에피소드 핵심 요약\n\n";
        body += "> **VODA의 참고 자료**: 이 기사는 WhiskyCast의 최신 에피소드 오디오 내용을 AI로 분석/번역하여 작성되었습니다.\n\n";

        if (topic.keywords.includes("behind the label")) {
            body += "### 라벨 뒤에 숨겨진 이야기 (Behind the Label)\n\n이번 에피소드에서는 위스키 숙성 시 발생하는 '위스키 미스트(Whisky Mist)'의 미스터리를 다뤘습니다. 증류소 창고 깊은 곳에서 발생하는 기묘한 현상이 사실은 온도와 습도의 정교한 상호작용이라는 점을 마크 길레스피가 명쾌하게 설명해 줍니다.\n\n";
        } else if (topic.category === "팟캐스트") {
            body += "### 이번 주의 업계 뉴스\n\n최근 미국산 위스키에 대한 EU의 관세 인상 중단 결정이 큰 화제입니다. 업계 리더들은 이번 조치가 침체된 바와 레스토랑 업계에 큰 활력이 될 것으로 기대하고 있습니다. 또한 일본과 웨일스 등 신흥 생산지에서 새로운 증류소가 속속 문을 열고 있다는 반가운 소식도 포함되었습니다.\n\n";
        } else {
            body += "### 마스터 블렌더 단독 인터뷰\n\n인도 싱글 몰트의 자존심, 암룻(Amrut)의 아속 초칼링감(Ashok Chokalingam)과의 대화에서는 극한의 기후에서 위스키를 숙성시키는 고충과 자부심이 그대로 느껴졌습니다. 3년 만에 천사의 몫(Angel's Share)이 30%를 넘어서는 대만과 인도의 열대 숙성 비화는 언제 들어도 놀랍습니다.\n\n";
        }
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

        "입문": `## 시작하기 전에\n\n위스키 입문자라면 다음 사항을 기억하세요:\n\n- 가격이 높다고 항상 좋은 것은 아닙니다\n- 자신의 취향을 찾는 것이 가장 중요합니다\n- 천천히, 다양하게 시도해보세요`,

        "뉴스": `## 업계가 술렁이는 이유\n\n단순히 새로운 제품이 나왔기 때문이 아닙니다. 이번 변화는 위스키를 만드는 방식이나 즐기는 문화를 완전히 바꿀 수도 있는 잠재력을 가지고 있습니다. 전통적인 스코틀랜드 증류소들조차 Master of Malt의 블로그를 보며 힌트를 얻을 정도로 혁신적인 흐름이죠.`,

        "리뷰": `## 그래서 살까 말까?\n\n결론부터 말씀드리자면, 지갑을 열 준비를 하시는 게 좋을 것 같습니다. 물론 완벽한 위스키는 없지만, 이 제품은 적어도 당신의 바 장식장에서 가장 먼저 비워질 병이 될 확률이 매우 높거든요.`,

        "팟캐스트": `## 오디오로 더 자세히 듣기\n\n더 많은 현장감은 [WhiskyCast 공식 사이트](https://whiskycast.libsyn.com/)에서 직접 에피소드 청취를 통해 확인하실 수 있습니다. VODA는 앞으로도 중요한 글로벌 팟캐스트 내용을 한국 독자들께 가장 먼저 전해드리겠습니다.`
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

    // 1. 주제 선택 (스타일에 따라 필터링)
    let topic: TopicTemplate;
    if (finalConfig.style === 'podcast') {
        const podcastTopics = topicTemplates.filter((t: TopicTemplate) => t.category === "팟캐스트" || t.category === "인터뷰");
        topic = podcastTopics[Math.floor(Math.random() * podcastTopics.length)];
    } else if (finalConfig.style === 'witty') {
        const wittyTopics = topicTemplates.filter((t: TopicTemplate) => t.category === "리뷰" || t.category === "뉴스");
        topic = wittyTopics[Math.floor(Math.random() * wittyTopics.length)];
    } else {
        topic = getRandomTopic();
    }

    // 2. 관련 위스키 선택
    const selectedWhiskies = selectRelevantWhiskies(topic, finalConfig.whiskeyCount);

    // 3. 콘텐츠 생성
    const content = generateArticleContent(topic, selectedWhiskies);

    // 4. 기사 객체 생성
    const styleTag = finalConfig.style === 'podcast' ? 'whiskycast' :
        finalConfig.style === 'witty' ? 'master-of-malt' : null;

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
        tags: [...topic.keywords, topic.category, ...(styleTag ? [styleTag] : [])]
    };

    return article;
}

function getImageForCategory(category: string): string {
    // AI 이미지 생성 전까지 빈 값 유지
    return "";
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
