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

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
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

async function translateField(field, text) {
    if (!text || text.match(/[가-힣]/)) return text;

    let roleDescription = '위스키 전문가';
    let styleDescription = '한국어 전문 위스키 매거진 스타일';

    if (field === 'tags') {
        styleDescription = '짧고 간결한 한국어 태그(키워드) 스타일';
    }

    const prompt = `당신은 ${roleDescription}입니다. 다음 위스키의 ${field} 정보를 ${styleDescription}로 번역해주세요.
자연스럽고 전문적인 용어를 사용하십시오.

번역할 ${field}: "${text}"

응답 형식: 번역된 한국어 텍스트만 출력하세요. (태그의 경우 콤마로 구분하지 말고 하나씩만 번역)`;

    try {
        const translated = await callGeminiAPI(prompt);
        return translated.trim().replace(/^"|"$/g, '');
    } catch (error) {
        console.error(`❌ ${field} 번역 실패:`, error.message);
        return text;
    }
}

async function processFile(filePath) {
    console.log(`\n📄 파일 처리 중: ${path.basename(filePath)}`);
    let content = fs.readFileSync(filePath, 'utf-8');

    const fieldsToTranslate = [
        { name: 'description', regex: /description:\s*"([^"]+)"/g },
        { name: 'type', regex: /type:\s*"([^"]+)"/g },
        { name: 'region', regex: /region:\s*"([^"]+)"/g }
    ];

    for (const field of fieldsToTranslate) {
        console.log(`🔍 ${field.name} 필드 검색 중...`);
        let match;
        const matches = [];
        const regex = new RegExp(field.regex); // Reset regex state

        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }

        for (const val of [...new Set(matches)]) {
            if (val.match(/[가-힣]/)) continue;

            console.log(`🔄 ${field.name} 번역 중: ${val}`);
            const translated = await translateField(field.name, val);

            if (translated !== val) {
                const escapedVal = val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const replaceRegex = new RegExp(`${field.name}:\\s*"${escapedVal}"`, 'g');
                content = content.replace(replaceRegex, `${field.name}: "${translated}"`);
                console.log(`✅ 완료: ${translated}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    // tags 번역 (배열 처리)
    console.log(`🔍 tags 필드 검색 중...`);
    const tagsRegex = /tags:\s*\[([^\]]+)\]/g;
    let match;
    const allTagsSegments = [];
    while ((match = tagsRegex.exec(content)) !== null) {
        allTagsSegments.push(match[1]);
    }

    for (const segment of [...new Set(allTagsSegments)]) {
        const individualTags = segment.split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
        let newSegment = segment;

        for (const tag of individualTags) {
            if (!tag || tag.match(/[가-힣]/)) continue;

            console.log(`🔄 tag 번역 중: ${tag}`);
            const translated = await translateField('tags', tag);

            if (translated !== tag) {
                const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const itemRegex = new RegExp(`(["'])${escapedTag}(["'])`, 'g');
                newSegment = newSegment.replace(itemRegex, `$1${translated}$2`);
            }
        }

        if (newSegment !== segment) {
            const escapedSegment = segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const segmentRegex = new RegExp(`tags:\\s*\\[${escapedSegment}\\]`, 'g');
            content = content.replace(segmentRegex, `tags: [${newSegment}]`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
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
    console.log('\n✨ 모든 데이터 한글화 고도화 완료!');
}

main();
