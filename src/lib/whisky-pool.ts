import { Whisky } from "./data";

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
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["아일라", "스페셜릴리즈", "스모크"]
    },
    {
        id: "p2", name: "Ardbeg Corryvreckan", type: "싱글 몰트", region: "아일라",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 10, sweet: 5, fruit: 4, spice: 8, body: 9 },
        description: "소용돌이치는 듯한 강렬한 피트 향과 다크 초콜렛, 스파이시한 풍미가 어우러진 깊고 묵직한 아일라 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["아일라", "피트몬스터", "강렬한"]
    },
    {
        id: "p3", name: "Laphroaig Quarter Cask", type: "싱글 몰트", region: "아일라",
        basePrice: 60, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 3, fruit: 4, spice: 6, body: 8 },
        description: "작은 캐스크를 사용하여 숙성 속도를 높임으로써 더 깊은 오크 풍미와 라프로익 특유의 강렬한 피트 연기를 극대화했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "green" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["아일라", "피트", "오크"]
    },
    {
        id: "p4", name: "Bowmore 15 Year Old", type: "싱글 몰트", region: "아일라",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 6, sweet: 7, fruit: 6, spice: 5, body: 7 },
        description: "셰리 캐스크 피니시를 통해 얻은 달콤한 초콜릿 향과 아일라 특유의 은은한 연기 향이 아름답게 균형을 이룹니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["아일라", "셰리", "밸런스"]
    },
    {
        id: "p5", name: "Caol Ila Moch", type: "싱글 몰트", region: "아일라",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 7, sweet: 5, fruit: 7, spice: 5, body: 6 },
        description: "'새벽'이라는 뜻의 가볍고 상쾌한 스타일로, 섬세한 연기 향과 레몬 같은 시트러스함이 어우러진 우아한 아일라 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "brown" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["아일라", "우아한", "연은은한피트"]
    },

    // --- Speyside / Highland (Sherry/Sweet) ---
    {
        id: "p7", name: "GlenDronach 15 Year Old Revival", type: "싱글 몰트", region: "하이랜드",
        basePrice: 100, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 6, body: 8 },
        description: "셰리 몬스터의 귀환으로 알려진 이 제품은 풍부한 다크 과일과 초콜릿, 견과류의 복합적인 조화가 일품입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "brown" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["셰리몬스터", "풍부한", "스페이사이드"]
    },
    {
        id: "p9", name: "Glenmorangie 18 Year Old", type: "싱글 몰트", region: "하이랜드",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 4, body: 7 },
        description: "섬세하고 부드러운 고숙성 하이랜드 몰트로, 꽃향기와 바닐라, 그리고 실크처럼 매끄러운 질감을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["부드러운", "플로럴", "하이랜드"]
    },
    {
        id: "p10", name: "Dalmore King Alexander III", type: "싱글 몰트", region: "하이랜드",
        basePrice: 280, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 7, body: 9 },
        description: "6가지 다른 캐스크에서 숙성된 원액을 블렌딩하여 베리, 향신료, 와인의 복합적인 풍미가 겹겹이 쌓인 럭셔리한 경험을 선사합니다.",
        visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" },
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-26",
        tags: ["럭셔리", "멀티캐스크", "복합미"]
    },

    // --- Japanese (Faceted/Elegant) ---
    {
        id: "p12", name: "Yamazaki 18 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 1500, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 1, sweet: 8, fruit: 8, spice: 6, body: 9 },
        description: "일본 위스키의 자존심이라 불리는 명작으로, 깊은 셰리 풍미와 정교한 산달우드 향이 어우러진 극강의 밸런스를 보여줍니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["일본위스키", "럭셔리", "밸런스"]
    },
    {
        id: "p13", name: "Hakushu 18 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 1300, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 3, sweet: 6, fruit: 7, spice: 5, body: 8 },
        description: "일본의 숲 속 증류소에서 탄생한 위스키로, 상쾌한 허브 향과 은은한 연기 향이 숲의 맑은 정취를 느끼게 합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["일본위스키", "숲의향기", "상쾌한"]
    },

    // --- Bourbon (Square/Stout) ---
    {
        id: "p14", name: "Old Rip Van Winkle 10 Year", type: "버번", region: "미국 켄터키",
        basePrice: 1000, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 5, spice: 7, body: 8 },
        description: "전설적인 밴 윙클 가문의 버번 프로젝트로, 풍부한 카라멜과 오크 풍미가 일품인 수집가들의 로망입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["버번", "희귀", "희소가치"]
    },
    {
        id: "p15", name: "Pappy Van Winkle 23 Year", type: "버번", region: "미국 켄터키",
        basePrice: 5000, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 8, body: 10 },
        description: "세계 최정상급 버번 위스키로, 믿을 수 없을 만큼 깊고 복합적인 오크와 바닐라, 스파이스의 정수를 보여주는 전설적인 병입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["버번", "전설적인", "울트라프리미엄"]
    },
    {
        id: "p17", name: "E.H. Taylor Small Batch", type: "버번", region: "미국 켄터키",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 5, spice: 7, body: 7 },
        description: "켄터키 버번의 전통을 계승한 스몰 배치로, 부드러운 카라멜과 호밀의 스파이시함이 조화로운 클래식 버번입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["버번", "스몰배치", "전통적인"]
    },

    // --- More Varieties ---
    {
        id: "p18", name: "Port Charlotte OLC:01", type: "싱글 몰트", region: "아일라",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 9, sweet: 7, fruit: 8, spice: 6, body: 8 },
        description: "피트함과 올로로소 셰리 캐스크의 달콤함이 만나 강렬하면서도 과일향이 풍부한 아일라 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "brown" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["아일라", "헤비피티드", "셰리"]
    },
    {
        id: "p19", name: "Octomore 14.1", type: "싱글 몰트", region: "아일라",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 10, sweet: 5, fruit: 6, spice: 7, body: 9 },
        description: "세계에서 가장 강력한 피트 수치를 자랑하면서도, 그 속에 숨겨진 섬세한 곡물의 달콤함과 바닐라 향이 놀라운 반전을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["아일라", "슈퍼헤비피티드", "복합미"]
    },
    {
        id: "p20", name: "Springbank 15 Year Old", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 160, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 4, sweet: 7, fruit: 6, spice: 6, body: 8 },
        description: "전통적인 생산 방식을 고집하는 스프링뱅크의 핵심 라인업으로, 셰리 캐스크의 풍성함과 특유의 기름진 질감이 조화롭습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1596300300958-f9468087799e?auto=format&fit=crop&q=80&w=800",
        tags: ["캠벨타운", "수제위스키", "셰리"]
    },
    {
        id: "p21", name: "Longrow Peated", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 8, sweet: 4, fruit: 5, spice: 7, body: 8 },
        description: "스프링뱅크 증류소에서 생산하는 강력한 피트 위스키로, 묵직한 연기 향과 해안의 짠맛이 느껴지는 남성적인 캐릭터를 가집니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["캠벨타운", "피티드", "강렬한"]
    },
    {
        id: "p22", name: "Kilkerran 12 Year Old", type: "싱글 몰트", region: "캠벨타운",
        basePrice: 75, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 3, sweet: 6, fruit: 7, spice: 5, body: 6 },
        description: "캠벨타운의 새로운 강자로, 라이트한 피트와 시트러스, 소금 기운이 어우러진 현대적인 캠벨타운 스타일을 보여줍니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["캠벨타운", "모던", "은은한피트"]
    },
    {
        id: "p23", name: "Glenfarclas 25 Year Old", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 8, spice: 7, body: 9 },
        description: "고숙성 셰리 위스키의 기준석과 같은 존재로, 커피, 다크 초콜릿, 잘 익은 과일의 풍미가 웅장하게 펼쳐집니다.",
        visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["스페이사이드", "셰리", "고숙성"]
    },
    {
        id: "p24", name: "Glengoyne 21 Year Old", type: "싱글 몰트", region: "하이랜드",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 6, body: 8 },
        description: "피트를 전혀 사용하지 않고 천천히 건조시킨 보리로 빚어낸 위스키로, 순수한 셰리 오크의 달콤함과 시나몬의 따뜻함을 전합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["하이랜드", "논피티드", "셰리"]
    },
    {
        id: "p25", name: "Macallan 18 Year Old Sherry Oak", type: "싱글 몰트", region: "스페이사이드",
        basePrice: 450, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 8 },
        description: "셰리 숙성 위스키의 왕으로 불리며, 말린 과일과 생강, 바닐라의 풍미가 예술적인 조화를 이루는 명작입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["스페이사이드", "아이코닉", "셰리"]
    },
    {
        id: "p26", name: "Talisker 18 Year Old", type: "싱글 몰트", region: "아일랜드",
        basePrice: 180, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 6, sweet: 5, fruit: 7, spice: 8, body: 8 },
        description: "탈리스커 특유의 후추향과 소금 기운에 고숙성에서 오는 풍부한 과일향과 시트러스함이 더해진 완성도 높은 드람입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["스카이섬", "수상작", "복합미"]
    },
    {
        id: "p27", name: "Highland Park 18 Year Old", type: "싱글 몰트", region: "아일랜드",
        basePrice: 160, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 5, sweet: 8, fruit: 7, spice: 6, body: 8 },
        description: "향기로운 연기 향과 달콤한 헤더 꿀의 조화가 정점에 달한 하일랜드 파크의 정수와 같은 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["오크니", "꿀", "스모크"]
    },
    {
        id: "p28", name: "Glenmorangie Signet", type: "싱글 몰트", region: "하이랜드",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 7, body: 9 },
        description: "초콜릿 몰트를 사용하여 구운 커피와 다크 초콜릿의 혁신적인 풍미를 창조해낸 프리미엄 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "opaque" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["하이랜드", "초콜릿몰트", "혁신"]
    },
    {
        id: "p29", name: "Oban Little Bay", type: "싱글 몰트", region: "하이랜드",
        basePrice: 80, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 4, sweet: 7, fruit: 6, spice: 5, body: 7 },
        description: "리필과 셰리 캐스크의 원액을 작은 오크통에서 매링하여 더 농축된 풍미와 부드러운 해안의 느낌을 강조했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["하이랜드", "해안가", "스몰캐스크"]
    },
    {
        id: "p30", name: "Royal Salute 21 Year Old Richard Quinn Edition", type: "블렌디드", region: "스코틀랜드",
        basePrice: 200, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 1, sweet: 8, fruit: 8, spice: 4, body: 8 },
        description: "예술적인 병 디자인만큼이나 화려하고 플로럴한 향과 잘 익은 배의 풍미가 일품인 럭셔리 블렌드입니다.",
        visualProfile: { bottleShape: "ceramic", liquidColor: "amber", glassColor: "opaque" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["럭셔리", "패션", "부드러운"]
    },
    {
        id: "p31", name: "Chivas Regal Ultis", type: "블렌디드 몰트", region: "스코틀랜드",
        basePrice: 220, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 8, fruit: 8, spice: 6, body: 8 },
        description: "시바스 리갈 역사상 최초의 블렌디드 몰트로, 5가지 상징적인 싱글 몰트를 섞어 풍부한 복합성을 극대화했습니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["블렌디드몰트", "프리미엄", "풍부한"]
    },
    {
        id: "p33", name: "Compass Box The Peat Monster", type: "블렌디드 몰트", region: "스코틀랜드",
        basePrice: 65, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 10, sweet: 4, fruit: 5, spice: 6, body: 7 },
        description: "독립 병입자의 창의성이 돋보이는 블렌드로, 여러 증류소의 피트 원액을 섞어 말 그대로 괴물 같은 강렬한 스모키함을 선사합니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1582260661131-4191c94d03e2?auto=format&fit=crop&q=80&w=800",
        tags: ["블렌디드몰트", "스모크", "피트몬스터"]
    },
    {
        id: "p34", name: "Nikka Yoichi 10 Year Old", type: "싱글 몰트", region: "일본",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 5, sweet: 6, fruit: 6, spice: 5, body: 8 },
        description: "석탄 직화 증류 방식을 고집하는 요이치 증류소의 특징인 묵직한 바디감과 섬세한 연기 향이 돋보이는 일본 위스키입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        tags: ["일본위스키", "석탄증류", "풍부한"]
    },
    {
        id: "p35", name: "Kavalan Solist Vinho Barrique", type: "싱글 몰트", region: "대만",
        basePrice: 250, currency: "USD", priceRange: "luxury",
        flavorProfile: { peat: 0, sweet: 9, fruit: 9, spice: 7, body: 9 },
        description: "와인 캐스크 숙성을 통해 폭발적인 열대 과일 향과 다크 초콜릿, 바닐라의 풍미를 담아낸 대만의 세계적인 명작입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1516919549054-e08258825f8e?auto=format&fit=crop&q=80&w=800",
        tags: ["대만위스키", "수상작", "와인캐스크"]
    },
    {
        id: "p36", name: "Amrut Intermediate Sherry", type: "싱글 몰트", region: "인도",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 9, fruit: 7, spice: 7, body: 8 },
        description: "인도의 열대 기후에서 숙성되어 풍미가 매우 진하며, 셰리 캐스크의 견과류와 과일 향이 강력하게 느껴지는 싱글 몰트입니다.",
        visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" },
        availableDate: "2026-02-26",
        imageUrl: "https://images.unsplash.com/photo-1585863264426-17b83ec50f38?auto=format&fit=crop&q=80&w=800",
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
        imageUrl: "https://images.unsplash.com/photo-1590089415225-404efbae196a?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-27"
    },
    {
        id: "n2602-2", name: "Torabhaig 2018 Scottish Oak Single Cask", type: "싱글 몰트", region: "스코틀랜드 스카이섬",
        basePrice: 130, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 7, sweet: 5, fruit: 5, spice: 8, body: 8 },
        description: "스코티시 오크 싱글 캐스크 숙성을 통해 정통적인 스카이 섬의 피트함에 강력하고 거친 오크 향이 더해진 희소성 높은 싱글 몰트입니다.",
        tags: ["스카이섬", "싱글캐스크", "스코티시오크"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-27"
    },
    {
        id: "n2602-3", name: "Highland Park Heather Cask Strength", type: "싱글 몰트", region: "스코틀랜드 아일랜드",
        basePrice: 110, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 6, sweet: 7, fruit: 5, spice: 7, body: 9 },
        description: "하일랜드 파크의 새로운 캐스크 스트랭스 시리즈의 첫 번째 출시작으로, 오크니 제도의 헤더 꿀 향과 강력한 피트 연기가 물을 타지 않은 원액 그대로 전달됩니다.",
        tags: ["캐스크스트랭스", "꿀", "스모크"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-27"
    },
    {
        id: "n2602-4", name: "Lochlea 7 Year Old Single Estate", type: "싱글 몰트", region: "스코틀랜드 로우랜드",
        basePrice: 85, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 7, fruit: 8, spice: 5, body: 6 },
        description: "로클리 증류소의 첫 번째 연산 표기 제품으로, 직접 재배한 보리만을 사용하여 만든 로우랜드 스타일 특유의 신선하고 과일향 풍부한 캐릭터를 자랑합니다.",
        tags: ["싱글에스테이트", "로우랜드", "신선한"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-27"
    },
    {
        id: "n2602-5", name: "Compass Box Hedonism 2026", type: "블렌디드 그레인", region: "스코틀랜드",
        basePrice: 150, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 9, fruit: 6, spice: 4, body: 8 },
        description: "30년 숙성 스트래스클라이드 그레인 원액을 포함한 컴파스 박스의 전설적인 그레인 위스키 시리즈로, 벨벳 같은 부드러움과 달콤한 바닐라, 코코넛의 풍미가 압권입니다.",
        tags: ["그레인위스키", "럭셔리", "부드러운"],
        imageUrl: "https://images.unsplash.com/photo-1582260661131-4191c94d03e2?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-28"
    },
    {
        id: "n2602-6", name: "Ardbeg 10 Year Old Cask Strength (Committee 릴리즈)", type: "싱글 몰트", region: "스코틀랜드 아일라",
        basePrice: 140, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 10, sweet: 4, fruit: 5, spice: 9, body: 10 },
        description: "아드벡 커미티 멤버를 위해 한정 출시된 10년 숙성 캐스크 스트랭스 버전으로, 전형적인 아드벡의 연기 폭탄 뒤에 숨겨진 강력한 향신료의 힘을 느낄 수 있습니다.",
        tags: ["커미티릴리즈", "캐스크스트랭스", "아일라"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-28"
    },
    {
        id: "n2602-7", name: "Elijah Craig Barrel Proof Rye Batch A126", type: "라이 위스키", region: "미국 켄터키",
        basePrice: 80, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 6, fruit: 4, spice: 10, body: 9 },
        description: "11년 11개월 숙성된 고숙성 라이 위스키로, 60.2도의 높은 도수에서 뿜어져 나오는 강력한 호밀의 스파이스와 오크의 대담함을 가감 없이 보여줍니다.",
        tags: ["배럴프루프", "라이위스키", "대담한"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-02-28"
    },
    {
        id: "n2602-8", name: "13th Colony 113 Maple Bourbon", type: "버번", region: "미국 조지아",
        basePrice: 90, currency: "USD", priceRange: "mid",
        flavorProfile: { peat: 0, sweet: 10, fruit: 4, spice: 6, body: 8 },
        description: "메이플 나무 스파이럴을 사용하여 숙성한 독특한 공법의 버번으로, 풍부한 단풍나무 시럽의 달콤함과 버번 특유의 옥수수 단맛이 조화로운 디저트 같은 위스키입니다.",
        tags: ["메이플피니시", "버번", "달콤한"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-03-01"
    },
    {
        id: "n2602-9", name: "Kavalan Triple Sherry Cask (Golden Steed)", type: "싱글 몰트", region: "대만",
        basePrice: 180, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 10, fruit: 9, spice: 7, body: 9 },
        description: "올로로소, 페드로 히메네즈, 모스카텔 셰리 캐스크를 모두 사용한 트리플 셰리 숙성작으로, 다크 과일의 풍성함과 견과류의 고소함이 폭발적으로 느껴집니다.",
        tags: ["트리플셰리", "대만위스키", "풍부한"],
        imageUrl: "https://images.unsplash.com/photo-1516919549054-e08258825f8e?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-03-01"
    },
    {
        id: "n2602-10", name: "Godawan Triple Cask (Indian Single Malt)", type: "싱글 몰트", region: "인도",
        basePrice: 120, currency: "USD", priceRange: "premium",
        flavorProfile: { peat: 0, sweet: 8, fruit: 7, spice: 8, body: 8 },
        description: "인도에서 생산된 프리미엄 싱글 몰트로, 세 가지 캐스크 숙성을 통해 인도 위스키 특유의 열대 과일 향과 스파이시한 피니시를 세련되게 변주한 제품입니다.",
        tags: ["인도위스키", "트리플캐스크", "이국적인"],
        imageUrl: "https://images.unsplash.com/photo-1585863264426-17b83ec50f38?auto=format&fit=crop&q=80&w=800",
        availableDate: "2026-03-01"
    },
];
