#!/usr/bin/env node

/**
 * 자동 생성된 모든 기사의 카테고리를 "신규 위스키 소식"으로 변경하는 스크립트
 * 
 * 사용법:
 * node scripts/migrate-to-news-category.js
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🔄 자동 생성 기사 카테고리 마이그레이션 시작...\n');

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // "위스키 소식" 카테고리를 가진 모든 기사 패턴 찾기
        const articlePattern = /\{\s*id:\s*"[^"]+",[\s\S]*?category:\s*"위스키 소식"[\s\S]*?\}/gs;

        let changeCount = 0;
        let unchangedCount = 0;

        // 각 기사를 찾아서 카테고리 변경
        dataContent = dataContent.replace(articlePattern, (match) => {
            // 이미 "신규 위스키 소식" 카테고리인지 확인
            if (match.includes('category: "신규 위스키 소식"')) {
                unchangedCount++;
                return match;
            }

            // 카테고리 추출
            const categoryMatch = match.match(/category:\s*"([^"]+)"/);
            const oldCategory = categoryMatch ? categoryMatch[1] : 'unknown';

            // 카테고리를 "신규 위스키 소식"으로 변경
            const updated = match.replace(
                /category:\s*"[^"]+"/,
                'category: "신규 위스키 소식"'
            );

            console.log(`  ✓ 카테고리 변경: "${oldCategory}" → "신규 위스키 소식"`);
            changeCount++;

            return updated;
        });

        // 파일 저장
        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');

        console.log(`\n✅ 마이그레이션 완료!`);
        console.log(`   변경된 기사: ${changeCount}개`);
        console.log(`   이미 올바른 카테고리: ${unchangedCount}개`);
        console.log(`   총 자동 생성 기사: ${changeCount + unchangedCount}개\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
