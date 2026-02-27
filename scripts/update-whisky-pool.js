const fs = require('fs');
const path = require('path');

function loadEnvLocal() {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const eqIdx = line.indexOf('=');
            if (eqIdx > 0) {
                const key = line.substring(0, eqIdx).trim();
                const value = line.substring(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
                if (key) process.env[key] = value;
            }
        });
    }
}

async function callSerperAPI(query) {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) throw new Error('SERPER_API_KEY is missing');

    const response = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ q: query, gl: 'us', hl: 'en' })
    });
    const data = await response.json();
    return JSON.stringify(data.organic.slice(0, 5));
}

async function callGeminiAPI(prompt) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is missing');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { response_mime_type: "application/json" }
        })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    const text = data.candidates[0].content.parts[0].text;
    return JSON.parse(text);
}

async function main() {
    loadEnvLocal();
    console.log('🔍 최신 위스키 출시 정보 검색 중...');

    try {
        const searchResults = await callSerperAPI('latest whisky releases February 2026 Whiskybase The Whisky Exchange Master of Malt');

        const prompt = `다음 검색 결과를 바탕으로 최신 위스키 5종의 데이터를 생성해주세요.
검색 결과: ${searchResults}

[지침]
1. 각 위스키에 대해 다음 구조의 JSON 객체 배열을 만드세요:
{
  id: "n${Date.now()}-순번",
  name: "위스키 이름 (영문/한글 병기 권장)",
  type: "Single Malt, Bourbon 등",
  region: "생산 지역",
  basePrice: 예상 가격 (USD 숫자만),
  currency: "USD",
  priceRange: "budget" | "mid" | "premium" | "luxury",
  flavorProfile: { peat: 0-10, sweet: 0-10, fruit: 0-10, spice: 0-10, body: 0-10 },
  description: "품격 있는 한국어 위스키 설명 (전문 매거진 스타일)",
  tags: ["태그1", "태그2"],
  imageUrl: "가능하면 관련성 높은 Unsplash 위스키 이미지 URL (없으면 기본값 사용)"
}
2. 모든 설명은 한국어로 작성하세요.
3. 중복되지 않는 새로운 위스키만 선정하세요.`;

        console.log('🤖 AI 데이터 생성 중...');
        const newWhiskies = await callGeminiAPI(prompt);

        if (!Array.isArray(newWhiskies)) {
            throw new Error('AI가 유효한 배열 형식을 반환하지 않았습니다.');
        }

        const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
        let content = fs.readFileSync(poolPath, 'utf-8');

        // 마지막 ]; 앞에 추가
        const insertPos = content.lastIndexOf('];');
        if (insertPos === -1) throw new Error(']; 형식을 찾을 수 없습니다.');

        let newEntries = '\n    // --- AI Generated New Releases ---\n';
        for (const w of newWhiskies) {
            newEntries += `    { 
        id: "${w.id}", name: "${w.name}", type: "${w.type}", region: "${w.region}", 
        basePrice: ${w.basePrice}, currency: "${w.currency}", priceRange: "${w.priceRange}",
        flavorProfile: ${JSON.stringify(w.flavorProfile)},
        description: "${w.description}",
        imageUrl: "${w.imageUrl || 'https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800'}",
        availableDate: "${new Date().toISOString().split('T')[0]}",
        tags: ${JSON.stringify(w.tags)}
    },\n`;
        }

        const updatedContent = content.slice(0, insertPos) + newEntries + content.slice(insertPos);
        fs.writeFileSync(poolPath, updatedContent, 'utf-8');

        console.log(`✅ 성공: ${newWhiskies.length}종의 신규 위스키가 풀에 추가되었습니다.`);

    } catch (error) {
        console.error('❌ 오류 발생:', error.message);
    }
}

main();
