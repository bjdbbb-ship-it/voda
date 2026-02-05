// 위스키 콘텐츠 주제 템플릿
// Whisky Advocate, Master of Malt, WhiskyCast 등의 주제와 스타일을 참고하여 독창적인 관점으로 재해석

export interface TopicTemplate {
    category: string;
    title: string;
    subtitle: string;
    keywords: string[];
    targetAudience: 'beginner' | 'intermediate' | 'expert' | 'all';
    fullContent?: string; // 풍성한 본문 내용 (옵션)
}

export const topicTemplates: TopicTemplate[] = [
    // 트렌드 & 혁신
    {
        category: "트렌드",
        title: "마이크로블렌딩의 시대: 소규모 배치가 만드는 큰 변화",
        subtitle: "대량 생산에서 벗어나 개성을 찾는 위스키 업계의 새로운 흐름",
        keywords: ["microblend", "craft", "small batch", "innovation", "blending"],
        targetAudience: "intermediate",
        fullContent: `## 대량 생산의 시대를 넘어서
수십만 병씩 찍어내는 대형 브랜드의 위스키들도 훌륭하지만, 최근 위스키 애호가들은 더욱 '개성'에 집중하기 시작했습니다. 마이크로블렌딩(Micro-blending)은 아주 적은 수량의 오크통만을 선택하여, 해당 오크통들이 가진 독특한 풍미를 극대화하는 방식입니다.

## 소규모 배치가 주는 특별함
소규모 배치(Small Batch) 위스키의 가장 큰 매력은 '희소성'과 '정교함'입니다. 마스터 블렌더는 보통의 블렌딩 과정에서 묻혀버릴 수 있는 미세한 풍미—예를 들면 특정 오크통에서만 나타나는 진한 코코넛 향이나 독특한 향신료의 느낌—를 놓치지 않고 병에 담아냅니다.

## 우리에게 주는 의미
이러한 흐름은 소비자들에게 더 넓은 선택지를 제공합니다. "항상 같은 맛"이 아닌 "올해만 맛볼 수 있는 특별한 맛"을 찾는 즐거움을 주는 것이죠. 컴파스 박스(Compass Box)와 같은 독립 병입자들이나 신흥 크래프트 증류소들이 이 트렌드를 주도하며 위스키의 지평을 넓히고 있습니다.`
    },
    {
        category: "트렌드",
        title: "헝가리안 오크의 부상: 유럽의 숨겨진 보물",
        subtitle: "아메리칸 오크와 프렌치 오크를 넘어, 새로운 풍미의 지평을 여는 헝가리안 오크",
        keywords: ["hungarian oak", "cask", "maturation", "flavor", "barrel"],
        targetAudience: "expert",
        fullContent: `## 왜 헝가리안 오크인가?
위스키 숙성의 90% 이상은 아메리칸 화이트 오크나 유러피언(주로 프렌치) 오크에서 이루어집니다. 하지만 최근 몇몇 선구적인 증류소들이 헝가리의 '젬플렌(Zemplén)' 산맥에서 자란 오크에 주목하고 있습니다.

## 독특한 풍미 프로필
헝가리안 오크는 아메리칸 오크보다 훨씬 촘촘한 결을 가지고 있으며, 프렌치 오크보다 더 강한 스파이시함을 선사합니다. 특히 검은 후추, 정향(Clove), 그리고 구운 견과류의 풍미가 위스키에 깊게 스며들어, 기존의 셰리나 버번 숙성과는 또 다른 차원의 복합미를 완성합니다.`
    },
    {
        category: "추천",
        title: "입문자를 위한 피트 위스키 로드맵",
        subtitle: "스모키한 맛의 세계로 안전하게 들어가는 법",
        keywords: ["peat", "smoky", "beginner", "guide", "islay"],
        targetAudience: "beginner",
        fullContent: `## 피트(Peat)는 무엇인가요?
피트는 수천 년 동안 퇴적된 이끼와 초목이 탄화된 '토탄'을 의미합니다. 위스키의 원료인 보리를 건조시킬 때 이 피트를 태운 연기를 입히면, 우리에게 익숙한 그 '스모키한 요오드 향'이 생겨납니다.

## 단계별 도전 가이드
1. **하이랜드/아일랜드 입문**: 하이랜드 파크(Highland Park)나 탈리스커(Talisker)처럼 피트 향이 은은하고 짭조름한 위스키로 시작하세요.
2. **아일라의 정수**: 이제 라프로익(Laphroaig)이나 아드벡(Ardbeg) 같은 강력한 피트 밤(Peat Bomb)에 도전할 차례입니다. 처음에는 강렬하지만, 그 뒤에 숨겨진 달콤함과 과일 향을 발견하는 순간 당신은 피트의 노예가 될 것입니다.`
    },
    {
        category: "칵테일",
        title: "하이볼의 진화: 클래식에서 모던까지",
        subtitle: "일본에서 시작된 하이볼 문화의 세계적 확산",
        keywords: ["highball", "japanese", "cocktail", "refreshing", "ice"],
        targetAudience: "all",
        fullContent: `## 단순함의 미학, 하이볼
하이볼은 위스키, 탄산수, 그리고 얼음이라는 세 가지 단순한 재료로 만들어집니다. 하지만 이 단순함 속에는 얼음의 투명도, 탄산의 강도, 그리고 위스키와의 비율이라는 정교한 물리 법칙이 숨어 있습니다.

## 2026년의 하이볼 트렌드
최근에는 탄산수 대신 수제 진저 에일이나 녹차를 섞는 '모던 하이볼'이 인기입니다. 특히 위스키의 캐릭터를 해치지 않으면서도 계절감을 살릴 수 있는 가니시(허브, 과일 껍질 등)의 활용이 갈수록 중요해지고 있습니다. 일상의 피로를 날려버릴 시원한 하이볼 한 잔으로 오늘을 마무리해보세요.`
    },
    {
        category: "과학",
        title: "물 한 방울의 마법: 위스키에 물을 넣어야 하는 이유",
        subtitle: "과학적으로 증명된 풍미의 해방",
        keywords: ["science", "water", "flavor", "tasting", "aroma"],
        targetAudience: "all",
        fullContent: `## 향이 폭발하는 원리
위스키에 물을 한두 방울 떨어뜨리면, 알코올 속에 갇혀 있던 '에스테르'와 같은 향의 분자들이 소수성(물과 섞이지 않으려는 성질) 때문에 표면으로 밀려 올라옵니다. 이것이 바로 우리가 코로 느끼는 향이 더욱 풍성해지는 과학적 이유입니다.

## 과이어콜(Guaiacol)의 역할
특히 스모키한 위스키의 핵심 성분인 과이어콜은 물이 추가되었을 때 액체-기체 경계면으로 이동하는 특성이 있습니다. 즉, 물을 넣음으로써 위스키의 진정한 잠재력을 '잠금 해제'하는 셈이죠. 이제 잔에 물 한 방울을 떨어뜨려 보세요. 전에는 느끼지 못했던 화사한 꽃향기나 과일 향이 당신을 반길 것입니다.`
    }
];

// 무작위 주제 선택 함수
export function getRandomTopic(): TopicTemplate {
    const randomIndex = Math.floor(Math.random() * topicTemplates.length);
    return topicTemplates[randomIndex];
}

// 카테고리별 주제 선택
export function getTopicByCategory(category: string): TopicTemplate {
    const filtered = topicTemplates.filter(t => t.category === category);
    if (filtered.length === 0) return getRandomTopic();
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

// 난이도별 주제 선택
export function getTopicByAudience(audience: 'beginner' | 'intermediate' | 'expert' | 'all'): TopicTemplate {
    const filtered = topicTemplates.filter(t => t.targetAudience === audience || t.targetAudience === 'all');
    if (filtered.length === 0) return getRandomTopic();
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}
