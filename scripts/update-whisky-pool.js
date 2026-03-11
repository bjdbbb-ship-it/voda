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

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, retries = 3, interval = 2000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            console.log(`    ⚠️  오류 발생 (시도 ${i + 1}/${retries}): ${err.message}`);
            if (i === retries - 1) throw err;

            // 할당량 초과 오류인 경우 더 오래 대기
            let waitTime = interval * (i + 1);
            if (err.message.includes('quota') || err.message.includes('429')) {
                waitTime = 60000; // 60초 대기
                console.log(`    🛑 할당량 초과 감지. 60초 대기 후 재시도합니다...`);
            } else {
                console.log(`    ⏳ ${waitTime}ms 후 다시 시도합니다...`);
            }
            await delay(waitTime);
        }
    }
}

function normalizeName(name) {
    if (!name) return "";
    // "Macallan 18 Year Old / 맥캘란 18년" -> "macallan 18 year old"
    const englishPart = name.split('/')[0].trim().toLowerCase();
    return englishPart.replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

async function callSerperAPI(query) {
    return await retry(async () => {
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
        if (data.error) throw new Error(data.error.message);
        return JSON.stringify(data.organic.slice(0, 5));
    });
}

async function callSerperImagesAPI(query) {
    return await retry(async () => {
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
        if (data.error) throw new Error(data.error.message);
        return data.images || [];
    });
}

async function callGeminiAPI(prompt) {
    return await retry(async () => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) throw new Error('GEMINI_API_KEY is missing');

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    response_mime_type: "application/json",
                    temperature: 0.1
                }
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        const text = data.candidates[0].content.parts[0].text;
        return JSON.parse(text);
    });
}

