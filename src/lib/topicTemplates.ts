// 위스키 콘텐츠 주제 템플릿
// Whisky Advocate, Master of Malt, WhiskyCast 등의 주제와 스타일을 참고하여 독창적인 관점으로 재해석

export interface TopicTemplate {
    category: string;
    title: string;
    subtitle: string;
    keywords: string[];
    targetAudience: 'beginner' | 'intermediate' | 'expert' | 'all';
}

export const topicTemplates: TopicTemplate[] = [
    // 트렌드 & 혁신
    {
        category: "트렌드",
        title: "마이크로블렌딩의 시대: 소규모 배치가 만드는 큰 변화",
        subtitle: "대량 생산에서 벗어나 개성을 찾는 위스키 업계의 새로운 흐름",
        keywords: ["microblend", "craft", "small batch", "innovation"],
        targetAudience: "intermediate"
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
        targetAudience: "beginner"
    },
    {
        category: "추천",
        title: "입문자를 위한 피트 위스키 로드맵",
        subtitle: "스모키한 맛의 세계로 안전하게 들어가는 법",
        keywords: ["peat", "smoky", "beginner", "guide"],
        targetAudience: "beginner"
    },
    {
        category: "추천",
        title: "셰리 캐스크 애호가를 위한 필수 위스키 10선",
        subtitle: "달콤하고 풍부한 셰리 오크의 매력에 빠져보세요",
        keywords: ["sherry cask", "sweet", "rich", "oak"],
        targetAudience: "intermediate"
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
        targetAudience: "all"
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
        targetAudience: "intermediate"
    },
    {
        category: "지역탐방",
        title: "일본 위스키의 부상: 전통과 혁신의 조화",
        subtitle: "야마자키에서 치치부까지, 일본 위스키의 현재와 미래",
        keywords: ["japanese whisky", "yamazaki", "innovation"],
        targetAudience: "all"
    },
    {
        category: "지역탐방",
        title: "대만과 인도: 신흥 위스키 강국의 도전",
        subtitle: "고온 다습한 기후가 만드는 독특한 풍미",
        keywords: ["taiwan", "india", "tropical", "emerging"],
        targetAudience: "expert"
    },

    // 역사 & 스토리
    {
        category: "역사",
        title: "금주령이 만든 위스키의 역사",
        subtitle: "미국 금주령이 위스키 산업에 미친 영향",
        keywords: ["prohibition", "history", "america", "bourbon"],
        targetAudience: "all"
    },
    {
        category: "역사",
        title: "싱글 몰트의 탄생: 글렌피딕이 시작한 혁명",
        subtitle: "블렌디드 위스키 시대를 끝낸 한 병의 위스키",
        keywords: ["single malt", "glenfiddich", "history", "revolution"],
        targetAudience: "intermediate"
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
        targetAudience: "beginner"
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
        targetAudience: "intermediate"
    },

    // 계절 & 특별 주제
    {
        category: "계절",
        title: "여름밤을 위한 상쾌한 위스키 칵테일 5선",
        subtitle: "더위를 식혀주는 시원하고 청량한 레시피",
        keywords: ["summer", "cocktail", "refreshing", "seasonal"],
        targetAudience: "all"
    },
    {
        category: "계절",
        title: "겨울 저녁, 벽난로 앞에서 즐기는 위스키",
        subtitle: "추운 날씨에 어울리는 묵직하고 따뜻한 위스키",
        keywords: ["winter", "cozy", "rich", "seasonal"],
        targetAudience: "all"
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
        targetAudience: "all"
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
