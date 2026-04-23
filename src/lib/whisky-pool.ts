import { Whisky } from "./types";

export const whiskyPool: Partial<Whisky>[] = [
    // p6(Aberlour A'bunadh), p8(The Balvenie 14 Caribbean Cask), 
    // p11(Hibiki 21), p16(Michter's), p32(Ballantine's 30) 은 data.ts에 이미 존재하므로Pool에서 제거함.

    // --- Islay (Peaty) ---
    {
        id: "p1", name: "Lagavulin 12 Year Old Special Release", type: "싱글 몰트", region: "아일라",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 9, sweet: 4, fruit: 6, spice: 7, body: 8 },
        description: "아일라 위스키의 정수를 담은 스페셜 릴리즈로, 강력한 스모키함과 정교한 시트러스 풍미가 완벽한 조화를 이룹니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "green" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/9685_source_1761907260.jpg?compression=lossy",
availableDate: "2026-04-19",
        tags: ["아일라", "스페셜릴리즈", "스모크"],
        popularity: 88,
        rating: 4.7
    },
    {
        id: "p2", name: "Ardbeg Corryvreckan", type: "싱글 몰트", region: "아일라",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 10, sweet: 5, fruit: 4, spice: 8, body: 9 },
        description: "소용돌이치는 듯한 강렬한 피트 향과 다크 초콜렛, 스파이시한 풍미가 어우러진 깊고 묵직한 아일라 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/68170_source_1770627759.jpg?compression=lossy",
availableDate: "2026-04-18",
        tags: ["아일라", "피트몬스터", "강렬한"],
        popularity: 85,
        rating: 4.8
    },
    {
        id: "p3", name: "Laphroaig Quarter Cask", type: "싱글 몰트", region: "아일라",
        basePrice: 60, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 3, fruit: 4, spice: 6, body: 8 },
        description: "작은 캐스크를 사용하여 숙성 속도를 높임으로써 더 깊은 오크 풍미와 라프로익 특유의 강렬한 피트 연기를 극대화했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "green" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/256w/attribute_rule_images/9256_source_1761906663.jpg?compression=lossy",
availableDate: "2026-04-18",
        tags: ["아일라", "피트", "오크"]
    },
    {
        id: "p4", name: "Bowmore 15 Year Old", type: "싱글 몰트", region: "아일라",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 6, sweet: 7, fruit: 6, spice: 5, body: 7 },
        description: "셰리 캐스크 피니시를 통해 얻은 달콤한 초콜릿 향과 아일라 특유의 은은한 연기 향이 아름답게 균형을 이룹니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/18099_source_1761912662.jpg?compression=lossy",
availableDate: "2026-04-18",
        tags: ["아일라", "셰리", "밸런스"]
    },
    {
        id: "p5", name: "Caol Ila Moch", type: "싱글 몰트", region: "아일라",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 7, sweet: 5, fruit: 7, spice: 5, body: 6 },
        description: "'새벽'이라는 뜻의 가볍고 상쾌한 스타일로, 섬세한 연기 향과 레몬 같은 시트러스함이 어우러진 우아한 아일라 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "brown" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/74930_source_1770726052.jpg?compression=lossy",
availableDate: "2026-04-19",
        tags: ["아일라", "우아한", "연은은한피트"]
    },
    // --- Speyside / Highland (Sherry/Sweet) ---
    {
        id: "p7", name: "GlenDronach 15 Year Old Revival", type: "싱글 몰트", region: "하이랜드",
        basePrice: 100, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 6, body: 8 },
        description: "셰리 몬스터의 귀환으로 알려진 이 제품은 풍부한 다크 과일과 초콜릿, 견과류의 복합적인 조화가 일품입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "brown" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/9099_source_1758883760.jpg?compression=lossy",
availableDate: "2026-04-19",
        tags: ["셰리몬스터", "풍부한", "스페이사이드"]
    },
    {
        id: "p9", name: "Glenmorangie 18 Year Old", type: "싱글 몰트", region: "하이랜드",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 4, body: 7 },
        description: "섬세하고 부드러운 고숙성 하이랜드 몰트로, 꽃향기와 바닐라, 그리고 실크처럼 매끄러운 질감을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/32958_source_1766962850.jpg?compression=lossy",
availableDate: "2026-04-19",
        tags: ["부드러운", "플로럴", "하이랜드"]
    },
    {
        id: "p10", name: "Dalmore King Alexander III", type: "싱글 몰트", region: "하이랜드",
        basePrice: 280, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 7, body: 9 },
        description: "6가지 다른 캐스크에서 숙성된 원액을 블렌딩하여 베리, 향신료, 와인의 복합적인 풍미가 겹겹이 쌓인 럭셔리한 경험을 선사합니다.",
        visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" },
        imageUrl: "https://cdn.shopify.com/s/files/1/0099/0045/8042/products/Studio_Project-2022-05-25T130746.479.jpg?v=1653509284",
availableDate: "2026-04-19",
        tags: ["럭셔리", "멀티캐스크", "복합미"]
    },
    // --- Japanese (Faceted/Elegant) ---
    {
        id: "p12", name: "Yamazaki 18 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 1500, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 1, sweet: 8, fruit: 8, spice: 6, body: 9 },
        description: "일본 위스키의 자존심이라 불리는 명작으로, 깊은 셰리 풍미와 정교한 산달우드 향이 어우러진 극강의 밸런스를 보여줍니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/products/24686/18955/2712__93022.1763242255.jpg?compression=lossy",
        tags: ["일본위스키", "럭셔리", "밸런스"],
        popularity: 97,
        rating: 4.9
    },
    {
        id: "p13", name: "Hakushu 18 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 1300, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 3, sweet: 6, fruit: 7, spice: 5, body: 8 },
        description: "일본의 숲 속 증류소에서 탄생한 위스키로, 상쾌한 허브 향과 은은한 연기 향이 숲의 맑은 정취를 느끼게 합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/products/24951/19197/Hakushu-18Yr-Bottle-solo__04959.1763139659.jpg?compression=lossy",
        tags: ["일본위스키", "숲의향기", "상쾌한"],
        popularity: 95,
        rating: 4.8
    },
    // --- Bourbon (Square/Stout) ---
    {
        id: "p14", name: "Old Rip Van Winkle 10 Year", type: "버번", region: "미국 켄터키",
        basePrice: 1000, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 5, spice: 7, body: 8 },
        description: "전설적인 밴 윙클 가문의 버번 프로젝트로, 풍부한 카라멜과 오크 풍미가 일품인 수집가들의 로망입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/29325_source_1758883039.jpg?compression=lossy",
        tags: ["버번", "희귀", "희소가치"]
    },
    {
        id: "p15", name: "Pappy Van Winkle 23 Year", type: "버번", region: "미국 켄터키",
        basePrice: 5000, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 8, body: 10 },
        description: "세계 최정상급 버번 위스키로, 믿을 수 없을 만큼 깊고 복합적인 오크와 바닐라, 스파이스의 정수를 보여주는 전설적인 병입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/23473_source_1758882751.jpg?compression=lossy",
        tags: ["버번", "전설적인", "울트라프리미엄"],
        popularity: 99,
        rating: 5.0
    },
    {
        id: "p17", name: "E.H. Taylor Small Batch", type: "버번", region: "미국 켄터키",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 5, spice: 7, body: 7 },
        description: "켄터키 버번의 전통을 계승한 스몰 배치로, 부드러운 카라멜과 호밀의 스파이시함이 조화로운 클래식 버번입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/64148_source_1759399269.jpg?compression=lossy",
        tags: ["버번", "스몰배치", "전통적인"]
    },
    // --- More Varieties ---
    {
        id: "p18", name: "Port Charlotte OLC:01", type: "싱글 몰트", region: "아일라",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 9, sweet: 7, fruit: 8, spice: 6, body: 8 },
        description: "피트함과 올로로소 셰리 캐스크의 달콤함이 만나 강렬하면서도 과일향이 풍부한 아일라 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "brown" },
