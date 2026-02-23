export interface FlavorProfile {
    peat: number;
    sweet: number;
    fruit: number;
    spice: number;
    body: number;
}

export interface VisualProfile {
    bottleShape: string;
    liquidColor: string;
    glassColor: string;
}

export interface Whisky {
    id: string;
    name: string;
    type: string;
    region: string;
    priceRange: 'budget' | 'mid' | 'premium' | 'luxury';
    basePrice: number;
    currency: string;
    flavorProfile: FlavorProfile;
    tags: string[];
    imageUrl: string;
    description: string;
    visualProfile?: VisualProfile;
    availableDate?: string;
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    content: string;
    tags?: string[];
    useTitleCover?: boolean;
}

export const articles: Article[] = [
    {
        id: "1",
        slug: "whisky-magazine-voda-launch",
        title: "위스키 매거진 VODA에 오신 것을 환영합니다",
        subtitle: "취향의 발견, 위스키의 모든 것",
        category: "공지사항",
        author: "VODA",
        publishedAt: "2026-02-23",
        imageUrl: "https://images.unsplash.com/photo-1527281473222-79366a5b8b73?auto=format&fit=crop&q=80&w=800",
        content: `
## 환영합니다!

위스키 매거진 VODA가 정식 서비스를 시작했습니다. 
이곳에서 당신만의 위스키 취향을 발견하고, 전 세계의 다양한 위스키 소식을 접해보세요.

매일 새로운 위스키 정보와 기사가 업데이트됩니다.`,
        tags: ["공지","위스키","VODA"],
        useTitleCover: true
    }
];

