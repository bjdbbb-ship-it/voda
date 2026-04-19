import { Whisky } from "./types";

export const globalWhiskies: Whisky[] = [
    {
        id: "g20", name: "Johnnie Walker Blue Label", type: "블렌디드 스카치", region: "스코틀랜드",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 2, sweet: 8, fruit: 7, spice: 5, body: 9 },
        description: "블렌딩 예술의 정점으로 불리며, 꿀, 부드러운 연기 향, 그리고 말린 과일의 풍미가 겹겹이 쌓인 극강의 부드러움을 선사합니다.",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/59416_source_1768236031.jpg?compression=lossy",
        tags: ["럭셔리", "희귀", "조니워커", "블루"],
availableDate: "2026-04-16"
    },
    {
        id: "g31", name: "Springbank 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 캠벨타운",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 4, sweet: 5, fruit: 6, spice: 6, body: 7 },
        description: "캠벨타운 특유의 독특한 캐릭터를 지닌 컬트 클래식 위스키로, 해안의 소금기, 오일리한 질감, 그리고 은은한 피트 향이 특징입니다.",
        tags: ["크래프트", "컴플렉스", "스프링뱅크"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/41962_source_1762937430.jpg?compression=lossy",
availableDate: "2026-04-16"
    },
    {
        id: "g48", name: "Kavalan Classic", type: "싱글 몰트", region: "대만",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 8, fruit: 9, spice: 4, body: 7 },
        description: "대만의 고온 다습한 기후에서 빠르게 숙성되어 망고, 배, 코코넛 등 강렬한 열대 과일의 풍미를 폭발적으로 뿜어냅니다.",
        tags: ["열대과일", "아열대", "카발란"],
        imageUrl: "https://www.bswliquor.com/cdn/shop/files/KavalanClassic-700.png?v=1753126249&width=416",
