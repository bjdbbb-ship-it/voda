
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
        url: "https://images.unsplash.com/photo-1508253578933-20b529302151?auto=format&fit=crop&q=80&w=1200",
        keywords: ["peat", "smoky", "islay", "smoke", "dark"],
        description: "Whisky bottle and glass"
    },
    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        keywords: ["islay", "scotland", "landscape", "misty"],
        description: "Misty Scotland landscape"
    },
    {
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200",
        keywords: ["peat", "smoke", "scotland", "coast", "fire"],
        description: "Coastal smoke vibe"
    },

    // === Sherry / Rich / Sweet / Luxury ===
    {
        url: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1200",
        keywords: ["sherry", "cask", "barrel", "dark", "cellar"],
        description: "Dark barrels in cellar"
    },
    {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        keywords: ["luxury", "premium", "macallan", "rich", "amber", "gold"],
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
        url: "https://images.unsplash.com/photo-1520174691701-bc555a3404ca?auto=format&fit=crop&q=80&w=1200",
        keywords: ["cocktail", "bar", "night", "elegant", "refreshing"],
        description: "Elegant cocktail in bar"
    },

    // === Production / Distillery / Science ===
    {
        url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1200",
        keywords: ["science", "lab", "blending", "flask", "distillery"],
        description: "Laboratory glassware"
    },
    {
        url: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=1200",
        keywords: ["distillery", "production", "copper", "pot still", "barrel"],
        description: "Distillery barrels"
    },
    {
        url: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=1200",
        keywords: ["barrel", "rickhouse", "aging", "warehouse", "production"],
        description: "Barrels in warehouse"
    },

    // === Bar / Mood / Social ===
    {
        url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1200",
        keywords: ["bar", "vintage", "mood", "night", "interior"],
        description: "Modern elegant bar interior"
    },
    {
        url: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=1200",
        keywords: ["bar", "cheers", "friends", "party", "social"],
        description: "Toasting glasses"
    },
    {
        url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=1200",
        keywords: ["pouring", "motion", "action", "detail", "bar"],
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

