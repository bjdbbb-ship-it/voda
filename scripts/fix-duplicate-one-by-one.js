const fs = require('fs');
const path = require('path');

async function fixOneByOne() {
    const apiKey = 'AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o';
    const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

    console.log('🚀 기사 일대일 복구 작업 고도화 버전 시작...');

    while (true) {
        let dataContent = fs.readFileSync(dataFilePath, 'utf8');
        const articlesRegex = /export const articles: Article\[\] = \[([\s\S]*?)\];/;
        const articlesMatch = dataContent.match(articlesRegex);
        if (!articlesMatch) break;

        // eval은 위험할 수 있으므로 간단한 파싱 시도 (또는 임포트 활용)
        // 여기서는 안전을 위해 기존에 작동하던 eval 패턴 사용
        let articles = eval(`[${articlesMatch[1]}]`);

        const target = articles.find(a => a.content.includes('위스키의 세계는 끊임없이 진화하고 있습니다.'));
        if (!target) {
            console.log('✨ 모든 중복 기사 복구 완료!');
            break;
        }

        console.log(`\n💎 [대상] ${target.title} 생성 시도 중...`);

        try {
            const prompt = `당신은 프리미엄 위스키 매거진 'VODA'의 시니어 라이터입니다. 주제 '${target.title}' (부제: ${target.subtitle})에 대해 아주 풍성하고 가치 있는 전문적인 한국어 마크다운 기사 본문을 작성해 주세요. 1500자 이상으로 깊이 있게 다뤄주세요. 마지막에는 "건배! 🥃" 인사를 포함하세요.`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            const result = await response.json();
            if (result.candidates && result.candidates[0].content) {
                const newContent = result.candidates[0].content.parts[0].text;

                // 해당 기사만 교체
                articles = articles.map(a => a.id === target.id ? { ...a, content: newContent } : a);

                // 파일 재구성 및 쓰기
                const updatedStr = articles.map(a => `    {
        id: "${a.id}",
        slug: "${a.slug}",
        title: "${a.title}",
        subtitle: "${a.subtitle}",
        category: "${a.category}",
        author: "${a.author}",
        publishedAt: "${a.publishedAt}",
        imageUrl: "${a.imageUrl}",
        content: \`${a.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
        tags: ${JSON.stringify(a.tags)},
    }`).join(',\n');

                const newArticlesSection = `export const articles: Article[] = [\n${updatedStr}\n];`;
                dataContent = dataContent.replace(articlesRegex, newArticlesSection);
                fs.writeFileSync(dataFilePath, dataContent, 'utf8');

                console.log(`✅ [성공] ${target.title} (${newContent.length} 자)`);
                console.log('😴 할당량 보호를 위해 60초간 대기...');
                await new Promise(resolve => setTimeout(resolve, 60000));
            } else {
                console.log('⚠️ [실패] API 응답에 콘텐츠가 없습니다. (재시도 예정)');
                console.log('상세 오류:', JSON.stringify(result));
                await new Promise(resolve => setTimeout(resolve, 120000)); // 실패 시 2분 대기
            }
        } catch (err) {
            console.error('❌ [오류]', err.message);
            await new Promise(resolve => setTimeout(resolve, 120000));
        }
    }
}

fixOneByOne();