availableDate: "2026-04-20",
        imageUrl: "https://drinkhacker.com/wp-content/uploads/2020/06/PortCharlotte_OLC01.png",
        tags: ["아일라", "헤비피티드", "셰리"]
    },
    {
        id: "p19", name: "Octomore 14.1", type: "싱글 몰트", region: "아일라",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 10, sweet: 5, fruit: 6, spice: 7, body: 9 },
        description: "세계에서 가장 강력한 피트 수치를 자랑하면서도, 그 속에 숨겨진 섬세한 곡물의 달콤함과 바닐라 향이 놀라운 반전을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/37811_source_1758884925.jpg?compression=lossy",
        tags: ["아일라", "슈퍼헤비피티드", "복합미"]
    },
    {
        id: "p20", name: "Springbank 15 Year Old", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 160, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 4, sweet: 7, fruit: 6, spice: 6, body: 8 },
        description: "전통적인 생산 방식을 고집하는 스프링뱅크의 핵심 라인업으로, 셰리 캐스크의 풍성함과 특유의 기름진 질감이 조화롭습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31500_source_1763550039.jpg?compression=lossy",
        tags: ["캠벨타운", "수제위스키", "셰리"]
    },
    {
        id: "p21", name: "Longrow Peated", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 8, sweet: 4, fruit: 5, spice: 7, body: 8 },
        description: "스프링뱅크 증류소에서 생산하는 강력한 피트 위스키로, 묵직한 연기 향과 해안의 짠맛이 느껴지는 남성적인 캐릭터를 가집니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/34081_source_1769785292.jpg?compression=lossy",
        tags: ["캠벨타운", "피티드", "강렬한"]
    },
    {
        id: "p22", name: "Kilkerran 12 Year Old", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 3, sweet: 6, fruit: 7, spice: 5, body: 6 },
        description: "캠벨타운의 새로운 강자로, 라이트한 피트와 시트러스, 소금 기운이 어우러진 현대적인 캠벨타운 스타일을 보여줍니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/59640_source_1762963836.jpg?compression=lossy",
        tags: ["캠벨타운", "모던", "은은한피트"]
    },
    {
        id: "p23", name: "Glenfarclas 25 Year Old", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 7, body: 9 },
        description: "고숙성 셰리 위스키의 기준석과 같은 존재로, 커피, 다크 초콜릿, 잘 익은 과일의 풍미가 웅장하게 펼쳐집니다.",
        visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-20",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/33300_source_1759914650.jpg?compression=lossy",
        tags: ["스페이사이드", "셰리", "고숙성"]
    },
    {
        id: "p24", name: "Glengoyne 21 Year Old", type: "싱글 몰트", region: "하이랜드",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 6, body: 8 },
        description: "피트를 전혀 사용하지 않고 천천히 건조시킨 보리로 빚어낸 위스키로, 순수한 셰리 오크의 달콤함과 시나몬의 따뜻함을 전합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
availableDate: "2026-04-22",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/33044_source_1770985254.jpg?compression=lossy",
        tags: ["하이랜드", "논피티드", "셰리"]
    },
    {
        id: "p25", name: "Macallan 18 Year Old Sherry Oak", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 450, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 8 },
        description: "셰리 숙성 위스키의 왕으로 불리며, 말린 과일과 생강, 바닐라의 풍미가 예술적인 조화를 이루는 명작입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
availableDate: "2026-04-22",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/31675_source_1761926476.jpg?compression=lossy",
        tags: ["스페이사이드", "아이코닉", "셰리"],
        popularity: 98,
        rating: 4.8
    },
    {
        id: "p26", name: "Talisker 18 Year Old", type: "싱글 몰트", region: "아일랜드",
        basePrice: 180, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 6, sweet: 5, fruit: 7, spice: 8, body: 8 },
        description: "탈리스커 특유의 후추향과 소금 기운에 고숙성에서 오는 풍부한 과일향과 시트러스함이 더해진 완성도 높은 드람입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-22",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/30762_source_1768875690.jpg?compression=lossy",
        tags: ["스카이섬", "수상작", "복합미"]
    },
    {
        id: "p27", name: "Highland Park 18 Year Old", type: "싱글 몰트", region: "아일랜드",
        basePrice: 160, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 5, sweet: 8, fruit: 7, spice: 6, body: 8 },
        description: "향기로운 연기 향과 달콤한 헤더 꿀의 조화가 정점에 달한 하일랜드 파크의 정수와 같은 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/products/14161/9504/65860_alt2__54612.1758585664.jpg?compression=lossy",
        tags: ["오크니", "꿀", "스모크"]
    },
    {
        id: "p28", name: "Glenmorangie Signet", type: "싱글 몰트", region: "하이랜드",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 7, body: 9 },
        description: "초콜릿 몰트를 사용하여 구운 커피와 다크 초콜릿의 혁신적인 풍미를 창조해낸 프리미엄 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "opaque" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/32985_source_1770998452.jpg?compression=lossy",
        tags: ["하이랜드", "초콜릿몰트", "혁신"]
    },
    {
        id: "p29", name: "Oban Little Bay", type: "싱글 몰트", region: "하이랜드",
        basePrice: 80, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 4, sweet: 7, fruit: 6, spice: 5, body: 7 },
        description: "리필과 셰리 캐스크의 원액을 작은 오크통에서 매링하여 더 농축된 풍미와 부드러운 해안의 느낌을 강조했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/23368_source_1771086060.jpg?compression=lossy",
        tags: ["하이랜드", "해안가", "스몰캐스크"]
    },
    {
        id: "p30", name: "Royal Salute 21 Year Old Richard Quinn Edition", type: "블렌디드", region: "스코틀랜드",
        basePrice: 200, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 1, sweet: 8, fruit: 8, spice: 4, body: 8 },
        description: "예술적인 병 디자인만큼이나 화려하고 플로럴한 향과 잘 익은 배의 풍미가 일품인 럭셔리 블렌드입니다.",
        visualProfile: { bottleShape: "ceramic", liquidColor: "amber", glassColor: "opaque" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/66962_source_1761567638.jpg?compression=lossy",
        tags: ["럭셔리", "패션", "부드러운"],
        popularity: 96,
        rating: 4.7
    },
    {
        id: "p31", name: "Chivas Regal Ultis", type: "블렌디드 몰트", region: "스코틀랜드",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 8 },
        description: "시바스 리갈 역사상 최초의 블렌디드 몰트로, 5가지 상징적인 싱글 몰트를 섞어 풍부한 복합성을 극대화했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/18654_source_1758883408.jpg?compression=lossy",
        tags: ["블렌디드몰트", "프리미엄", "풍부한"]
    },
    {
        id: "p33", name: "Compass Box The Peat Monster", type: "블렌디드 몰트", region: "스코틀랜드",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 4, fruit: 5, spice: 6, body: 7 },
        description: "독립 병입자의 창의성이 돋보이는 블렌드로, 여러 증류소의 피트 원액을 섞어 말 그대로 괴물 같은 강렬한 스모키함을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "clear" },
