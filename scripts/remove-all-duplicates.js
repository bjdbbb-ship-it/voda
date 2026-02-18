#!/usr/bin/env node

/**
 * 중복 기사 완전 제거 스크립트 (개선 버전)
 * 
 * 사용법:
 * node scripts/remove-all-duplicates.js
 */

const fs = require('fs');
const path = require('path');

async function main() {
    try {
        console.log('🔍 중복 기사 완전 제거 시작...\n');

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // 모든 기사 객체를 추출 (더 정확한 방법)
        const articleMatches = [...dataContent.matchAll(/\{\s*id:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*author:\s*"([^"]+)",\s*publishedAt:\s*"([^"]+)"/g)];

        const articles = articleMatches.map(match => ({
            id: match[1],
            slug: match[2],
            title: match[3],
            subtitle: match[4],
            category: match[5],
            author: match[6],
            publishedAt: match[7]
        }));

        console.log(`📊 총 ${articles.length}개의 기사를 찾았습니다.\n`);

        // 제목별로 그룹화
        const titleGroups = new Map();
        articles.forEach(article => {
            if (!titleGroups.has(article.title)) {
                titleGroups.set(article.title, []);
            }
            titleGroups.get(article.title).push(article);
        });

        // 중복 찾기
        const duplicateGroups = Array.from(titleGroups.entries())
            .filter(([title, group]) => group.length > 1);

        console.log(`🔍 중복된 제목: ${duplicateGroups.length}개\n`);

        if (duplicateGroups.length === 0) {
            console.log('✅ 중복 기사가 없습니다!\n');
            return;
        }

        // 각 중복 그룹에서 최신 것만 유지
        const toRemove = new Set();

        duplicateGroups.forEach(([title, group]) => {
            console.log(`\n📝 "${title}"`);
            console.log(`   중복 개수: ${group.length}개`);

            // 날짜순 정렬 (최신이 먼저)
            group.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            // 첫 번째(최신)만 유지, 나머지는 제거
            const keep = group[0];
            const remove = group.slice(1);

            console.log(`   ✓ 유지: ${keep.publishedAt} (ID: ${keep.id})`);
            remove.forEach(article => {
                console.log(`   ❌ 제거: ${article.publishedAt} (ID: ${article.id})`);
                toRemove.add(article.id);
            });
        });

        console.log(`\n🗑️  총 ${toRemove.size}개의 중복 기사를 제거합니다...\n`);

        // 중복 기사 제거
        let updatedContent = dataContent;
        let removeCount = 0;

        toRemove.forEach(id => {
            // ID를 정규식에서 안전하게 사용
            const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            // 해당 ID의 전체 기사 객체 찾기 및 제거
            const pattern = new RegExp(
                `\\{\\s*id:\\s*"${escapedId}"[\\s\\S]*?\\}(?=\\s*,?\\s*(?:\\{|\\]))`,
                'g'
            );

            const beforeLength = updatedContent.length;
            updatedContent = updatedContent.replace(pattern, '');

            if (updatedContent.length < beforeLength) {
                removeCount++;
                console.log(`  ✓ 제거 완료: ${id}`);
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
        console.log(`   제거된 기사: ${removeCount}개`);
        console.log(`   최종 기사 수: ${articles.length - removeCount}개\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        console.error(error.stack);
        process.exit(1);
    }
}

main();
