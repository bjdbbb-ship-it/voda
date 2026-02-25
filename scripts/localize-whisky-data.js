const fs = require('fs');
const path = require('path');

async function loadEnvLocal() {
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

async function callGeminiAPI(prompt) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is missing');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.candidates[0].content.parts[0].text;
}

async function translateDescription(text) {
    if (!text || text.match(/[가-힣]/)) return text; // 이미 한글이 포함되어 있으면 스킵

    const prompt = `당신은 위스키 전문가입니다. 다음 위스키 설명을 한국어 전문 위스키 매거진 스타일로 번역해주세요. 
자연스럽고 품격 있는 문체로 작성하십시오.

번역할 텍스트: "${text}"

응답 형식: 번역된 한국어 텍스트만 출력하세요.`;

    try {
        const translated = await callGeminiAPI(prompt);
        return translated.trim().replace(/^"|"$/g, '');
    } catch (error) {
        console.error('❌ 번역 실패:', error.message);
        return text;
    }
}

async function processFile(filePath) {
    console.log(`\n📄 파일 처리 중: ${path.basename(filePath)}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 정규식을 사용하여 description: "..." 부분을 찾아 번역
    // 주의: 단순 치환은 위험할 수 있으므로 조심스럽게 처리
    const descRegex = /description:\s*"([^"]+)"/g;
    let match;
    let newContent = content;
    const descriptions = [];

    while ((match = descRegex.exec(content)) !== null) {
        descriptions.push(match[1]);
    }

    console.log(`🔍 총 ${descriptions.length}개의 설명을 발견했습니다.`);

    for (const desc of descriptions) {
        if (desc.match(/[가-힣]/)) continue;

        console.log(`🔄 번역 중: ${desc.substring(0, 30)}...`);
        const translated = await translateDescription(desc);

        if (translated !== desc) {
            // 특수문자 이스케이프 처리
            const escapedDesc = desc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const replaceRegex = new RegExp(`description:\\s*"${escapedDesc}"`, 'g');
            newContent = newContent.replace(replaceRegex, `description: "${translated}"`);
            console.log(`✅ 번역 완료: ${translated.substring(0, 30)}...`);
        }
        // 할당량 관리를 위해 2초 대기
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`💾 ${path.basename(filePath)} 저장 완료.`);
}

async function main() {
    await loadEnvLocal();
    const targetFiles = [
        path.join(process.cwd(), 'src', 'lib', 'global-data.ts'),
        path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts')
    ];

    for (const file of targetFiles) {
        if (fs.existsSync(file)) {
            await processFile(file);
        }
    }
    console.log('\n✨ 모든 데이터 한글화 완료!');
}

main();