availableDate: "2026-04-17",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/256w/attribute_rule_images/33495_source_1771512043.jpg?compression=lossy",
        tags: ["블렌디드몰트", "스모크", "피트몬스터"]
    },
    {
        id: "p34", name: "Nikka Yoichi 10 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 5, sweet: 6, fruit: 6, spice: 5, body: 8 },
        description: "석탄 직화 증류 방식을 고집하는 요이치 증류소의 특징인 묵직한 바디감과 섬세한 연기 향이 돋보이는 일본 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
availableDate: "2026-04-17",
        imageUrl: "https://img.thewhiskyexchange.com/540/japan_yoi1.jpg",
        tags: ["일본위스키", "석탄증류", "풍부한"]
    },
    {
        id: "p35", name: "Kavalan Solist Vinho Barrique", type: "싱글 몰트", region: "대만",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 9, spice: 7, body: 9 },
        description: "와인 캐스크 숙성을 통해 폭발적인 열대 과일 향과 다크 초콜릿, 바닐라의 풍미를 담아낸 대만의 세계적인 명작입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/26884_source_1758883117.jpg?compression=lossy",
        tags: ["대만위스키", "수상작", "와인캐스크"]
    },
    {
        id: "p36", name: "Amrut Intermediate Sherry", type: "싱글 몰트", region: "인도",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 9, fruit: 7, spice: 7, body: 8 },
        description: "인도의 열대 기후에서 숙성되어 풍미가 매우 진하며, 셰리 캐스크의 견과류와 과일 향이 강력하게 느껴지는 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
availableDate: "2026-04-19",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/18579_source_1758882785.jpg?compression=lossy",
        tags: ["인도위스키", "열대숙성", "셰리"]
    },
    // --- 2026 February New Releases ---
    // --- 2026 February New Releases ---
    {
        id: "n2602-1", name: "Hibiki Harmony (2026 Edition)", type: "블렌디드 위스키", region: "일본",
        basePrice: 95, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 4, body: 7 },
        description: "2026년 2월의 위스키로 선정된 히비키 하모니의 최신 에디션으로, 일본 위스키 특유의 정교한 블렌딩과 화사한 꽃향기, 잘 익은 과일의 풍미가 예술적인 조화를 이룹니다.",
        tags: ["일본위스키", "산토리", "수상작"],
        imageUrl: "https://www.thewhiskyexchange.com/media/rtwe/uploads/featurecore/panels/1728_f2e10b26ccdf4e36866d211d4ff19667.jpg?v=638832569158400000",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-2", name: "Torabhaig 2018 Scottish Oak Single Cask", type: "싱글 몰트", region: "스코틀랜드 스카이섬",
        basePrice: 130, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 7, sweet: 5, fruit: 5, spice: 8, body: 8 },
        description: "스코티시 오크 싱글 캐스크 숙성을 통해 정통적인 스카이 섬의 피트함에 강력하고 거친 오크 향이 더해진 희소성 높은 싱글 몰트입니다.",
        tags: ["스카이섬", "싱글캐스크", "스코티시오크"],
        imageUrl: "https://www.thewhiskyexchange.com/media/rtwe/uploads/featurecore/panels/3696_02cf991887174fe0a8f3492f0b7e1fef.jpg?v=639032077938300000",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-3", name: "Highland Park Heather Cask Strength", type: "싱글 몰트", region: "스코틀랜드 아일랜드",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 6, sweet: 7, fruit: 5, spice: 7, body: 9 },
        description: "하일랜드 파크의 새로운 캐스크 스트랭스 시리즈의 첫 번째 출시작으로, 오크니 제도의 헤더 꿀 향과 강력한 피트 연기가 물을 타지 않은 원액 그대로 전달됩니다.",
        tags: ["캐스크스트랭스", "꿀", "스모크"],
        imageUrl: "https://www.thewhiskyexchange.com/media/rtwe/uploads/featurecore/panels/3697_7085f9b5f1e1452b9c36f3ceee43e6e5.jpg?v=639039216557600000",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-4", name: "Lochlea 7 Year Old Single Estate", type: "싱글 몰트", region: "스코틀랜드 로우랜드",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 5, body: 6 },
        description: "로클리 증류소의 첫 번째 연산 표기 제품으로, 직접 재배한 보리만을 사용하여 만든 로우랜드 스타일 특유의 신선하고 과일향 풍부한 캐릭터를 자랑합니다.",
        tags: ["싱글에스테이트", "로우랜드", "신선한"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/65478_source_1771086061.jpg?compression=lossy",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-5", name: "Compass Box Hedonism 2026", type: "블렌디드 그레인", region: "스코틀랜드",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 4, body: 8 },
        description: "30년 숙성 스트래스클라이드 그레인 원액을 포함한 컴파스 박스의 전설적인 그레인 위스키 시리즈로, 벨벳 같은 부드러움과 달콤한 바닐라, 코코넛의 풍미가 압권입니다.",
        tags: ["그레인위스키", "럭셔리", "부드러운"],
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/75046_source_1771851668.jpg?compression=lossy",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-6", name: "Ardbeg 10 Year Old Cask Strength (Committee 릴리즈)", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 10, sweet: 4, fruit: 5, spice: 9, body: 10 },
        description: "아드벡 커미티 멤버를 위해 한정 출시된 10년 숙성 캐스크 스트랭스 버전으로, 전형적인 아드벡의 연기 폭탄 뒤에 숨겨진 강력한 향신료의 힘을 느낄 수 있습니다.",
        tags: ["커미티릴리즈", "캐스크스트랭스", "아일라"],
        imageUrl: "https://img.thewhiskyexchange.com/540/abgob.10yov4.jpg",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-7", name: "Elijah Craig Barrel Proof Rye Batch A126", type: "라이 위스키", region: "미국 켄터키",
        basePrice: 80, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 6, fruit: 4, spice: 10, body: 9 },
        description: "11년 11개월 숙성된 고숙성 라이 위스키로, 60.2도의 높은 도수에서 뿜어져 나오는 강력한 호밀의 스파이스와 오크의 대담함을 가감 없이 보여줍니다.",
        tags: ["배럴프루프", "라이위스키", "대담한"],
        imageUrl: "https://dewinespot.co/cdn/shop/files/ElijahCraigBarrelProofRyeBatchA126_1024x1024_33505925-9db1-4482-aa30-3f12805da1a5.jpg?v=1771455498&width=1214",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-8", name: "13th Colony 113 Maple Bourbon", type: "버번", region: "미국 조지아",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 10, fruit: 4, spice: 6, body: 8 },
        description: "메이플 나무 스파이럴을 사용하여 숙성한 독특한 공법의 버번으로, 풍부한 단풍나무 시럽의 달콤함과 버번 특유의 옥수수 단맛이 조화로운 디저트 같은 위스키입니다.",
        tags: ["메이플피니시", "버번", "달콤한"],
        imageUrl: "https://seelbachs.com/cdn/shop/files/13thColonyDistillery113BourbonFinishedWithMapleWoodSpirals.jpg?format=webp&height=1200&v=1771515787",
