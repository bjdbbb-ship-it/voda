import fs from 'fs';
import path from 'path';

// I'll import from the source files directly
// But wait, I can't easily import from them if they depend on data.ts which is currently broken.
// So I'll use a manual extraction or fix data.ts first.

const filePath = path.join(process.cwd(), 'src/lib/data.ts');

const head = `export interface FlavorProfile {
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
        content: \`
## 환영합니다!

위스키 매거진 VODA가 정식 서비스를 시작했습니다. 
이곳에서 당신만의 위스키 취향을 발견하고, 전 세계의 다양한 위스키 소식을 접해보세요.

매일 새로운 위스키 정보와 기사가 업데이트됩니다.\`,
        tags: ["공지", "위스키", "VODA"]
    }
];
`;

// To fix the "already declared" and "garbage" issues, I'll just write an EMPTY whiskies array first.
// Then I'll let the other script (global/pool) fill it?
// No, I'll do it here.

fs.writeFileSync(filePath, head + '\nexport const whiskies: Whisky[] = [];\n', 'utf8');
console.log('✅ data.ts 초기화 완료!');

async function runRecovery() {
    try {
        console.log('📦 원천 데이터 로드 시도...');
        // Note: global-data.ts and whisky-pool.ts import Whisky from data.ts
        // Since I just made data.ts valid (empty whiskies), these should load now!
        const { globalWhiskies } = await import('../src/lib/global-data.ts');
        const { whiskyPool } = await import('../src/lib/whisky-pool.ts');

        const allWhiskies = [...globalWhiskies, ...whiskyPool];
        const uniqueWhiskies = [];
        const seenIds = new Set();

        for (const w of allWhiskies) {
            if (w && w.id && !seenIds.has(w.id)) {
                uniqueWhiskies.push(w);
                seenIds.add(w.id);
            }
        }

        console.log(`Extracted ${uniqueWhiskies.length} unique whiskies from sources.`);

        const whiskiesJson = JSON.stringify(uniqueWhiskies, null, 4);
        // Note: JSON.stringify is not exactly the same as TS source (it doesn't have comments or unquoted keys), 
        // but it's valid TS for an array of objects.

        const finalContent = head + '\nexport const whiskies: Whisky[] = ' + whiskiesJson + ';\n';
        fs.writeFileSync(filePath, finalContent, 'utf8');
        console.log('✅ data.ts 가 원천 데이터로부터 완벽히 복구되었습니다!');

    } catch (e) {
        console.error('❌ Recovery failed:', e);
    }
}

runRecovery();
