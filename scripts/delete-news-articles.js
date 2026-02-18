#!/usr/bin/env node

/**
 * 신규 위스키 소식 카테고리의 모든 기사를 삭제하는 스크립트
 * 
 * 사용법:
 * node scripts/delete-news-articles.js
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🗑️  신규 위스키 소식 기사 삭제 시작...\n');

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // 신규 위스키 소식 카테고리의 기사 찾기
        const newsArticlePattern = /\{\s*id:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?category:\s*"신규 위스키 소식"[\s\S]*?\}/g;

        const matches = [...dataContent.matchAll(newsArticlePattern)];

        console.log(`📊 삭제할 기사: ${matches.length}개\n`);

        if (matches.length === 0) {
            console.log('ℹ️  삭제할 기사가 없습니다.\n');
            return;
        }

        // 각 기사 정보 출력
        matches.forEach((match, index) => {
            const title = match[3];
            console.log(`${index + 1}. "${title}"`);
        });

        console.log(`\n🗑️  ${matches.length}개의 기사를 삭제합니다...\n`);

        // 모든 신규 위스키 소식 기사 제거
        let updatedContent = dataContent;
        let deleteCount = 0;

        matches.forEach(match => {
            const id = match[1];
            const title = match[3];
            const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            // 전체 기사 객체 제거
            const pattern = new RegExp(
                `\\{\\s*id:\\s*"${escapedId}"[\\s\\S]*?\\}(?=\\s*,?\\s*(?:\\{|\\]))`,
                'g'
            );

            const beforeLength = updatedContent.length;
            updatedContent = updatedContent.replace(pattern, '');

            if (updatedContent.length < beforeLength) {
                deleteCount++;
                console.log(`  ✓ 삭제: "${title.substring(0, 60)}..."`);
            }
        });

        // 쉼표 정리
        updatedContent = updatedContent.replace(/,\s*,+/g, ',');
        updatedContent = updatedContent.replace(/\[\s*,/g, '[');
        updatedContent = updatedContent.replace(/,\s*\]/g, ']');
        updatedContent = updatedContent.replace(/,(\s*)\}/g, '$1}');

        // 파일 저장
        fs.writeFileSync(dataFilePath, updatedContent, 'utf-8');

        console.log(`\n✅ 작업 완료!`);
        console.log(`   삭제된 기사: ${deleteCount}개\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        console.error(error.stack);
        process.exit(1);
    }
}

main();