availableDate: "2026-04-19"
    },
    {
        id: "n2602-9", name: "Kavalan Triple Sherry Cask (Golden Steed)", type: "싱글 몰트", region: "대만",
        basePrice: 180, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 10, fruit: 9, spice: 7, body: 9 },
        description: "올로로소, 페드로 히메네즈, 모스카텔 셰리 캐스크를 모두 사용한 트리플 셰리 숙성작으로, 다크 과일의 풍성함과 견과류의 고소함이 폭발적으로 느껴집니다.",
        tags: ["트리플셰리", "대만위스키", "풍부한"],
        imageUrl: "https://mma.prnewswire.com/media/2861672/260115_Kavalan_Golden_Steed___Peonies.jpg?p=facebook",
availableDate: "2026-04-20"
    },
    {
        id: "n2602-10", name: "Godawan Triple Cask (Indian Single Malt)", type: "싱글 몰트", region: "인도",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 8, body: 8 },
        description: "인도에서 생산된 프리미엄 싱글 몰트로, 세 가지 캐스크 숙성을 통해 인도 위스키 특유의 열대 과일 향과 스파이시한 피니시를 세련되게 변주한 제품입니다.",
        tags: ["인도위스키", "트리플캐스크", "이국적인"],
        imageUrl: "https://thewhiskeywash.com/wp-content/uploads/2025/06/featured-image-1751029426.webp",
availableDate: "2026-04-20"
    },
    {
        id: "n1772524072392-2", name: "Kilchoman Loch Gorm (2025 Release) / 킬호만 록 곰 (2025 릴리즈)", type: "Single Malt", region: "Islay",
        basePrice: 115, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 9, "sweet": 7, "fruit": 6, "spice": 5, "body": 8 },
        description: "올로로소 셰리 버트에서 숙성된 킬호만의 연례 리미티드 에디션입니다. 이슬레이 특유의 강렬한 피트 연기와 셰리 캐스크가 선사하는 짙은 건과일, 다크 초콜릿의 풍미가 완벽한 대조를 이룹니다. 해수면의 짠 내음과 달콤한 향신료의 여운이 길게 이어지는 명작입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/isly_kil15.jpg",
availableDate: "2026-04-20",
        tags: ["Sherry Cask", "Peated", "Kilchoman"]
    },
    {
        id: "n1772524072392-3", name: "Adelphi Benrinnes 14 Year Old / 아델피 벤리네스 14년", type: "Single Malt", region: "Speyside",
        basePrice: 125, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 6, "fruit": 8, "spice": 4, "body": 7 },
        description: "독립 병입자의 명가 아델피가 엄선한 벤리네스 14년은 이 증류소 특유의 묵직하고 고기 같은(meaty) 질감을 잘 보존하고 있습니다. 잘 익은 사과와 서양배의 과실향에 구운 아몬드의 고소함이 더해져 복합적인 구조감을 자랑합니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/brn_ade12.jpg",
availableDate: "2026-04-20",
        tags: ["Independent Bottler", "Speyside", "Adelphi"]
    },
    {
        id: "n1772524072392-4", name: "Lochlea Our Barley / 로클리 아워 발리", type: "Single Malt", region: "Lowlands",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 7, "spice": 4, "body": 5 },
        description: "로버트 번스의 생가에서 직접 재배한 보리로 빚어낸 로클리의 코어 레인지입니다. 퍼스트 필 버번, STR, 셰리 캐스크를 조합하여 신선한 배, 자른 풀, 밀크 초콜릿의 노트를 겹겹이 쌓아 올렸습니다. 로우랜드 위스키의 새로운 미래를 보여주는 산뜻한 퍼포먼스가 인상적입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/low_loc1.jpg",
availableDate: "2026-04-20",
        tags: ["Farm Distillery", "Lowland", "Lochlea"]
    },
    {
        id: "n1772524072392-5", name: "The Lakes Whiskymaker's Reserve No.7 / 더 레이크스 위스키메이커스 리저브 No.7", type: "Single Malt", region: "England",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 8, "spice": 6, "body": 9 },
        description: "잉글랜드의 떠오르는 강자 더 레이크스 증류소의 시그니처 시리즈입니다. 셰리 캐스크 숙성에 집중한 이 제품은 농축된 당밀, 무화과, 오렌지 껍질의 풍미를 폭발적으로 전달합니다. 입안을 가득 채우는 풀 바디의 질감과 벨벳 같은 부드러움이 특징입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/eng_lak20.jpg",
availableDate: "2026-04-20",
        tags: ["English Whisky", "Sherry Led", "The Lakes"]
    },
    {
        id: "n1772524072392-6", name: "Adelphi Caol Ila 12 Year Old / 아델피 쿠일라 12년", type: "Single Malt", region: "Islay",
        basePrice: 130, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 8, "sweet": 4, "fruit": 5, "spice": 6, "body": 6 },
        description: "쿠일라 특유의 선명한 피트와 해수면의 짠맛을 아델피의 감각으로 재해석했습니다. 레몬 껍질의 시트러스함과 모닥불의 연기 향이 조화롭게 어우러지며, 냉각 여과를 거치지 않아 원액 그대로의 순수한 힘을 느낄 수 있습니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/isly_cao106.jpg",
