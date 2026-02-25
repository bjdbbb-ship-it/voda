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
        tags: ["공지", "위스키", "VODA"],
        useTitleCover: true
    },
    {
        id: "auto-1770508800000-968",
        slug: "news-2026-02-08",
        title: "2026-02-08 위스키 뉴스: 변화하는 시장의 흐름",
        subtitle: "2026-02-08의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "2026-02-08",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: `## 2026-02-08 위스키 시장 리포트

오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

## 마치며

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`,
        tags: ["news", "update", "industry"],
    },
    {
        id: "auto-1770595200000-890",
        slug: "news-2026-02-09",
        title: "2026-02-09 위스키 뉴스: 변화하는 시장의 흐름",
        subtitle: "2026-02-09의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "2026-02-09",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: `## 2026-02-09 위스키 시장 리포트

오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

## 마치며

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`,
        tags: ["news", "update", "industry"],
    },
    {
        id: "auto-1770681600000-600",
        slug: "news-2026-02-10",
        title: "2026-02-10 위스키 뉴스: 변화하는 시장의 흐름",
        subtitle: "2026-02-10의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "2026-02-10",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: `## 2026-02-10 위스키 시장 리포트

오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

## 마치며

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`,
        tags: ["news", "update", "industry"],
    },
    {
        id: "auto-1770768000000-623",
        slug: "news-2026-02-11",
        title: "2026-02-11 위스키 뉴스: 변화하는 시장의 흐름",
        subtitle: "2026-02-11의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "2026-02-11",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: `## 2026-02-11 위스키 시장 리포트

오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

## 마치며

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`,
        tags: ["news", "update", "industry"],
    },
    {
        id: "auto-1770854400000-108",
        slug: "news-2026-02-12",
        title: "2026-02-12 위스키 뉴스: 변화하는 시장의 흐름",
        subtitle: "2026-02-12의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "2026-02-12",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: `## 2026-02-12 위스키 시장 리포트

오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.

## 변화의 물결

위스키 업계는 지금 중요한 전환점을 맞이하고 있습니다. 단순히 오래된 전통을 따르는 것이 아니라, 현대 소비자들의 기대에 부응하고 환경과 사회에 대한 책임을 다하려는 노력이 곳곳에서 보입니다.

## 마치며

다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`,
        tags: ["news", "update", "industry"],
    }
];

export { globalWhiskies as whiskies } from './global-data';
