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
        keywords: ["microblend", "craft", "small batch", "innovation"],
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
        keywords: ["hungarian oak", "cask", "maturation", "flavor"],
        targetAudience: "expert"
    },
    {
        category: "트렌드",
        title: "2026년 주목해야 할 위스키 트렌드: 지속가능성과 투명성",
        subtitle: "환경을 생각하는 증류소들의 혁신적인 시도",
        keywords: ["sustainability", "transparency", "eco-friendly"],
        targetAudience: "all"
    },

    // 가성비 & 추천
    {
        category: "추천",
        title: "10만원 이하로 즐기는 프리미엄 위스키 5선",
        subtitle: "가격 대비 최고의 만족을 주는 숨은 보석들",
        keywords: ["affordable", "value", "budget", "premium"],
        targetAudience: "beginner",
        fullContent: `지갑 사정은 가볍지만, 위스키의 깊은 풍미는 포기할 수 없는 당신을 위해 준비했습니다. 10만원 이하라는 정해진 예산 안에서도 '프리미엄'의 가치를 충분히 느낄 수 있는 위스키들을 소개합니다.

## 가성비의 기준이 바뀌다
최근 위스키 가격이 전반적으로 상승했지만, 여전히 합리적인 가격대에 훌륭한 퀄리티를 유지하는 증류소들이 있습니다. 이들은 대량 생산의 효율성을 갖추면서도 전통적인 제조 방식을 고수하여 입문자부터 숙련자까지 모두를 만족시키는 마법을 부립니다.`
    },
    {
        category: "추천",
        title: "입문자를 위한 피트 위스키 로드맵",
        subtitle: "스모키한 맛의 세계로 안전하게 들어가는 법",
        keywords: ["peat", "smoky", "beginner", "guide"],
        targetAudience: "beginner",
        fullContent: `많은 입문자가 '피트(Peat)'의 벽 앞에서 망설입니다. 하지만 한번 그 매력에 빠지면 헤어 나오기 힘든 것이 바로 이 스모키한 세계입니다. 처음부터 강렬한 아일라 위스키에 도전하기보다는, 단계별로 천천히 경험하는 것이 중요합니다.`
    },
    {
        category: "추천",
        title: "셰리 캐스크 애호가를 위한 필수 위스키 10선",
        subtitle: "달콤하고 풍부한 셰리 오크의 매력에 빠져보세요",
        keywords: ["sherry cask", "sweet", "rich", "oak"],
        targetAudience: "intermediate",
        fullContent: `셰리 캐스크 숙성 위스키는 한국 위스키 애호가들이 가장 사랑하는 스타일 중 하나입니다. 꾸덕한 말린 과일의 달콤함과 견과류의 고소함, 그리고 진한 색감까지. '셰리 밤'이라 불리는 강렬한 녀석들부터 우아한 밸런스를 가진 제품들까지 한자리에 모았습니다.`
    },

    // 테이스팅 & 기술
    {
        category: "테이스팅",
        title: "위스키 글라스에 스모키 향을 입히는 법",
        subtitle: "칵테일과 위스키의 풍미를 극대화하는 스모킹 기술",
        keywords: ["smoking", "glass", "technique", "flavor"],
        targetAudience: "intermediate"
    },
    {
        category: "테이스팅",
        title: "위스키 테이스팅 노트 작성의 기술",
        subtitle: "전문가처럼 향과 맛을 표현하는 방법",
        keywords: ["tasting notes", "flavor", "aroma", "technique"],
        targetAudience: "intermediate"
    },
    {
        category: "테이스팅",
        title: "물 한 방울의 마법: 위스키에 물을 넣어야 하는 이유",
        subtitle: "과학적으로 증명된 물의 효과",
        keywords: ["water", "dilution", "science", "flavor"],
        targetAudience: "all",
        fullContent: `위스키에 물을 타는 것을 '술을 망치는 일'이라고 생각하시나요? 사실 과학적으로 보면 정반대입니다. 물 한두 방울은 위스키 속에 갇혀 있던 향의 분자들을 표면으로 끌어올려, 더욱 풍부한 향을 느낄 수 있게 해줍니다.

## 과이어콜(Guaiacol)의 과학
위스키의 스모키한 향을 담당하는 분자인 '과이어콜'은 물과 섞였을 때 액체 표면으로 이동하는 성질이 있습니다. 도수가 너무 높으면 알코올 성분에 갇혀 있던 이 향들이, 물을 추가함으로써 우리 코로 더 잘 전달되게 되는 것이죠.`
    },

    // 칵테일 & 페어링
    {
        category: "칵테일",
        title: "아가베와 피트의 만남: 테킬라와 위스키의 완벽한 조화",
        subtitle: "두 세계를 융합한 혁신적인 칵테일 레시피",
        keywords: ["tequila", "peat", "cocktail", "fusion"],
        targetAudience: "intermediate"
    },
    {
        category: "칵테일",
        title: "하이볼의 진화: 클래식에서 모던까지",
        subtitle: "일본에서 시작된 하이볼 문화의 세계적 확산",
        keywords: ["highball", "japanese", "modern", "classic"],
        targetAudience: "all"
    },
    {
        category: "페어링",
        title: "위스키와 초콜릿: 완벽한 페어링을 위한 5가지 법칙",
        subtitle: "달콤함과 복합미의 조화",
        keywords: ["chocolate", "pairing", "dessert", "sweet"],
        targetAudience: "all"
    },
    {
        category: "페어링",
        title: "한식과 위스키: 의외의 조합이 만드는 놀라운 시너지",
        subtitle: "김치찌개부터 삼겹살까지, 한국 음식과 어울리는 위스키",
        keywords: ["korean food", "pairing", "fusion", "culture"],
        targetAudience: "all"
    },

    // 지역 & 문화
    {
        category: "지역탐방",
        title: "아일라 섬 증류소 순례: 피트의 성지를 찾아서",
        subtitle: "8개 증류소가 만들어내는 다양한 스모키 스펙트럼",
        keywords: ["islay", "scotland", "distillery", "peat"],
        targetAudience: "intermediate",
        fullContent: `아일라(Islay)는 스코틀랜드 서부 해안에 위치한 작은 섬이지만, 위스키 애호가들에게는 '꿈의 성지'와도 같은 곳입니다. 이곳의 위스키를 규정짓는 결정적인 요소는 바로 **피트(Peat, 토탄)**입니다.

## 남부의 강렬한 3인방
아일라 섬 남쪽 해안에는 가장 강렬한 피트 풍미를 자랑하는 세 증류소인 라프로익, 아드벡, 라가불린이 나란히 자리 잡고 있습니다. 이들은 각각 약품 향, 시트러스한 스모키함, 우아한 훈연향이라는 독자적인 영역을 구축하고 있습니다.

## 북부의 반전 매력
남부와 달리 부나하벤과 브룩라디 같은 북부 증류소들은 상대적으로 부드럽거나 피트를 사용하지 않는 스타일로도 유명합니다. 이는 아일라 위스키가 단순히 '독한 술'이 아닌, 매우 넓은 스펙트럼을 가진 예술임을 증명합니다.`
    },
    {
        category: "지역탐방",
        title: "대만과 인도: 신흥 위스키 강국의 도전",
        subtitle: "고온 다습한 기후가 만드는 독특한 풍미",
        keywords: ["taiwan", "india", "tropical", "emerging"],
        targetAudience: "expert",
        fullContent: `위스키 하면 스코틀랜드와 아일랜드, 그리고 미국을 먼저 떠올리기 마련입니다. 하지만 최근 세계적인 위스키 대회에서 1위를 휩쓸며 전통 강국들을 위협하는 곳들이 있습니다. 바로 대만과 인도입니다.

## 열대 숙성의 마법 (Tropical Aging)
대만과 인도의 가장 큰 특징은 압도적인 '숙성 속도'입니다. 서늘한 스코틀랜드와 달리 이곳은 덥고 습합니다. 이로 인해 오크통과의 상호작용이 훨씬 활발하게 일어나며, 스코틀랜드에서 10년 이상 걸릴 숙성이 이곳에서는 단 3~4년 만에 이루어지기도 합니다.

## 천사들의 높은 지분 (Angel's Share)
빠른 숙성에는 대가가 따릅니다. 스코틀랜드에서는 매년 약 2% 정도의 원액이 증발하지만, 대만이나 인도에서는 10~15%에 달하는 양이 사라집니다. 천사들이 가져가는 몫이 너무 크지만, 그만큼 살아남은 원액은 놀라울 정도의 농축미를 자랑하게 됩니다.`
    },

    // 역사 & 스토리
    {
        category: "역사",
        title: "금주령이 만든 위스키의 역사",
        subtitle: "미국 금주령이 위스키 산업에 미친 영향",
        keywords: ["prohibition", "history", "america", "bourbon"],
        targetAudience: "all",
        fullContent: `금주령 시대에도 합법적으로 위스키를 구할 방법이 있었다는 사실을 알고 계셨나요? 바로 **'의료용 위스키(Medicinal Whiskey)'**입니다.

## '약'으로 처방된 위스키
당시 의사들은 위스키가 독감부터 우울증까지 만병통치약이라 믿었고, 정부는 소수의 증류소에만 의료용 위스키 제조 면허를 내주었습니다. 현재 위스키의 명가로 불리는 브랜드들이 대공황과 금주령을 버텨낸 비결도 바로 이 '합법적 약물' 면허 덕분이었습니다.

## 칵테일 문화의 탄생
불법으로 유통되던 질 낮은 밀주의 고약한 알코올 냄새를 가리기 위해 설탕, 과일즙, 시럽을 섞기 시작한 것이 오늘날 우리가 즐기는 클래식 칵테일 문화가 폭발적으로 성장한 배경이 되었습니다. 위스키의 위기는 역설적으로 칵테일의 전성기를 불러왔습니다.`
    },
    {
        category: "역사",
        title: "싱글 몰트의 탄생: 글렌피딕이 시작한 혁명",
        subtitle: "블렌디드 위스키 시대를 끝낸 한 병의 위스키",
        keywords: ["single malt", "glenfiddich", "history", "revolution"],
        targetAudience: "intermediate",
        fullContent: `1960년대까지만 해도 위스키 시장은 블렌디드 위스키가 지배하고 있었습니다. 싱글 몰트는 블렌딩을 위한 원액일 뿐, 그 자체로 상품 가치가 낮다고 여겨졌죠. 하지만 **글렌피딕(Glenfiddich)**의 과감한 도전이 모든 것을 바꿨습니다.

## 1963년, 세상을 바꾼 결정
글렌피딕 증류소의 샌디 그랜트 고든은 자신의 싱글 몰트 위스키를 전 세계에 알리기로 결심합니다. 당시 업계 사람들은 미친 짓이라고 생각했지만, 결과는 대성공이었습니다. 소비자들은 각 증류소의 개성이 살아있는 싱글 몰트의 매력에 열광하기 시작했습니다. 오늘날 우리가 수많은 싱글 몰트를 즐길 수 있는 것은 바로 이 한 번의 혁명 덕분입니다.`
    },

    // 초보자 가이드
    {
        category: "입문",
        title: "위스키 입문자가 꼭 알아야 할 10가지",
        subtitle: "스카치, 버번, 라이의 차이부터 시작하는 위스키 여행",
        keywords: ["beginner", "guide", "basics", "introduction"],
        targetAudience: "beginner"
    },
    {
        category: "입문",
        title: "위스키 라벨 읽는 법: 병에 담긴 정보 해독하기",
        subtitle: "숫자와 용어가 알려주는 위스키의 비밀",
        keywords: ["label", "age statement", "terminology", "guide"],
        targetAudience: "beginner",
        fullContent: `위스키 병 앞에 서면 알 수 없는 숫자와 영어 단어들에 당황하기 쉽습니다. 하지만 라벨의 몇 가지 규칙만 이해하면, 병을 따기도 전에 그 안의 맛을 짐작할 수 있습니다.

## 숫자(Age Statement)의 비밀
라벨에 크게 적힌 숫자(예: 12, 15, 18)는 병 안에 담긴 원액 중 **가장 어린 원액의 숙성 년도**를 의미합니다. 예를 들어 12년 숙성 위스키라면, 20년 된 원액이 섞였을 수는 있어도 12년보다 덜 숙성된 원액은 한 방울도 들어가지 않았다는 뜻입니다.

## 증류 방식의 차이
- **Single Malt**: 오직 한 증류소에서 맥아만을 사용하여 만든 위스키.
- **Blended**: 여러 증류소의 몰트 위스키와 그레인 위스키를 섞은 것. 조니워커, 발렌타인이 대표적입니다.
- **Cask Strength (CS)**: 물을 타지 않고 그대로 병입하여 높은 도수와 강렬한 맛을 자랑합니다.`
    },

    // 투자 & 컬렉팅
    {
        category: "컬렉팅",
        title: "2025년 경매 최고가 기록: 위스키 투자의 현주소",
        subtitle: "소더비와 크리스티 경매에서 주목받은 희귀 위스키들",
        keywords: ["auction", "investment", "rare", "collectible"],
        targetAudience: "expert"
    },
    {
        category: "컬렉팅",
        title: "위스키 컬렉션 시작하기: 첫 병부터 100병까지",
        subtitle: "현명한 컬렉터가 되기 위한 전략",
        keywords: ["collection", "strategy", "investment", "storage"],
        targetAudience: "intermediate",
        fullContent: `위스키를 모으는 것은 단순히 술을 사두는 것 이상의 즐거움이 있습니다. 하지만 무작정 비싼 술을 산다고 해서 좋은 컬렉션이 되는 것은 아닙니다. 자신만의 기준과 전략이 필요합니다.

## 핵심 전략 1: 테마를 정하라
특정 증류소, 특정 지역, 혹은 특정 빈티지 등 명확한 테마가 있는 컬렉션은 가치가 더 높습니다. 예를 들어 '아일라 피트 위스키 10년 숙성 시리즈'와 같이 자신만의 스토리를 만들어보세요.

## 핵심 전략 2: 보관이 생명이다
위스키는 와인과 달리 세워서 보관해야 합니다. 직사광선을 피하고 온도가 일정한 곳에 두는 것만으로도 수십 년간 맛을 보존할 수 있습니다.`
    },

    // 계절 & 특별 주제
    {
        category: "계절",
        title: "여름밤을 위한 상쾌한 위스키 칵테일 5선",
        subtitle: "더위를 식혀주는 시원하고 청량한 레시피",
        keywords: ["summer", "cocktail", "refreshing", "seasonal"],
        targetAudience: "all",
        fullContent: `더운 여름, 묵직한 니트(Neat) 위스키가 부담스럽다면 하이볼이나 칵테일로 즐겨보세요. 탄산수와 얼음, 그리고 약간의 시트러스만 있다면 어떤 위스키도 훌륭한 갈증 해소제가 됩니다.`
    },
    {
        category: "계절",
        title: "겨울 저녁, 벽난로 앞에서 즐기는 위스키",
        subtitle: "추운 날씨에 어울리는 묵직하고 따뜻한 위스키",
        keywords: ["winter", "cozy", "rich", "seasonal"],
        targetAudience: "all",
        fullContent: `살을 에실 듯한 추위가 찾아오면, 우리에겐 몸과 마음을 데워줄 한 잔의 위스키가 필요합니다. 도수가 높고 셰리 캐스크의 달콤함이 진한 위스키는 겨울밤 최고의 동반자입니다.`
    },

    // Master of Malt 스타일 - 뉴스 & 리뷰 (위트 중심)
    {
        category: "리뷰",
        title: "이번 주의 위스키: 당신이 놓쳐서는 안 될 단 한 병",
        subtitle: "마스터 오브 몰트 스타일의 가감 없는 솔직 리뷰",
        keywords: ["whisky of the week", "review", "must-buy"],
        targetAudience: "all"
    },
    {
        category: "뉴스",
        title: "증류소 스포트라이트: 전통의 틀을 깬 반항아들",
        subtitle: "업계 기대를 저버린(?) 천재적인 발상의 증류소 탐방",
        keywords: ["distillery spotlight", "innovation", "news"],
        targetAudience: "intermediate"
    },
    {
        category: "리뷰",
        title: "실패 없는 셰리 위스키: 우리가 '셰리 폭탄'에 열광하는 이유",
        subtitle: "달콤함 속에 숨겨진 스파이시한 도발",
        keywords: ["sherry bomb", "sweet", "spice", "review"],
        targetAudience: "all"
    },

    // WhiskyCast 스타일 - 팟캐스트 리포트
    {
        category: "팟캐스트",
        title: "WhiskyCast 리포트: 최신 업계 뉴스 브리핑",
        subtitle: "전 세계를 발로 뛰는 마크 길레스피의 팟캐스트 요약",
        keywords: ["whiskycast", "news", "report", "podcast"],
        targetAudience: "all"
    },
    {
        category: "인터뷰",
        title: "마스터 블렌더와의 대화: WhiskyCast 단독 인터뷰",
        subtitle: "팟캐스트에서만 공개된 증류소 비하인드 스토리",
        keywords: ["interview", "whiskycast", "behind the label"],
        targetAudience: "intermediate"
    },
    {
        category: "팟캐스트",
        title: "라벨 뒤의 진실: 위스키 미스터리를 풀다",
        subtitle: "WhiskyCast 'Behind the Label' 코너 한국어 정리",
        keywords: ["behind the label", "education", "whiskycast"],
        targetAudience: "all",
        fullContent: `전 세계 위스키 애호가들의 필청 팟캐스트, 'WhiskyCast'의 인기 코너인 'Behind the Label'에서 다룬 흥미로운 주제들을 전해드립니다.

## 천사의 몫(Angel's Share)은 왜 발생하는가?
오크통 속에서 위스키가 증발하는 현상을 흔히 천사의 몫이라고 부릅니다. 하지만 왜 어떤 지역은 물이 더 많이 증발하고, 어떤 지역은 알코올이 더 많이 증발할까요? 이는 주변의 **상대 습도**에 달려 있습니다. 건조한 버번 창고에서는 물이 먼저 빠져나가 도수가 올라가고, 습한 스코틀랜드 창고에서는 알코올이 먼저 빠져나가 도수가 내려가는 신비로운 현상이 발생합니다.`
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