availableDate: "2026-04-22",
        tags: ["Cask Strength", "Peated", "Adelphi"]
    },
    {
        id: "n1772524072392-7", name: "Arran 10 Year Old / 아란 10년", type: "Single Malt", region: "Islands",
        basePrice: 55, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 8, "spice": 4, "body": 5 },
        description: "아란 증류소의 정체성을 가장 잘 나타내는 클래식 싱글 몰트입니다. 신선한 시트러스 열대 과일의 향과 뒤따라오는 달콤한 바닐라, 비스킷의 풍미가 균형을 이룹니다. 인위적인 색소를 넣지 않은 자연 그대로의 황금빛과 산뜻한 끝맛이 매력적입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/isl_arr1.jpg",
availableDate: "2026-04-22",
        tags: ["Natural Colour", "Island Malt", "Arran"]
    },
    {
        id: "n1772524072392-8", name: "Glenfarclas 15 Year Old / 글렌파클라스 15년", type: "Single Malt", region: "Speyside",
        basePrice: 95, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 1, "sweet": 8, "fruit": 9, "spice": 5, "body": 8 },
        description: "46%의 도수로 병입되어 글렌파클라스 셰리 캐스크의 진수를 보여줍니다. 말린 과일의 달콤함과 견과류, 버터스카치의 복합적인 풍미가 층층이 쌓여 있으며, 특히 풍부한 질감과 긴 피니시가 클래식한 셰리 몰트의 정석을 제시합니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/brd_gfc5.jpg",
availableDate: "2026-04-22",
        tags: ["Family Owned", "Sherry Oak", "Glenfarclas"]
    },
    {
        id: "n1772524072392-9", name: "Springbank 10 Year Old / 스프링뱅크 10년", type: "Single Malt", region: "Campbeltown",
        basePrice: 90, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 4, "sweet": 6, "fruit": 6, "spice": 7, "body": 8 },
        description: "캠벨타운의 전통을 잇는 스프링뱅크의 핵심 제품입니다. 미묘한 피트와 해안가의 짠맛, 그리고 오일감이 느껴지는 독특한 질감이 특징입니다. 배와 바닐라의 풍미 뒤에 숨은 복합적인 향신료의 노트가 매 모금마다 새로운 즐거움을 줍니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/cmp_spr1.jpg",
availableDate: "2026-04-22",
        tags: ["Traditional", "Campbeltown", "Springbank"]
    },
    {
        id: "n1772524072392-10", name: "Bruichladdich The Classic Laddie / 브룩라디 더 클래식 라디", type: "Single Malt", region: "Islay",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 8, "spice": 3, "body": 6 },
        description: "피트를 사용하지 않은 이슬레이 몰트의 반전 매력을 보여줍니다. 100% 스코틀랜드산 보리를 사용하여 꽃향기와 신선한 사과, 잘 익은 보리의 순수한 달콤함을 담아냈습니다. 마스터 디스틸러의 장인 정신이 느껴지는 깨끗하고 선명한 풍미가 돋보입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/isly_bru1.jpg",
availableDate: "2026-04-22",
        tags: ["Unpeated Islay", "B Corp", "Bruichladdich"]
    },
    {
        id: "n1772524837659-2", name: "Kilchoman Loch Gorm 2025 / 킬호만 로흐 곰 2025", type: "Single Malt", region: "Islay",
        basePrice: 115, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 9, "sweet": 7, "fruit": 6, "spice": 6, "body": 8 },
        description: "올로로소 쉐리 캐스크에서 전 기간 숙성된 킬호만의 연간 한정판입니다. 아일라 특유의 강력한 피트 스모크와 쉐리 오크의 진한 건과일, 다크 초콜릿 풍미가 완벽한 대조를 이룹니다. 해조류의 짠맛과 달콤한 향신료의 여운이 길게 이어지는 명작입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/islay_kil120.jpg",
availableDate: "2026-04-22",
        tags: ["Islay", "Sherry Cask", "Kilchoman"]
    },
    {
        id: "n1772524837659-3", name: "GlenAllachie 15 Year Old / 글렌알라키 15년", type: "Single Malt", region: "Speyside",
        basePrice: 105, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 8, "spice": 7, "body": 8 },
        description: "마스터 디스틸러 빌리 워커의 철학이 담긴 쉐리 폭탄 위스키입니다. 페드로 히메네즈와 올로로소 쉐리 펀천 및 버트에서 숙성되어 압도적인 깊이감을 자랑합니다. 시나몬, 정향의 스파이스와 함께 꿀에 절인 건포도, 무화과의 풍부한 맛이 입안을 가득 채웁니다.",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/60644_source_1772106650.jpg?compression=lossy",
availableDate: "2026-04-22",
        tags: ["Speyside", "Sherry Bomb", "GlenAllachie"]
    },
    {
        id: "n1772524837659-4", name: "Redbreast 12 Year Old Cask Strength / 레드브레스트 12년 캐스크 스트렝스", type: "Single Pot Still", region: "Ireland",
        basePrice: 125, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 9, "spice": 8, "body": 9 },
        description: "아이리시 위스키의 정수라 불리는 싱글 포트 스틸 위스키로, 물을 섞지 않은 강력한 힘을 보여줍니다. 열대 과일의 화사함과 함께 구운 견과류, 풍부한 크림의 질감이 일품입니다. 숙성된 쉐리 캐스크에서 오는 깊은 스파이스가 복합적인 구조감을 완성합니다.",
        imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/attribute_rule_images/69917_source_1767366643.jpg?compression=lossy",
availableDate: "2026-04-17",
        tags: ["Irish", "Cask Strength", "Redbreast"]
    },
    {
        id: "n1772524837659-5", name: "Adelphi Breath of the Isles 2025 / 아델피 브레스 오브 디 아일즈 2025", type: "Single Malt", region: "Islands",
        basePrice: 145, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 6, "sweet": 5, "fruit": 6, "spice": 7, "body": 7 },
        description: "독립 병입자 아델피가 선별한 아일랜드 제도의 신비로운 풍미를 담았습니다. 갯내음 섞인 해안가의 피트 향과 야생화의 꿀맛이 조화로우며, 후추 같은 알싸함이 특징입니다. 특정 증류소를 밝히지 않아 상상력을 자극하는 최고급 싱글 몰트입니다.",
        imageUrl: "https://images.unsplash.com/photo-1516550893885-7935ab0c6ad9?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-17",
        tags: ["Independent Bottler", "Peated", "Adelphi"]
    },
    {
        id: "n1772524837659-6", name: "Lochlea 5 Year Old / 로클리 5년", type: "Single Malt", region: "Lowlands",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 8, "spice": 4, "body": 5 },
        description: "로우랜드의 새로운 강자로 떠오르는 로클리 증류소의 5주년 기념 릴리스입니다. 직접 재배한 보리를 사용하여 곡물 본연의 고소함과 신선한 사과, 배의 아로마가 돋보입니다. 짧은 숙성 기간에도 불구하고 놀라운 복합미와 부드러운 목넘김을 제공합니다.",
        imageUrl: "https://img.thewhiskyexchange.com/540/lolob.05yo.jpg",