async function main() {
    loadEnvLocal();
    console.log('🔍 최신 위스키 출시 정보 검색 중...');

    try {
        const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
        const poolContent = fs.readFileSync(poolPath, 'utf-8');

        const existingFullNames = [];
        const nameMatches = poolContent.matchAll(/name:\s*"([^"]+)"/g);
        for (const match of nameMatches) {
            existingFullNames.push(match[1]);
        }

        const existingNamesNormalized = existingFullNames.map(normalizeName);
        console.log(`📊 현재 풀에 ${existingFullNames.length}개의 위스키가 있습니다. (중복 방지 준비 완료)`);

        const dateArg = process.argv.find(arg => arg.startsWith('--date='));
        const targetDateStr = dateArg ? dateArg.split('=')[1] : new Date().toISOString().split('T')[0];
        const targetDate = new Date(targetDateStr);

        const monthYear = targetDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
        const searchQuery = `latest whisky releases ${monthYear} site:masterofmalt.com OR site:thewhiskyexchange.com OR site:whiskybase.com`;
        const searchResults = await callSerperAPI(searchQuery);

        const prompt = `당신은 세계적인 위스키 전문가이자 데이터 분석가입니다. 
다음 검색 결과를 바탕으로 Master of Malt, The Whisky Exchange, Whiskybase의 정보를 정확하게 반영하여 최신 위스키 10종의 데이터를 생성해주세요.

[중요: 중복 생성 금지 목록]
이미 데이터베이스에 존재하는 다음 위스키들은 절대 생성하지 마세요:
${existingFullNames.slice(-30).join(', ')}

검색 결과: ${searchResults}

[지침]
1. 각 위스키에 대해 다음 구조의 JSON 객체 배열을 만드세요:
{
  "id": "nw-${Date.now()}-순번",
  "name": "위스키 이름 및 숙성 연수 (영문 / 한글 병기, 예: Macallan 18 Year Old / 맥캘란 18년)",
  "type": "Single Malt, Blended 등 (한국어로 번역, 예: 싱글 몰트)",
  "region": "생산 지역 (한국어로 번역, 예: 아일라, 하이랜드 등)",
  "basePrice": 예상 글로벌 시장 가격 (USD 숫자만),
  "currency": "USD",
  "priceRange": "budget" | "mid" | "premium" | "luxury",
  "flavorProfile": { "peat": 0-10, "sweet": 0-10, "fruit": 0-10, "spice": 0-10, "body": 0-10 },
  "description": "품격 있는 한국어 위스키 설명 (최소 2문장 이상, 전문적인 풍미 묘사 포함)",
  "tags": ["태그1", "태그2", "브랜드명"]
}
2. 모든 텍스트(id, name 제외)는 한국어로 작성하세요.
3. 기존 목록에 있는 위스키와 이름이나 숙성 연수가 겹치지 않는 '정말 새로운' 제품을 선정하세요.
4. ID 생성 시 'nw' 접두어를 사용하세요.`;

        console.log('🤖 AI 데이터 생성 중...');
        const newWhiskies = await callGeminiAPI(prompt);

        if (!Array.isArray(newWhiskies)) {
            throw new Error('AI가 유효한 배열 형식을 반환하지 않았습니다.');
        }

        console.log('🖼️ 각 위스키별 정밀 이미지 매칭 시작...');
        for (const w of newWhiskies) {
            try {
                const englishName = w.name.split('/')[0].trim();
                console.log(`  - [${englishName}] 이미지 검색 중...`);

                const images = await callSerperImagesAPI(`${englishName} whisky bottle site:masterofmalt.com OR site:thewhiskyexchange.com`);
                await delay(1500);

                const imageValidationPrompt = `위스키 이름: "${w.name}"
다음 이미지 URL 목록 중에서 이 위스키와 **브랜드, 이름, 그리고 숙성 연수(Age)**가 가장 완벽하게 일치하는 공식 제품 이미지 URL 하나만 선택하세요.

[필수 검증 항목]
- 이름에 포함된 숫자(숙성 연수)가 URL이나 파일명에 정확히 일치해야 합니다. (예: 12년이면 12가 있어야 함)
- 에디션 명칭이 일치하는지 확인하세요.
- 배경이 없는 고해상도 병 이미지를 선호합니다.

URL 목록:
${images.map((img, i) => `${i + 1}. ${img.imageUrl}`).join('\n')}

적합한 이미지가 있다면 해당 URL만 JSON으로 반환하세요. 없으면 null을 반환하세요.
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

        const insertPos = poolContent.lastIndexOf('];');
        if (insertPos === -1) throw new Error(']; 형식을 찾을 수 없습니다.');

        let newEntries = '';
        let addedCount = 0;

        for (const w of newWhiskies) {
            const normalizedNewName = normalizeName(w.name);
            if (existingNamesNormalized.includes(normalizedNewName)) {
                console.log(`  - ⏩ [${w.name}] 이미 존재함. 건너뜁니다.`);
                continue;
            }

            if (addedCount === 0) {
                newEntries += '\n    // --- AI Generated New Releases ---';
            }

            addedCount++;
            newEntries += `\n    { 
        id: "${w.id}", name: "${w.name}", type: "${w.type}", region: "${w.region}", 
        basePrice: ${w.basePrice}, currency: "${w.currency}", priceRange: "${w.priceRange}",
        flavorProfile: ${JSON.stringify(w.flavorProfile)},
        description: "${w.description}",
        imageUrl: "${w.imageUrl || 'https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800'}",
        availableDate: "${targetDateStr}",
        tags: ${JSON.stringify(w.tags)}
    },\n`;
        }

        if (addedCount === 0) {
            console.log('✅ 추가할 새로운 위스키가 없습니다. (모두 중복)');
            return;
        }

        const updatedContent = poolContent.slice(0, insertPos) + newEntries + poolContent.slice(insertPos);
        fs.writeFileSync(poolPath, updatedContent, 'utf-8');

        console.log(`✅ 성공: ${addedCount}종의 신규 위스키가 풀에 추가되었습니다.`);

    } catch (error) {
        console.error('❌ 오류 발생:', error.message);
    }
}

main();
