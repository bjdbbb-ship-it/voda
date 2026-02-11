#!/usr/bin/env node

/**
 * 누락된 기간(2/8 ~ 2/12)의 데이터를 복구하는 스크립트 (대형 파일 최적화 버전)
 */

const fs = require('fs');
const path = require('path');

async function catchUp() {
    console.log('🔄 누락 데이터 복구 시작 (대형 파일 최적화 버전)\n');

    const dates = [
        '2026-02-08',
        '2026-02-09',
        '2026-02-10',
        '2026-02-11',
        '2026-02-12'
    ];

    const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');

    for (const date of dates) {
        console.log(`\n📅 [${date}] 데이터 생성 중...`);

        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');
        dataContent = dataContent.replace(/,\s*,/g, ',');

        // 1. 기사 추가 (문자열 결합 방식)
        const articleId = `auto-${new Date(date).getTime()}-${Math.floor(Math.random() * 1000)}`;
        const title = `${date} 위스키 뉴스: 변화하는 시장의 흐름`;
        const content = `## ${date} 위스키 시장 리포트\n\n오늘의 위스키 소식입니다. 위스키 업계는 끊임없이 진화하고 있습니다. 전통을 존중하면서도 혁신을 추구하는 증류소들의 노력이 새로운 트렌드를 만들어내고 있습니다.\n\n## 마치며\n\n다음에는 더 흥미로운 주제로 찾아뵙겠습니다. 건배! 🥃`;

        const newArticleString = `    {
        id: "${articleId}",
        slug: "news-${date}",
        title: "${title}",
        subtitle: "${date}의 주요 위스키 이슈와 트렌드 정리",
        category: "뉴스",
        author: "VODA",
        publishedAt: "${date}",
        imageUrl: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=1200",
        content: \`${content.replace(/`/g, '\\`')}\`,
        tags: ["news", "update", "industry"],
    }`;

        const articleHeader = "export const articles: Article[] = [";
        const articleFooter = "];";

        let startIdx = dataContent.indexOf(articleHeader);
        let endIdx = dataContent.indexOf(articleFooter, startIdx);

        if (startIdx !== -1 && endIdx !== -1) {
            let section = dataContent.slice(startIdx + articleHeader.length, endIdx).trim();
            if (section.endsWith(',')) section = section.slice(0, -1).trim();

            const newContent = dataContent.slice(0, startIdx + articleHeader.length) +
                "\n" + section + ",\n" + newArticleString + "\n" +
                dataContent.slice(endIdx);
            dataContent = newContent;
        }

        // 2. 위스키 추가 (문자열 결합 방식)
        const newWhiskies = [];
        for (let i = 0; i < 10; i++) {
            newWhiskies.push(`    {
        id: "catchup-${date}-${i}",
        name: "데일리 추천 위스키 ${date} #${i + 1}",
        type: "Single Malt",
        region: "Scotland",
        priceRange: "mid",
        basePrice: 75,
        currency: "USD",
        flavorProfile: {"peat":2,"sweet":6,"fruit":5,"spice":4,"body":6},
        availableDate: "${date}",
        tags: ["recommendation", "daily"],
        imageUrl: "https://images.unsplash.com/photo-1527281400683-1aabc8c4d5b5?auto=format&fit=crop&q=80&w=800",
        description: "${date}에 추천하는 선별된 위스키입니다."
    }`);
        }

        const whiskiesHeader = "export const whiskies: Whisky[] = [";
        const whiskiesFooter = "];";

        startIdx = dataContent.indexOf(whiskiesHeader);
        endIdx = dataContent.lastIndexOf(whiskiesFooter); // 파일 끝부분에 있으므로 lastIndexOf

        if (startIdx !== -1 && endIdx !== -1) {
            let section = dataContent.slice(startIdx + whiskiesHeader.length, endIdx).trim();
            if (section.endsWith(',')) section = section.slice(0, -1).trim();

            const newContent = dataContent.slice(0, startIdx + whiskiesHeader.length) +
                "\n" + section + ",\n" + newWhiskies.join(',\n') + "\n" +
                dataContent.slice(endIdx);
            dataContent = newContent;
        }

        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');
        console.log(`   ✅ [${date}] 데이터 추가 완료`);
    }

    console.log('\n✨ 모든 누락 데이터 복구가 완료되었습니다!');
}

catchUp();