availableDate: "2026-04-16"
    },
    {
        id: "g21", name: "Jameson Irish Whiskey", type: "블렌디드", region: "아일랜드",
        basePrice: 35, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 7, fruit: 6, spice: 3, body: 5 },
        description: "전 세계적으로 가장 사랑받는 아이리시 위스키로, 세 번의 증류를 통해 극강의 부드러움과 편안한 접근성을 자랑합니다.",
        tags: ["부드러운", "라이트", "제임슨"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/256w/attribute_rule_images/31144_source_1770982890.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g26", name: "Bruichladdich Classic Laddie", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 6, fruit: 8, spice: 5, body: 7 },
        description: "피트를 사용하지 않은 아일라 몰트로, 보리의 순수함과 해안의 영향이 집중되어 꽃향기와 민트향이 감도는 신선한 프로필을 보여줍니다.",
        tags: ["논피티드", "아일라", "브룩라디"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/21642_source_1768680666.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g27", name: "Aberlour 12 Year Old", type: "싱글 몰트", region: "스코틀랜드 스페이사이드",
        basePrice: 60, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 6, body: 7 },
        description: "버번 캐스크와 셰리 캐스크에서 각각 숙성 후 매링되어 과일 향과 스파이시함이 완벽하게 균형을 이루는 클래식 스페이사이드 몰트입니다.",
        tags: ["더블캐스크", "부드러운", "아벨라워"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/31086_source_1771000845.jpg?compression=lossy",
        availableDate: "2026-04-17"
    },
    {
        id: "g28", name: "Glenmorangie 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 하이랜드",
        basePrice: 45, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 4, body: 6 },
        description: "'The Original'로 알려진 이 위스키는 섬세한 꽃향기와 시트러스 노트로 하이랜드 몰트의 표준을 제시합니다.",
        tags: ["플로럴", "시트러스", "글렌모란지"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/59636_source_1769621474.jpg?compression=lossy",
        availableDate: "2026-04-17"
    },
    {
        id: "g32", name: "Glenfarclas 12 Year Old", type: "싱글 몰트", region: "스코틀랜드 스페이사이드",
        basePrice: 55, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 7, body: 7 },
        description: "가족 경영 증류소에서 탄생한 셰리 오크의 걸작으로, 다크 과일과 향신료의 풍미가 입안 가득 풍성하게 펼쳐집니다.",
        tags: ["셰리", "패밀리", "글렌파클라스"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/55737_source_1769508693.jpg?compression=lossy",
        availableDate: "2026-04-17"
    },
    {
        id: "g36", name: "Nikka Coffey Grain", type: "그레인 위스키", region: "일본",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 9, fruit: 5, spice: 4, body: 7 },
        description: "코피 스틸에서 증류된 독특한 일본 그레인 위스키로, 바닐라 향과 함께 버번과 유사한 달콤하고 부드러운 풍미를 제공합니다.",
        tags: ["달콤한", "버번스타일", "니카"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/29642_source_1771623048.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g39", name: "Knob Creek 9 Year", type: "버번", region: "미국 켄터키",
        basePrice: 40, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 8, fruit: 4, spice: 7, body: 8 },
        description: "금주법 이전 스타일을 계승한 버번으로, 높은 호밀 함량과 긴 숙성 기간을 통해 강렬하고 대담한 오크와 스파이스 풍미를 선사합니다.",
        tags: ["풀바디", "오크", "놉크릭", "버번"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31280_source_1771582251.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g40", name: "Wild Turkey 101", type: "버번", region: "미국 켄터키",
        basePrice: 35, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 7, fruit: 3, spice: 9, body: 8 },
        description: "강력한 스파이스와 풍부한 카라멜 노트로 유명한 상징적인 고도수 버번으로, 니트나 칵테일 모두에 완벽합니다.",
        tags: ["스파이시", "고도수", "와일드터키", "버번"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31288_source_1770985848.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g41", name: "Maker's Mark", type: "버번", region: "미국 켄터키",
        basePrice: 35, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 9, fruit: 4, spice: 3, body: 6 },
        description: "호밀 대신 겨울 밀을 사용하여 일반적인 버번보다 훨씬 부드럽고 달콤한 풍미를 지닌 프리미엄 위티드 버번입니다.",
        tags: ["위티드", "부드러운", "메이커스마크", "버번"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31271_source_1770811280.jpg?compression=lossy",
availableDate: "2026-04-17"
    },
    {
        id: "g43", name: "Jack Daniel's No. 7", type: "테네시 위스키", region: "미국 테네시",
        basePrice: 30, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 8, fruit: 5, spice: 4, body: 6 },
        description: "전 세계 판매 1위 위스키로, 숯 여과 과정을 거쳐 메이플과 바나나 향이 감도는 독특하고 부드러운 캐릭터를 완성했습니다.",
        tags: ["아이코닉", "차콜", "잭다니엘"],
        imageUrl: "https://www.masterofmalt.com/blog/wp-content/uploads/2019/06/JD2.jpg",
availableDate: "2026-04-17"
    },
    {
        id: "g45", name: "Tullamore D.E.W.", type: "블렌디드", region: "아일랜드",
        basePrice: 30, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 7, fruit: 7, spice: 3, body: 5 },
        description: "세 가지 원액을 블렌딩한 전설적인 아이리시 위스키로, 풋사과 향과 함께 부드러운 복합미를 제공합니다.",
        tags: ["트리플디스틸드", "부드러운", "툴라모어"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31167_source_1771259474.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g47", name: "Teeling Small Batch", type: "블렌디드", region: "아일랜드",
        basePrice: 40, currency: "USD", priceRange: "budget",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 5, body: 6 },
        description: "럼 캐스크에서 피니시하여 열대 과일의 달콤함과 바닐라 향이 한 층 더해진 혁신적인 스타일의 아이리시 블렌드입니다.",
        tags: ["럼캐스크", "달콤한", "틸링"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/39264_source_1771226467.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g52", name: "Arran 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 아란섬",
        basePrice: 60, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 6, fruit: 9, spice: 5, body: 6 },
        description: "아란섬의 순수한 캐릭터를 담은 생기 넘치는 아일랜드 몰트로, 시트러스와 과수원 과일의 신선한 풍미가 돋보입니다.",
        tags: ["시트러스", "논피티드", "아란"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/68557_source_1769713882.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g53", name: "Jura 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 쥬라섬",
        basePrice: 50, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 3, sweet: 7, fruit: 5, spice: 5, body: 6 },
        description: "하이랜드와 아일랜드 스타일의 조화로, 부드러운 셰리 영향력이 느껴지는 달콤함과 미세한 피트 연기가 특징입니다.",
        tags: ["스모크", "달콤한", "쥬라"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/12130_source_1771610491.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g54", name: "Highland Park 12 Year Old Viking Honour", type: "싱글 몰트", region: "스코틀랜드 오크니",
        basePrice: 55, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 5, sweet: 7, fruit: 6, spice: 6, body: 7 },
        description: "오크니 제도의 영혼을 담은 위스키로, 헤더 꿀의 달콤함과 은은한 향신료, 향기로운 피트 연기가 조화를 이룹니다.",
        tags: ["꿀", "스모크", "하일랜드파크"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/17319_source_1758883443.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g55", name: "Talisker 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 스카이섬",
        basePrice: 60, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 7, sweet: 3, fruit: 4, spice: 8, body: 8 },
        description: "스카이섬의 거친 바다를 닮은 걸작으로, 강력한 스모크 캐릭터와 특유의 후추 향, 소금기 넘치는 풍미가 압권입니다.",
        tags: ["매리타임", "페퍼", "탈리스커"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31517_source_1770831092.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g56", name: "Ardbeg 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 4, fruit: 5, spice: 7, body: 8 },
        description: "피트의 강력함을 자랑하면서도 그 이면에 숨겨진 섬세한 달콤함과 복합미를 훌륭하게 표현해낸 아일라의 강자입니다.",
        tags: ["스모크", "컴플렉스", "아드벡"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/33963_source_1770987835.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g57", name: "Laphroaig 10 Year Old", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 2, fruit: 3, spice: 5, body: 9 },
        description: "아일라 몰트 중 가장 약리적인 특징이 강하며, 해초, 요오드, 그리고 묵직한 피트 향으로 명성이 자자합니다.",
        tags: ["메디시널", "피트", "라프로익"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/products/25277/19593/2455_alt03__99004.1754563830.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g58", name: "Lagavulin 16 Year Old", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 9, sweet: 6, fruit: 5, spice: 7, body: 9 },
        description: "천천히 증류된 아일라의 클래식으로, 드라이하고 복합적인 스모크와 풍부한 셰리 노트가 어우러져 깊은 여운을 남깁니다.",
        tags: ["강렬한", "스모크", "라가불린"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31899_source_1771517444.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g59", name: "Caol Ila 12 Year Old", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 70, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 8, sweet: 4, fruit: 5, spice: 6, body: 7 },
        description: "정제되고 오일리한 아일라 몰트로, 무거운 약리적 느낌보다는 신선하고 우아한 스모크와 시트러스 향에 집중합니다.",
        tags: ["엘레강트스모크", "오일", "쿠일라"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/33542_source_1771172435.jpg?compression=lossy",
availableDate: "2026-04-18"
    },
    {
        id: "g60", name: "Bowmore 12 Year Old", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 55, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 6, sweet: 6, fruit: 5, spice: 5, body: 7 },
        description: "아름답게 균형 잡힌 아일라 위스키로, 미묘한 연기 향과 함께 다크 초콜릿, 시트러스 향이 조화롭게 어우러집니다.",
        tags: ["밸런스", "스모크", "보우모어"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/33666_source_1771510984.jpg?compression=lossy",
availableDate: "2026-04-19"
    },
];
