
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
    popularity?: number; // 0-100 rating of how well-known it is
    rating?: number; // 1-5 average rating
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
    sourceUrl?: string;
}
