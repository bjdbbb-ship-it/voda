
// Unsplash Image Pool for Automatic Article Generation
// Contains verified high-quality images mapped to keywords/categories

export interface ImageAsset {
    url: string;
    keywords: string[];
    description: string;
}

export const unsplashImagePool: ImageAsset[] = [
    // === Peat / Smoky / Islay ===
    {
        url: "https://images.unsplash.com/photo-1574626003470-87f5b2d7085a?auto=format&fit=crop&q=80&w=1200",
        keywords: ["peat", "smoky", "islay", "smoke", "dark"],
        description: "Dark moody whisky glass on rock"
    },
    {
        url: "https://images.unsplash.com/photo-1516550893885-7935ab0c6ad9?auto=format&fit=crop&q=80&w=1200",
        keywords: ["islay", "scotland", "landscape", "misty"],
        description: "Misty Scotland landscape"
    },
    {
        url: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=1200",
        keywords: ["peat", "smoke", "scotland", "coast"],
        description: "Coastal Scottish vibe"
    },
    {
        url: "https://images.unsplash.com/photo-1629853381467-f3775432420f?auto=format&fit=crop&q=80&w=1200",
        keywords: ["peat", "fire", "bonfire"],
        description: "Bonfire smoke vibe"
    },
    {
        url: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        keywords: ["islay", "lagavulin", "distillery", "classic"],
        description: "Lagavulin distillery mood"
    },

    // === Sherry / Rich / Sweet / Luxury ===
    {
        url: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1200",
        keywords: ["sherry", "cask", "barrel", "dark", "cellar"],
        description: "Dark barrels in cellar"
    },
    {
        url: "https://images.unsplash.com/photo-1564395340660-8fdf669bc042?auto=format&fit=crop&q=80&w=1200",
        keywords: ["sherry", "cocktail", "rich", "amber"],
        description: "Rich amber liquid in glass"
    },
    {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        keywords: ["luxury", "premium", "macallan", "rich"],
        description: "Luxury whisky presentation"
    },
    {
        url: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=1200",
        keywords: ["sweet", "caramel", "honey", "rich"],
        description: "Sweet syrup-like whisky pour"
    },
    {
        url: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1200",
        keywords: ["amber", "gold", "bottle", "premium"],
        description: "Close up of amber liquid in bottle"
    },

    // === Cocktail / Highball / Summer / Refreshing ===
    {
        url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cocktail", "highball", "summer", "ice", "refreshing"],
        description: "Highball with ice"
    },
    {
        url: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cocktail", "lime", "citrus", "bright", "summer"],
        description: "Bright citrus cocktail"
    },
    {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cocktail", "bar", "night", "elegant"],
        description: "Elegant cocktail in bar"
    },
    {
        url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200",
        keywords: ["highball", "bubbles", "sparkling", "refreshing"],
        description: "Bubbling highball celebration"
    },
    {
        url: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cocktail", "mint", "summer", "green"],
        description: "Fresh minty whiskey cocktail"
    },

    // === Production / Distillery / Science ===
    {
        url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1200",
        keywords: ["science", "lab", "blending", "flask"],
        description: "Laboratory glassware"
    },
    {
        url: "https://images.unsplash.com/photo-1600728613961-d6ecbc8bc357?auto=format&fit=crop&q=80&w=1200",
        keywords: ["distillery", "production", "copper", "pot still"],
        description: "Shiny copper stills"
    },
    {
        url: "https://images.unsplash.com/photo-1569158062925-dd2433efca28?auto=format&fit=crop&q=80&w=1200",
        keywords: ["barrel", "rickhouse", "aging", "warehouse"],
        description: "Barrels in rickhouse"
    },
    {
        url: "https://images.unsplash.com/photo-1568213816046-0ee1c4295581?auto=format&fit=crop&q=80&w=1200",
        keywords: ["nature", "barley", "golden", "harvest"],
        description: "Golden barley field"
    },

    // === Bar / Mood / Social ===
    {
        url: "https://images.unsplash.com/photo-1557002665-c57c45873998?auto=format&fit=crop&q=80&w=1200",
        keywords: ["bar", "jazz", "vintage", "mood", "night"],
        description: "Jazz bar atmosphere"
    },
    {
        url: "https://images.unsplash.com/photo-1485872299827-72e3e58ebe92?auto=format&fit=crop&q=80&w=1200",
        keywords: ["bar", "interior", "elegant", "luxury"],
        description: "Modern elegant bar interior"
    },
    {
        url: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cheers", "friends", "party", "social"],
        description: "Toasting glasses"
    },
    {
        url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=1200",
        keywords: ["pouring", "motion", "action", "detail"],
        description: "Action shot of whisky pour"
    }
];

export function getRandomImageForKeywords(keywords: string[]): string {
    const lowercaseKeywords = keywords.map(kw => kw.toLowerCase());

    // 1. Find images that match at least one keyword (Weighted matching)
    const matches = unsplashImagePool.map(img => {
        const score = img.keywords.filter(k => lowercaseKeywords.includes(k)).length;
        return { img, score };
    }).filter(m => m.score > 0);

    // 2. Sort by score and pick from top matches
    if (matches.length > 0) {
        matches.sort((a, b) => b.score - a.score);
        const topScore = matches[0].score;
        const topMatches = matches.filter(m => m.score === topScore);
        return topMatches[Math.floor(Math.random() * topMatches.length)].img.url;
    }

    // 3. Fallback: Return random image from entire pool
    return unsplashImagePool[Math.floor(Math.random() * unsplashImagePool.length)].url;
}