availableDate: "2026-04-17",
        tags: ["Lowland", "Farm Distillery", "Lochlea"]
    },
    {
        id: "n1772524837659-8", name: "Glenfarclas 105 Cask Strength / 글렌파클라스 105 캐스크 스트렝스", type: "Single Malt", region: "Speyside",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 7, "spice": 9, "body": 9 },
        description: "60% ABV의 강력한 도수로 즐기는 클래식 스페이사이드 쉐리 위스키입니다. 글렌파클라스 가문의 자부심이 담긴 이 위스키는 사과와 배의 신선함 뒤에 숨겨진 묵직한 오크향과 스파이시한 피니시가 매력적입니다. 물 한 방울을 떨어뜨리면 숨겨진 달콤함이 피어납니다.",
        imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-18",
        tags: ["Speyside", "High Proof", "Glenfarclas"]
    },
    {
        id: "n1772524837659-9", name: "Ardnamurchan AD/04.22:02 / 아드나머칸 AD/04.22:02", type: "Single Malt", region: "Highlands",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 4, "sweet": 6, "fruit": 7, "spice": 5, "body": 7 },
        description: "지속 가능성을 추구하는 아드나머칸 증류소의 현대적 명작입니다. 피트와 논피트 원액을 정교하게 블렌딩하여 해안가의 바위, 바닷물, 모닥불 연기 같은 원초적인 풍미와 오렌지 오일의 상큼함을 동시에 담아냈습니다. 매우 깨끗하면서도 긴 여운을 남깁니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/high_ard2.jpg",
availableDate: "2026-04-18",
        tags: ["Highland", "Craft Distillery", "Ardnamurchan"]
    },
    // --- AI Generated New Releases ---
    {
        id: "n1772608606377-3", name: "Tamdhu 12 Year Old / 탐두 12년", type: "Single Malt Scotch Whisky", region: "Speyside",
        basePrice: 65, currency: "USD", priceRange: "budget",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 8, "spice": 5, "body": 6 },
        description: "100% 최상급 올로로소 쉐리 캐스크에서만 숙성된 스페이사이드의 숨은 보석입니다. 신선한 시나몬과 구운 견과류, 풍부한 베리류의 풍미가 층층이 쌓여 있으며, 쉐리 위스키 입문자와 애호가 모두를 만족시킬 수 있는 직관적인 달콤함을 선사합니다.",
        imageUrl: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-18",
        tags: ["Speyside", "OlorosoSherry", "Tamdhu"]
    },
    {
        id: "n1772608606377-4", name: "Seaweed & Aeons & Digging & Fire 10 Year Old / 씨위드 & 이언즈 & 디깅 & 파이어 10년", type: "Single Malt Scotch Whisky", region: "Islay",
        basePrice: 55, currency: "USD", priceRange: "budget",
        flavorProfile: { "peat": 9, "sweet": 5, "fruit": 4, "spice": 6, "body": 7 },
        description: "아일라 섬의 강렬한 피트 풍미를 현대적인 감각으로 재해석한 위스키입니다. 이름처럼 바닷바람의 짠맛과 짙은 연기 향이 특징이며, 25%의 원액을 쉐리 캐스크에서 숙성하여 거친 피트 뒤에 숨겨진 달콤한 반전을 제공합니다.",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-18",
        tags: ["Islay", "Peated", "IndieBottler"]
    },
    {
        id: "n1772608606377-5", name: "Arran Bodega Sherry Cask / 아란 보데가 쉐리 캐스크", type: "Single Malt Scotch Whisky", region: "Islands",
        basePrice: 80, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 9, "spice": 6, "body": 8 },
        description: "아란 증류소의 과일 향이 가득한 원액을 퍼스트 필 쉐리 호그스헤드에서 풀 숙성한 제품입니다. 55.8%의 높은 도수임에도 불구하고 무화과, 건포도, 체리의 농축된 풍미가 부드럽게 펼쳐지며 압도적인 구조감을 자랑합니다.",
        imageUrl: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-18",
        tags: ["Islands", "CaskStrength", "Arran"]
    },
    {
        id: "n1772608606377-6", name: "Redbreast Lustau Edition / 레드브레스트 루스토 에디션", type: "Single Pot Still Whiskey", region: "Ireland",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 8, "spice": 7, "body": 9 },
        description: "아일랜드의 전통적인 싱글 팟 스틸 위스키와 유명 쉐리 하우스인 'Bodegas Lustau'의 협업으로 탄생했습니다. 크리미한 질감과 함께 말린 과일, 구운 아몬드의 고소함이 특징이며, 일반적인 위스키보다 한층 깊은 복합미를 제공합니다.",
        imageUrl: "https://images.unsplash.com/photo-1574626003470-87f5b2d7085a?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-18",
        tags: ["Ireland", "PotStill", "Redbreast"]
    },
    {
        id: "n1772608606377-7", name: "Mortlach 12 Year Old / 모틀락 12년", type: "Single Malt Scotch Whisky", region: "Speyside",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 6, "fruit": 7, "spice": 7, "body": 9 },
        description: "'더 위 위치(The Wee Witchie)'라는 별칭으로 유명한 모틀락의 상징적인 엔트리 모델입니다. 2.81회 증류법을 통해 얻어진 묵직하고 고기 같은(Meaty) 육중한 바디감이 일품이며, 설탕에 절인 과일과 스파이시한 피니시가 훌륭합니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/speyside_mor2.jpg",
availableDate: "2026-04-18",
        tags: ["Speyside", "Meaty", "Mortlach"]
    },
    {
        id: "n1772608606377-8", name: "Glendronach 12 Year Old / 글렌드로낙 12년", type: "Single Malt Scotch Whisky", region: "Highland",
        basePrice: 70, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 9, "fruit": 8, "spice": 5, "body": 7 },
        description: "하이랜드 쉐리 위스키의 정석으로 불리는 제품입니다. 페드로 히메네즈와 올로로소 쉐리 캐스크의 정교한 조합을 통해 메이플 시럽, 자두, 오렌지 껍질의 풍부한 맛을 구현해냈으며, 입안을 감싸는 벨벳 같은 부드러움이 매력적입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/highland_gle46.jpg",
availableDate: "2026-04-21",
        tags: ["Highland", "SherryMonster", "Glendronach"]
    },
    {
        id: "n1772608606377-9", name: "Bunnahabhain 12 Year Old / 부나하벤 12년", type: "Single Malt Scotch Whisky", region: "Islay",
        basePrice: 68, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 2, "sweet": 7, "fruit": 7, "spice": 5, "body": 8 },
        description: "피트하지 않은 아일라 위스키의 진수를 보여줍니다. 해안가의 짠맛과 달콤한 쉐리, 신선한 견과류의 향이 어우러져 독특한 프로필을 형성하며, 냉각 여과를 하지 않아 풍부한 유질감과 깊은 풍미를 고스란히 간직하고 있습니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/islay_bun1.jpg",
