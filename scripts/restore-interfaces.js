const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Article 인터페이스 강제 주입 (파일 맨 앞부터 첫 번째 배열 정의 전까지)
const articleInterface = `export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    content: string;
    tags: string[];
}

`;

// 기존의 깨진 Article 인터페이스 및 그 주변 정규화
content = content.replace(/^export interface Article \{[\s\S]*?\}\n\s*/, '');
content = articleInterface + content;

// 2. Whisky 인터페이스 강제 주입
const whiskyInterface = `export interface Whisky {
    id: string;
    name: string;
    type: string;
    region: string;
    priceRange: 'budget' | 'mid' | 'premium' | 'luxury';
    basePrice: number;
    currency: 'USD' | 'EUR';
    flavorProfile: {
        peat: number;
        sweet: number;
        fruit: number;
        spice: number;
        body: number;
    };
    visualProfile?: {
        bottleShape: 'tall' | 'stout' | 'square' | 'faceted' | 'ceramic' | 'standard';
        liquidColor: 'straw' | 'gold' | 'amber' | 'mahogany';
        glassColor: 'clear' | 'green' | 'brown' | 'opaque';
    };
    availableDate?: string;
    tags: string[];
    imageUrl: string;
    description: string;
}
`;

// 기존의 깨진 Whisky 인터페이스 영역 찾아서 교체
content = content.replace(/export interface Whisky \{[\s\S]*?\}\n/, whiskyInterface + '\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Interfaces restored successfully.');
