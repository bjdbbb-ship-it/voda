
// Unsplash Image Pool for Automatic Article Generation
// Contains verified high-quality images mapped to keywords/categories

export interface ImageAsset {
    url: string;
    keywords: string[];
    description: string;
}

export const unsplashImagePool: ImageAsset[] = [
    // === Peat / Smoky ===
    {
        url: "https://images.unsplash.com/photo-1574626003470-87f5b2d7085a?auto=format&fit=crop&q=80&w=800",
        keywords: ["peat", "smoky", "islay", "smoke"],
        description: "Dark moody whisky glass on rock"
    },
    {
        url: "https://images.unsplash.com/photo-1516550893885-7935ab0c6ad9?auto=format&fit=crop&q=80&w=800",
        keywords: ["islay", "scotland", "landscape"],
        description: "Misty Scotland landscape"
    },
    {
        url: "https://images.unsplash.com/photo-1629853381467-f3775432420f?auto=format&fit=crop&q=80&w=800",
        keywords: ["peat", "fire", "bonfire"],
        description: "Bonfire smoke vibe"
    },

    // === Sherry / Rich / Sweet ===
    {
        url: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=800",
        keywords: ["sherry", "cask", "barrel", "dark"],
        description: "Dark barrels in cellar"
    },
    {
        url: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        keywords: ["bottle", "rich", "amber", "old parr"],
        description: "Amber whisky bottle close up"
    },
    {
        url: "https://images.unsplash.com/photo-1564395340660-8fdf669bc042?auto=format&fit=crop&q=80&w=800",
        keywords: ["sherry", "cocktail", "rich"],
        description: "Rich amber liquid in glass"
    },

    // === Cocktail / Highball / Summer ===
    {
        url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
        keywords: ["cocktail", "highball", "summer", "ice", "refreshing"],
        description: "Highball with ice"
    },
    {
        url: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?auto=format&fit=crop&q=80&w=800",
        keywords: ["cocktail", "lime", "citrus", "bright"],
        description: "Bright citrus cocktail"
    },
    {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
        keywords: ["cocktail", "bar", "night"],
        description: "Elegant cocktail in bar"
    },

    // === Bourbon / American ===
    {
        url: "https://images.unsplash.com/photo-1613214149922-f1809c99e18e?auto=format&fit=crop&q=80&w=800",
        keywords: ["bourbon", "american", "corn", "usa"],
        description: "Bourbon style bottle/glass"
    },
    {
        url: "https://images.unsplash.com/photo-1569158062925-dd2433efca28?auto=format&fit=crop&q=80&w=800",
        keywords: ["barrel", "rickhouse", "aging"],
        description: "Barrels in rickhouse"
    },

    // === Production / Science / Blending ===
    {
        url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
        keywords: ["science", "lab", "blending", "flask"],
        description: "Laboratory glassware"
    },
    {
        url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800",
        keywords: ["distillery", "production", "copper", "pot still"],
        description: "Distillery interior"
    },

    // === General / Mood ===
    {
        url: "https://images.unsplash.com/photo-1557002665-c57c45873998?auto=format&fit=crop&q=80&w=800",
        keywords: ["bar", "jazz", "vintage", "mood"],
        description: "Jazz bar atmosphere"
    },
    {
        url: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=800",
        keywords: ["cheers", "friends", "party", "social"],
        description: "Toasting glasses"
    },
    {
        url: "https://images.unsplash.com/photo-1568213816046-0ee1c4295581?auto=format&fit=crop&q=80&w=800",
        keywords: ["nature", "barley", "golden"],
        description: "Golden barley field"
    }
];

export function getRandomImageForKeywords(keywords: string[]): string {
    // 1. Find images that match at least one keyword
    const matched = unsplashImagePool.filter(img =>
        img.keywords.some(k => keywords.map(kw => kw.toLowerCase()).includes(k))
    );

    // 2. If matches found, pick random
    if (matched.length > 0) {
        return matched[Math.floor(Math.random() * matched.length)].url;
    }

    // 3. Fallback: Return random image from entire pool
    return unsplashImagePool[Math.floor(Math.random() * unsplashImagePool.length)].url;
}