availableDate: "2026-04-21",
        tags: ["Islay", "Unpeated", "Bunnahabhain"]
    },
    {
        id: "n1772608606377-10", name: "The Balvenie 14 Year Old Caribbean Cask / 발베니 14년 캐리비안 캐스크", type: "Single Malt Scotch Whisky", region: "Speyside",
        basePrice: 105, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 9, "fruit": 8, "spice": 4, "body": 7 },
        description: "전통적인 오크통에서 숙성된 원액을 직접 엄선한 럼 캐스크에서 피니시하여 이국적인 매력을 더했습니다. 발베니 특유의 꿀맛에 열대 과일의 화사함과 토피 사탕의 달콤함이 더해져 매우 부드럽고 긴 여운을 선사합니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/speyside_bal4.jpg",
availableDate: "2026-04-21",
        tags: ["Speyside", "RumFinish", "Balvenie"]
    },
    // --- AI Generated New Releases ---
    {
        id: "nw-1772610218814-2", name: "Aberargie Single Malt / 아베라기 싱글 몰트", type: "싱글 몰트", region: "로우랜드",
        basePrice: 78, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 6, "fruit": 7, "spice": 5, "body": 6 },
        description: "2026년 주목받는 신생 증류소의 첫 정규 릴리즈로, 보리의 순수한 풍미와 깨끗한 질감이 돋보입니다. 부드러운 과일 향과 함께 견과류의 고소함이 긴 여운을 남기는 로우랜드 스타일입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/aberargie-86886.jpg",
availableDate: "2026-04-21",
        tags: ["신생증류소", "로우랜드", "아베라기"]
    },
    {
        id: "nw-1772610218814-3", name: "Oxford Rye Whisky / 옥스퍼드 라이 위스키", type: "라이 위스키", region: "잉글랜드",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 0, "sweet": 5, "fruit": 4, "spice": 8, "body": 7 },
        description: "고대 품종의 호밀을 사용하여 복합적인 향신료와 호밀 특유의 알싸한 맛을 강조한 위스키입니다. 바닐라와 구운 빵의 풍미가 층층이 쌓여 깊고 진한 바디감을 선사합니다.",
        imageUrl: "https://images.unsplash.com/photo-1485872299827-72e3e58ebe92?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-21",
        tags: ["라이위스키", "잉글랜드", "옥스퍼드"]
    },
    {
        id: "nw-1772610218814-4", name: "Adelphi Glen Elgin 12 Year Old / 아델피 글렌 엘긴 12년", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 115, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 8, "spice": 3, "body": 6 },
        description: "독립 병입자 아델피가 엄선한 캐스크로, 글렌 엘긴 특유의 화사한 과일 향이 극대화되었습니다. 꿀과 잘 익은 사과의 달콤함이 입안을 부드럽게 감싸며 우아한 마무리를 보여줍니다.",
        imageUrl: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=1200",
