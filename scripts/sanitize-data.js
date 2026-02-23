import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/data.ts');
const rawContent = fs.readFileSync(filePath, 'utf8');

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

const whiskiesMap = new Map();

// A more robust object extractor using a stack to track braces
function extractObjects(content) {
    let results = [];
    let startPos = -1;
    let braceCount = 0;

    // We look for objects starting with { id: or {id:
    for (let i = 0; i < content.length; i++) {
        if (content[i] === '{') {
            if (braceCount === 0) {
                // Potential start of a whisky object
                // Look ahead to see if it starts with id:
                const lookAhead = content.substring(i, i + 50);
                if (/\{\s*"?id"?\s*:/.test(lookAhead)) {
                    startPos = i;
                    braceCount = 1;
                }
            } else {
                braceCount++;
            }
        } else if (content[i] === '}') {
            if (braceCount > 0) {
                braceCount--;
                if (braceCount === 0) {
                    // Potential end of an object
                    const objText = content.substring(startPos, i + 1);
                    // Minimal validation: must have name and type
                    if (objText.includes('name:') && objText.includes('type:')) {
                        results.push(objText);
                    }
                    startPos = -1;
                }
            }
        }
    }
    return results;
}

console.log('🔄 Extricating whiskies from the mess...');
const extracted = extractObjects(rawContent);
console.log(`Initial extraction found ${extracted.length} objects.`);

for (const objText of extracted) {
    // Extract ID using regex
    const idMatch = objText.match(/"?id"?\s*:\s*"([^"]+)"/);
    if (idMatch) {
        const id = idMatch[1];
        if (!whiskiesMap.has(id)) {
            // Normalize quotes and commas for each object to fix the previous corruption
            let normalized = objText;
            // Fix missing trailing quotes for properties
            const props = ['id', 'slug', 'title', 'subtitle', 'category', 'author', 'publishedAt', 'imageUrl', 'name', 'type', 'region', 'priceRange', 'currency', 'description', 'availableDate'];
            for (const prop of props) {
                const pRegex = new RegExp(`^(\\s+${prop}:\\s*)"([^"]+?)(?![^"]*")(.*)$`, 'm');
                if (pRegex.test(normalized)) {
                    normalized = normalized.replace(pRegex, (m, indent, k, v, suffix) => {
                        let cleanV = v.trim();
                        let cleanSuffix = suffix.trim() || ',';
                        if (!cleanSuffix.startsWith(',')) cleanSuffix = ',' + cleanSuffix;
                        return `${indent}${prop}: "${cleanV}"${cleanSuffix}`;
                    });
                }
            }
            whiskiesMap.set(id, normalized);
        }
    }
}

console.log(`Extracted ${whiskiesMap.size} unique valid whiskies.`);

const whiskiesArray = Array.from(whiskiesMap.values());
const finalWhiskies = whiskiesArray.join(',\n');
const finalContent = head + '\nexport const whiskies: Whisky[] = [\n' + finalWhiskies + '\n];\n';

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('✅ data.ts 가 정밀 복구되었습니다!');