export const whiskies: Whisky[] = [
    {
        "id": "g20",
        "name": "Johnnie Walker Blue Label",
        "type": "Blended Scotch",
        "region": "Scotland",
        "basePrice": 220,
        "currency": "USD",
        "priceRange": "luxury",
        "flavorProfile": {
            "peat": 2,
            "sweet": 8,
            "fruit": 7,
            "spice": 5,
            "body": 9
        },
        "description": "The peak of blending excellence, offering an incredibly smooth and complex profile with layers of honey, smoke, and dried fruits.",
        "imageUrl": "https://images.unsplash.com/photo-1569100133957-3f9dbe45cd72?auto=format&fit=crop&q=80&w=800",
        "tags": [
            "luxury",
            "rare",
            "조니워커",
            "블루"
        ]
    },
    {
        "id": "g31",
        "name": "Springbank 10 Year Old",
        "type": "Single Malt",
        "region": "Campbeltown, Scotland",
        "basePrice": 90,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 4,
            "sweet": 5,
            "fruit": 6,
            "spice": 6,
            "body": 7
        },
        "description": "A cult classic known for its unique Campbeltown character, offering a mix of maritime salt, oily texture, and gentle peat.",
        "tags": [
            "craft",
            "complex",
            "스프링뱅크"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g48",
        "name": "Kavalan Classic",
        "type": "Single Malt",
        "region": "Taiwan",
        "basePrice": 90,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 9,
            "spice": 4,
            "body": 7
        },
        "description": "A tropical fruit bomb from Taiwan, featuring intense notes of mango, pear, and coconut due to rapid maturation in hot climate.",
        "tags": [
            "tropical",
            "subtropical",
            "카발란"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1590089403142-6f562279e80c?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g21",
        "name": "Jameson Irish Whiskey",
        "type": "Blended",
        "region": "Ireland",
        "basePrice": 35,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 7,
            "fruit": 6,
            "spice": 3,
            "body": 5
        },
        "description": "The world's favorite Irish whiskey, triple distilled for exceptional smoothness and accessibility.",
        "tags": [
            "smooth",
            "light",
            "제임슨"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g26",
        "name": "Bruichladdich Classic Laddie",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 65,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 6,
            "fruit": 8,
            "spice": 5,
            "body": 7
        },
        "description": "An unpeated Islay malt that focuses on the purity of barley and coastal influence, offering a floral and minty profile.",
        "tags": [
            "unpeated",
            "islay",
            "브룩라디"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g27",
        "name": "Aberlour 12 Year Old",
        "type": "Single Malt",
        "region": "Speyside, Scotland",
        "basePrice": 60,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 7,
            "spice": 6,
            "body": 7
        },
        "description": "A classic Speyside malt matured in both Bourbon and Sherry casks, resulting in a perfectly balanced, fruity, and spicy dram.",
        "tags": [
            "double cask",
            "smooth",
            "아벨라워"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g28",
        "name": "Glenmorangie 10 Year Old",
        "type": "Single Malt",
        "region": "Highland, Scotland",
        "basePrice": 45,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 7,
            "fruit": 8,
            "spice": 4,
            "body": 6
        },
        "description": "Known as 'The Original', this set the standard for Highland malt with its delicate floral and citrus notes.",
        "tags": [
            "floral",
            "citrus",
            "글렌모란지"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g32",
        "name": "Glenfarclas 12 Year Old",
        "type": "Single Malt",
        "region": "Speyside, Scotland",
        "basePrice": 55,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 7,
            "spice": 7,
            "body": 7
        },
        "description": "A sherry oak masterpiece from one of Scotland's few family-owned distilleries, bursting with dark fruit and spice.",
        "tags": [
            "sherry",
            "family",
            "글렌파클라스"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g36",
        "name": "Nikka Coffey Grain",
        "type": "Grain Whisky",
        "region": "Japan",
        "basePrice": 75,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 9,
            "fruit": 5,
            "spice": 4,
            "body": 7
        },
        "description": "A unique Japanese grain whisky distilled in Coffey stills, offering a sweet, almost bourbon-like profile with vanilla notes.",
        "tags": [
            "sweet",
            "bourbon-like",
            "니카"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g39",
        "name": "Knob Creek 9 Year",
        "type": "Bourbon",
        "region": "Kentucky, USA",
        "basePrice": 40,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 4,
            "spice": 7,
            "body": 8
        },
        "description": "A pre-prohibition style bourbon with a high rye content and long aging, delivering a big, bold oak and spice flavor.",
        "tags": [
            "full-bodied",
            "oak",
            "놉크릭",
            "버번"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g40",
        "name": "Wild Turkey 101",
        "type": "Bourbon",
        "region": "Kentucky, USA",
        "basePrice": 35,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 7,
            "fruit": 3,
            "spice": 9,
            "body": 8
        },
        "description": "An iconic high-proof bourbon known for its powerful spice and rich caramel notes, perfect for neat sipping or cocktails.",
        "tags": [
            "spicy",
            "high proof",
            "와일드터키",
            "버번"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g41",
        "name": "Maker's Mark",
        "type": "Bourbon",
        "region": "Kentucky, USA",
        "basePrice": 35,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 9,
            "fruit": 4,
            "spice": 3,
            "body": 6
        },
        "description": "A wheated bourbon that swaps rye for winter wheat, resulting in a much softer and sweeter profile than traditional bourbons.",
        "tags": [
            "wheated",
            "smooth",
            "메이커스마크",
            "버번"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g43",
        "name": "Jack Daniel's No. 7",
        "type": "Tennessee Whiskey",
        "region": "Tennessee, USA",
        "basePrice": 30,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 5,
            "spice": 4,
            "body": 6
        },
        "description": "The world's best-selling whiskey, charcoal mellowed for a uniquely smooth character with notes of maple and banana.",
        "tags": [
            "iconic",
            "charcoal",
            "잭다니엘"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g45",
        "name": "Tullamore D.E.W.",
        "type": "Blended",
        "region": "Ireland",
        "basePrice": 30,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 7,
            "fruit": 7,
            "spice": 3,
            "body": 5
        },
        "description": "A legendary triple-blended Irish whiskey known for its accessibility and gentle complexity with hints of green apple.",
        "tags": [
            "triple distilled",
            "smooth",
            "툴라모어"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g47",
        "name": "Teeling Small Batch",
        "type": "Blended",
        "region": "Ireland",
        "basePrice": 40,
        "currency": "USD",
        "priceRange": "budget",
        "flavorProfile": {
            "peat": 0,
            "sweet": 8,
            "fruit": 7,
            "spice": 5,
            "body": 6
        },
        "description": "An innovative Irish blend finished in Rum casks, adding a distinct layer of tropical sweetness and vanilla.",
        "tags": [
            "rum cask",
            "sweet",
            "틸링"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g52",
        "name": "Arran 10 Year Old",
        "type": "Single Malt",
        "region": "Isle of Arran, Scotland",
        "basePrice": 60,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 0,
            "sweet": 6,
            "fruit": 9,
            "spice": 5,
            "body": 6
        },
        "description": "A vibrant and fresh island malt that showcases the pure character of Arran with notes of citrus and orchard fruits.",
        "tags": [
            "citrus",
            "unpeated",
            "아란"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g53",
        "name": "Jura 10 Year Old",
        "type": "Single Malt",
        "region": "Isle of Jura, Scotland",
        "basePrice": 50,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 3,
            "sweet": 7,
            "fruit": 5,
            "spice": 5,
            "body": 6
        },
        "description": "A marriage of Highland and Island styles, offering a gentle touch of peat smoke balanced by sweet sherry influence.",
        "tags": [
            "smoke",
            "sweet",
            "쥬라"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g54",
        "name": "Highland Park 12 Year Old Viking Honour",
        "type": "Single Malt",
        "region": "Islands, Scotland",
        "basePrice": 55,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 5,
            "sweet": 7,
            "fruit": 6,
            "spice": 6,
            "body": 7
        },
        "description": "The soul of the Orkney Islands, featuring a harmonious mix of heather honey sweetness and aromatic peat smoke.",
        "tags": [
            "honey",
            "smoke",
            "하일랜드파크"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g55",
        "name": "Talisker 10 Year Old",
        "type": "Single Malt",
        "region": "Islands, Scotland",
        "basePrice": 60,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 7,
            "sweet": 3,
            "fruit": 4,
            "spice": 8,
            "body": 8
        },
        "description": "A maritime masterpiece from the Isle of Skye, famously peppery with a powerful smoke and sea-salt character.",
        "tags": [
            "maritime",
            "pepper",
            "탈리스커"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g56",
        "name": "Ardbeg 10 Year Old",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 65,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 10,
            "sweet": 4,
            "fruit": 5,
            "spice": 7,
            "body": 8
        },
        "description": "A peaty powerhouse that manages to find incredible complexity and hidden sweetness beneath its heavy smoke veil.",
        "tags": [
            "smoke",
            "complexity",
            "아드벡"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g57",
        "name": "Laphroaig 10 Year Old",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 65,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 10,
            "sweet": 2,
            "fruit": 3,
            "spice": 5,
            "body": 9
        },
        "description": "The most medicinal of Islay malts, legendary for its intense seaweed, iodine, and heavy peat profile.",
        "tags": [
            "medicinal",
            "peat",
            "라프로익"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g58",
        "name": "Lagavulin 16 Year Old",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 110,
        "currency": "USD",
        "priceRange": "premium",
        "flavorProfile": {
            "peat": 9,
            "sweet": 6,
            "fruit": 5,
            "spice": 7,
            "body": 9
        },
        "description": "A slow-distilled Islay classic that offers a dry, complex smoke balanced by rich sherry notes and a long finish.",
        "tags": [
            "intense",
            "smoke",
            "라가불린"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g59",
        "name": "Caol Ila 12 Year Old",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 70,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 8,
            "sweet": 4,
            "fruit": 5,
            "spice": 6,
            "body": 7
        },
        "description": "A refined and oily Islay malt that focuses on fresh, elegant smoke and citrus rather than heavy medicine.",
        "tags": [
            "elegant smoke",
            "oil",
            "쿠일라"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "g60",
        "name": "Bowmore 12 Year Old",
        "type": "Single Malt",
        "region": "Islay, Scotland",
        "basePrice": 55,
        "currency": "USD",
        "priceRange": "mid",
        "flavorProfile": {
            "peat": 6,
            "sweet": 6,
            "fruit": 5,
            "spice": 5,
            "body": 7
        },
        "description": "A beautifully balanced Islay dram that offers a subtle puff of smoke alongside dark chocolate and citrus notes.",
        "tags": [
            "balance",
            "smoke",
            "보우모어"
        ],
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p1",
        "name": "Lagavulin 12 Year Old Special Release",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 150,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "green"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-29"
    },
    {
        "id": "p2",
        "name": "Ardbeg Corryvreckan",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 120,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "green"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-29"
    },
    {
        "id": "p3",
        "name": "Laphroaig Quarter Cask",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 60,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "green"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-29"
    },
    {
        "id": "p4",
        "name": "Bowmore 15 Year Old",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 90,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-30"
    },
    {
        "id": "p5",
        "name": "Caol Ila Moch",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 65,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "straw",
            "glassColor": "brown"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-30"
    },
    {
        "id": "p7",
        "name": "GlenDronach 15 Year Old Revival",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 100,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "brown"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-31"
    },
    {
        "id": "p9",
        "name": "Glenmorangie 18 Year Old",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 140,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-31"
    },
    {
        "id": "p10",
        "name": "Dalmore King Alexander III",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 280,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "stout",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        "availableDate": "2026-01-31"
    },
    {
        "id": "p12",
        "name": "Yamazaki 18 Year Old",
        "type": "Single Malt",
        "region": "Japan",
        "basePrice": 1500,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-01",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p13",
        "name": "Hakushu 18 Year Old",
        "type": "Single Malt",
        "region": "Japan",
        "basePrice": 1300,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "green"
        },
        "availableDate": "2026-02-01",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p14",
        "name": "Old Rip Van Winkle 10 Year",
        "type": "Bourbon",
        "region": "Kentucky",
        "basePrice": 1000,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-01",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p15",
        "name": "Pappy Van Winkle 23 Year",
        "type": "Bourbon",
        "region": "Kentucky",
        "basePrice": 5000,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-02",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p17",
        "name": "E.H. Taylor Small Batch",
        "type": "Bourbon",
        "region": "Kentucky",
        "basePrice": 120,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-02",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p18",
        "name": "Port Charlotte OLC:01",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 110,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "brown"
        },
        "availableDate": "2026-01-29",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p19",
        "name": "Octomore 14.1",
        "type": "Single Malt",
        "region": "Islay",
        "basePrice": 220,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "brown"
        },
        "availableDate": "2026-01-29",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p20",
        "name": "Springbank 15 Year Old",
        "type": "Single Malt",
        "region": "Campbeltown",
        "basePrice": 160,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-01-30",
        "imageUrl": "https://images.unsplash.com/photo-1596300300958-f9468087799e?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p21",
        "name": "Longrow Peated",
        "type": "Single Malt",
        "region": "Campbeltown",
        "basePrice": 85,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "brown"
        },
        "availableDate": "2026-01-30",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p22",
        "name": "Kilkerran 12 Year Old",
        "type": "Single Malt",
        "region": "Campbeltown",
        "basePrice": 75,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-03",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p23",
        "name": "Glenfarclas 25 Year Old",
        "type": "Single Malt",
        "region": "Speyside",
        "basePrice": 250,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "stout",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-03",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p24",
        "name": "Glengoyne 21 Year Old",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 220,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-03",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p25",
        "name": "Macallan 18 Year Old Sherry Oak",
        "type": "Single Malt",
        "region": "Speyside",
        "basePrice": 450,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-03",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p26",
        "name": "Talisker 18 Year Old",
        "type": "Single Malt",
        "region": "Islands",
        "basePrice": 180,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-04",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p27",
        "name": "Highland Park 18 Year Old",
        "type": "Single Malt",
        "region": "Islands",
        "basePrice": 160,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-04",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p28",
        "name": "Glenmorangie Signet",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 250,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "opaque"
        },
        "availableDate": "2026-02-04",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p29",
        "name": "Oban Little Bay",
        "type": "Single Malt",
        "region": "Highland",
        "basePrice": 80,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-04",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p30",
        "name": "Royal Salute 21 Year Old Richard Quinn Edition",
        "type": "Blended",
        "region": "Scotland",
        "basePrice": 200,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "ceramic",
            "liquidColor": "amber",
            "glassColor": "opaque"
        },
        "availableDate": "2026-02-05",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p31",
        "name": "Chivas Regal Ultis",
        "type": "Blended Malt",
        "region": "Scotland",
        "basePrice": 220,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-05",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p33",
        "name": "Compass Box The Peat Monster",
        "type": "Blended Malt",
        "region": "Scotland",
        "basePrice": 65,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "straw",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-05",
        "imageUrl": "https://images.unsplash.com/photo-1582260661131-4191c94d03e2?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p34",
        "name": "Nikka Yoichi 10 Year Old",
        "type": "Single Malt",
        "region": "Japan",
        "basePrice": 150,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "gold",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-06",
        "imageUrl": "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p35",
        "name": "Kavalan Solist Vinho Barrique",
        "type": "Single Malt",
        "region": "Taiwan",
        "basePrice": 250,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "mahogany",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-06",
        "imageUrl": "https://images.unsplash.com/photo-1516919549054-e08258825f8e?auto=format&fit=crop&q=80&w=800"
    },
    {
        "id": "p36",
        "name": "Amrut Intermediate Sherry",
        "type": "Single Malt",
        "region": "India",
        "basePrice": 140,
        "currency": "USD",
        "visualProfile": {
            "bottleShape": "tall",
            "liquidColor": "amber",
            "glassColor": "clear"
        },
        "availableDate": "2026-02-06",
        "imageUrl": "https://images.unsplash.com/photo-1585863264426-17b83ec50f38?auto=format&fit=crop&q=80&w=800"
    }
];