availableDate: "2026-04-21",
        tags: ["독립병입", "스페이사이드", "아델피"]
    },
    {
        id: "nw-1772610218814-5", name: "Adelphi Linkwood 13 Year Old / 아델피 링크우드 13년", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 125, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 7, "fruit": 9, "spice": 2, "body": 5 },
        description: "신선한 꽃향기와 풀 내음이 어우러진 우아한 스타일의 위스키로 링크우드 증류소의 정수를 담았습니다. 가벼운 바디감 속에 숨겨진 복숭아와 살구의 섬세한 풍미가 매력적입니다.",
        imageUrl: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-21",
        tags: ["독립병입", "꽃향기", "링크우드"]
    },
    {
        id: "nw-1772610218814-6", name: "Adelphi Teaninich 14 Year Old / 아델피 티니닉 14년", type: "싱글 몰트", region: "하이랜드",
        basePrice: 135, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 6, "fruit": 6, "spice": 6, "body": 7 },
        description: "하이랜드의 강인한 캐릭터를 담고 있으며, 허브와 향신료의 복합적인 풍미가 돋보이는 제품입니다. 오크통에서 오는 바닐라와 약간의 왁시한 질감이 특징인 고숙련 병입 제품입니다.",
        imageUrl: "https://img.thewhiskyexchange.com/900/teanob.10yo.jpg",
        availableDate: "2026-04-23",
        tags: ["하이랜드", "왁시", "티니닉"]
    },
    {
        id: "nw-1772610218814-7", name: "Luss Distillery Single Malt / 러스 증류소 싱글 몰트", type: "싱글 몰트", region: "하이랜드",
        basePrice: 82, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 2, "sweet": 6, "fruit": 7, "spice": 4, "body": 6 },
        description: "로몬드 호수 인근의 새로운 증류소에서 생산된 위스키로, 깨끗하고 청량한 과일 향이 일품입니다. 미세한 피트감이 가미되어 복합적인 풍미와 함께 신선한 여운을 선사합니다.",
        imageUrl: "https://images.unsplash.com/photo-1564395340660-8fdf669bc042?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-23",
        tags: ["신생증류소", "하이랜드", "러스"]
    },
    {
        id: "nw-1772610218814-8", name: "Lerwick Distillery Single Malt / 러윅 증류소 싱글 몰트", type: "싱글 몰트", region: "아일랜드",
        basePrice: 98, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 5, "sweet": 4, "fruit": 5, "spice": 6, "body": 7 },
        description: "셰틀랜드 제도의 거친 해안가에서 숙성되어 짭조름한 바다 내음과 해초의 풍미가 특징입니다. 강렬한 향신료와 함께 스모키한 마무리가 인상적인 북단 증류소의 야심작입니다.",
        imageUrl: "https://static.whiskybase.com/storage/whiskies/2/6/3474/473010-big.jpg",
        availableDate: "2026-04-23",
        tags: ["셰틀랜드", "해안가위스키", "러윅"]
    },
    {
        id: "nw-1772610218814-9", name: "Struie Distillery Single Malt / 스트루이 증류소 싱글 몰트", type: "싱글 몰트", region: "하이랜드",
        basePrice: 88, currency: "USD", priceRange: "mid",
        flavorProfile: { "peat": 1, "sweet": 7, "fruit": 6, "spice": 5, "body": 6 },
        description: "전통적인 하이랜드 스타일을 현대적으로 재해석하여 매우 부드러운 질감을 자랑하는 위스키입니다. 카라멜과 구운 견과류의 풍미가 조화롭게 어우러져 누구나 즐기기 좋습니다.",
        imageUrl: "https://images.unsplash.com/photo-1564395340660-8fdf669bc042?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-23",
        tags: ["하이랜드", "부드러운", "스트루이"]
    },
    {
        id: "nw-1772610218814-10", name: "Adelphi Miltonduff 11 Year Old / 아델피 밀턴더프 11년", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 108, currency: "USD", priceRange: "premium",
        flavorProfile: { "peat": 0, "sweet": 8, "fruit": 7, "spice": 4, "body": 7 },
        description: "풍부한 몰트의 단맛과 함께 크리미한 질감이 돋보이는 스페이사이드의 숨은 보석 같은 위스키입니다. 밀크 초콜릿과 오렌지 껍질의 풍미가 겹겹이 쌓여 긴 여운을 남깁니다.",
        imageUrl: "https://static.whiskybase.com/storage/whiskies/2/3/7807/430134-big.jpg",
        availableDate: "2026-04-23",
        tags: ["스페이사이드", "크리미", "밀턴더프"]
    },
    {
        id: "nw-1773215127-1", name: "Glen Scotia Campbeltown Malts Festival 2026 Release (7 Year Old) / 글렌 스코시아 캠벨타운 몰트 페스티벌 2026 (7년)", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 7, sweet: 6, fruit: 7, spice: 5, body: 7 },
        description: "2026 캠벨타운 몰트 페스티벌을 위해 출시된 7년 숙성 피티드 싱글 몰트 위스키입니다. 루비 포트 캐스크에서 피니시를 거쳐 풍부한 과일 풍미와 스모키함이 조화를 이룹니다.",
        imageUrl: "https://images.unsplash.com/photo-1569158062925-dd2433efca28?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-23",
        tags: ["캠벨타운", "몰트페스티벌", "피티드"]
    },
    {
        id: "nw-1773215127-2", name: "Midleton Very Rare 2026 Vintage Release / 미들턴 베리 레어 2026 빈티지", type: "블렌디드 아이리시", region: "아일랜드",
        basePrice: 280, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 9 },
        description: "아이리시 위스키의 정점으로 불리는 미들턴 베리 레어의 2026년 빈티지입니다. 최상급 팟 스틸과 그레인 위스키의 블렌딩으로 실크처럼 부드러운 질감을 선사합니다.",
        imageUrl: "https://images.unsplash.com/photo-1568213816046-0ee1c4295581?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-23",
        tags: ["아이리시", "빈티지", "럭셔리"]
    },
    {
        id: "nw-1773215127-4", name: "Douglas Laing Scallywag 18 Year Old (2026 Edition) / 더글라스 랭 스캘리왜그 18년 (2026)", type: "블렌디드 몰트", region: "스페이사이드",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 8 },
        description: "스페이사이드 몰트를 블렌딩한 18년 숙성 2026년 에디션입니다. 셰리 숙성에서 오는 다크 초콜릿과 오렌지 필, 토스트한 호두의 깊은 풍미가 일품입니다.",
        imageUrl: "https://images.unsplash.com/photo-1485872299827-72e3e58ebe92?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["스페이사이드", "셰리숙성", "고숙성"]
    },
    {
        id: "nw-1773215127-5", name: "Teeling Wonders of Wood Series 4: Virgin Carpathian Oak / 틸링 원더즈 오브 우드 4: 카르파티아 오크", type: "싱글 팟 스틸", region: "아일랜드",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 7, fruit: 7, spice: 7, body: 7 },
        description: "틸링의 'Wonders of Wood' 네 번째 시리즈로, 희귀한 카르파티아 오크에서 숙성되었습니다. 로즈워터와 샌달우드의 독특한 향이 매력적인 아이리시 위스키입니다.",
        imageUrl: "https://teelingwhiskey.com/wonders-of-wood-carpathian-oak",
        availableDate: "2026-04-20",
        tags: ["아이리시", "유니크오크", "틸링"]
    },
    {
        id: "nw-1773215127-6", name: "Barrell Black Label 18 Year Whiskey / 배럴 블랙 라벨 18년", type: "블렌디드 위스키", region: "미국 & 캐나다",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 7, body: 9 },
        description: "18년 숙성된 켄터키 버번과 캐나디안 위스키를 블렌딩하여 카베르네 소비뇽과 소테른 캐스크에서 피니시한 복합적인 위스키입니다.",
        imageUrl: "https://images.unsplash.com/photo-1516550893885-7935ab0c6ad9?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["블렌디드", "고숙성", "와인피니시"]
    },
    {
        id: "nw-1773215127-7", name: "Three Ridings English Single Malt (Inaugural Release) / 쓰리 라이딩스 잉글리시 싱글 몰트", type: "싱글 몰트", region: "잉글랜드",
        basePrice: 650, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 7, fruit: 7, spice: 5, body: 6 },
        description: "잉글랜드 요크셔 지역의 Ellers Farm 증류소 첫 번째 정식 릴리즈입니다. 지역의 특색을 담은 역사적인 첫 번째 빈티지로 소장 가치가 높습니다.",
        imageUrl: "https://images.unsplash.com/photo-1564395340660-8fdf669bc042?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["잉글랜드위스키", "첫출시", "희귀"]
    },
    {
        id: "nw-1773215127-8", name: "Maker's Mark Wood Finishing Series: The Stewards Release / 메이커스 마크 우드 피니싱 시리즈 2026", type: "버번", region: "미국 켄터키",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 9, fruit: 5, spice: 8, body: 8 },
        description: "메이커스 마크의 2026년 우드 피니싱 시리즈입니다. 고유의 스테이브 피니싱 공법을 통해 배럴 스트렝스의 진하고 묵직한 버번 맛을 선사합니다.",
        imageUrl: "https://images.unsplash.com/photo-1485872299827-72e3e58ebe92?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["버번", "메이커스마크", "우드피니싱"]
    },
    {
        id: "nw-1773215127-9", name: "Poli Conclave Single Malt Whisky / 폴리 콘클라베 싱글 몰트", type: "싱글 몰트", region: "이탈리아",
        basePrice: 55, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 3, sweet: 6, fruit: 7, spice: 4, body: 6 },
        description: "이탈리아 베네토 지역의 폴리 증류소에서 생산된 5년 숙성 싱글 몰트입니다. 피티드와 언피티드 몰트가 조화롭게 어우러진 신선한 풍미가 특징입니다.",
        imageUrl: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["이탈리아위스키", "신생증류소", "싱글몰트"]
    },
    {
        id: "nw-1773215127-10", name: "Green River Wheated Full Proof Bourbon / 그린 리버 위티드 풀 프루프 버번", type: "버번", region: "미국 켄터키",
        basePrice: 50, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 8, fruit: 6, spice: 6, body: 9 },
        description: "2026년 초 출시된 가성비 최고의 버번입니다. 밀 함량이 높은 매시빌로 부드러우면서도 109.3 풀 프루프의 강력한 타격감을 보여줍니다.",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        availableDate: "2026-04-20",
        tags: ["버번", "가성비", "풀프루프"]
    }
];
