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

async function callSerperImagesAPI(query) {
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) throw new Error('SERPER_API_KEY is missing');

    const response = await fetch('https://google.serper.dev/images', {
        method: 'POST',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ q: query, gl: 'us', hl: 'en', num: 10 })
    });
    const data = await response.json();
    return data.images || [];
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
        const today = new Date();
        const monthYear = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });
        const searchQuery = `latest whisky releases ${monthYear} site:masterofmalt.com OR site:thewhiskyexchange.com OR site:whiskybase.com`;
        const searchResults = await callSerperAPI(searchQuery);

        const prompt = `당신은 세계적인 위스키 전문가이자 데이터 분석가입니다. 
다음 검색 결과를 바탕으로 Master of Malt, The Whisky Exchange, Whiskybase의 정보를 정확하게 반영하여 최신 위스키 10종의 데이터를 생성해주세요.
검색 결과: ${searchResults}

[지침]
1. 각 위스키에 대해 다음 구조의 JSON 객체 배열을 만드세요:
{
  "id": "n${Date.now()}-순번",
  "name": "정확한 위스키 이름 및 숙성 연수 (영문/한글 병기, 예: Macallan 12 Year Old / 맥캘란 12년)",
  "type": "Single Malt, Blended, Bourbon 등",
  "region": "정확한 생산 지역 (예: Islay, Speyside, Kentucky 등)",
  "basePrice": 예상 글로벌 시장 가격 (USD 숫자만),
  "currency": "USD",
  "priceRange": "budget" | "mid" | "premium" | "luxury",
  "flavorProfile": { "peat": 0-10, "sweet": 0-10, "fruit": 0-10, "spice": 0-10, "body": 0-10 },
  "description": "품격 있는 한국어 위스키 설명 (전문 위스키 평론가 스타일로 작성, 해당 모델의 특징과 풍미를 상세히 기술)",
  "tags": ["태그1", "태그2", "브랜드명"],
  "imageUrl": "Master of Malt (www.masterofmalt.com) 또는 The Whisky Exchange (www.thewhiskyexchange.com)의 제품 이미지 URL을 최우선으로 찾아서 제공하세요. 이미지 URL은 반드시 위스키의 이름 및 숙성 연수와 정확히 일치해야 합니다."
}
2. 모든 설명은 고급스러운 한국어로 작성하세요.
3. 이미지 URL이 이름의 숙성 연수(Age)와 일치하는지 다시 한 번 검증하세요. (예: 18년 숙성 제품인데 12년 숙성 이미지를 가져오지 않도록 주의. URL에 포함된 숫자나 파일명을 꼼꼼히 확인하세요.)
4. 검색 결과에 없는 위스키는 생성하지 말고, 가장 신뢰도 높은 최신 출시 정보를 바탕으로 작성하세요.
5. 유니크한 ID 생성 시 'n' 접두어와 타임스탬프를 적절히 조합하세요.`;

        console.log('🤖 AI 데이터 생성 중...');
        const newWhiskies = await callGeminiAPI(prompt);

        if (!Array.isArray(newWhiskies)) {
            throw new Error('AI가 유효한 배열 형식을 반환하지 않았습니다.');
        }

        console.log('🖼️ 각 위스키별 정밀 이미지 매칭 시작...');
        for (const w of newWhiskies) {
            try {
                // 영문 이름만 추출하여 검색 (한글 섞여있을 수 있으므로)
                const englishName = w.name.split('/')[0].trim();
                console.log(`  - [${englishName}] 이미지 검색 중...`);

                const images = await callSerperImagesAPI(`${englishName} whisky bottle site:masterofmalt.com OR site:thewhiskyexchange.com`);

                const imageValidationPrompt = `위스키 이름: "${w.name}"
다음 이미지 URL 목록 중, 위스키의 브랜드와 숙성 연수(Age)가 가장 정확하게 일치하는 고해상도 제품 이미지 URL 하나만 선택하세요.
숙성 연수가 다르면 절대 선택하지 마세요. (예: 이름은 12년인데 URL에 18yo가 있으면 탈락)
URL 목록:
${images.map((img, i) => `${i + 1}. ${img.imageUrl}`).join('\n')}

적합한 이미지가 있다면 해당 URL만 JSON으로 반환하세요. 없으면 null을 반환하세요.:
{ "selectedUrl": "URL 또는 null" }`;

                const validationResult = await callGeminiAPI(imageValidationPrompt);
                if (validationResult.selectedUrl) {
                    w.imageUrl = validationResult.selectedUrl;
                    console.log(`    ✅ 매칭 성공: ${w.imageUrl}`);
                } else {
                    console.log(`    ⚠️ 적합한 이미지를 찾지 못함 (기본 이미지 사용)`);
                }
            } catch (imgErr) {
                console.error(`    ❌ 이미지 매칭 중 오류: ${imgErr.message}`);
            }
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
