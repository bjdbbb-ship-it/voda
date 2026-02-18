#!/usr/bin/env node

/**
 * 중복 기사 제거 및 태그 자동 정리 스크립트
 * 
 * 기능:
 * 1. 제목이 중복된 기사 찾기 (최신 것만 유지)
 * 2. 각 기사의 태그를 제목과 카테고리에 맞게 자동 생성
 * 
 * 사용법:
 * node scripts/clean-and-tag-articles.js
 */

const fs = require('fs');
const path = require('path');

// 제목에서 키워드 추출하는 함수
function extractKeywordsFromTitle(title, category) {
    const keywords = new Set();

    // 카테고리 추가
    keywords.add(category);

    // 제목에서 키워드 추출
    const titleLower = title.toLowerCase();

    // 위스키 타입
    if (titleLower.includes('버번') || titleLower.includes('bourbon')) keywords.add('버번');
    if (titleLower.includes('스카치') || titleLower.includes('scotch')) keywords.add('스카치');
    if (titleLower.includes('아이리쉬') || titleLower.includes('irish')) keywords.add('아이리쉬');
    if (titleLower.includes('일본') || titleLower.includes('japanese')) keywords.add('일본위스키');
    if (titleLower.includes('라이') || titleLower.includes('rye')) keywords.add('라이위스키');

    // 주제
    if (titleLower.includes('트렌드') || titleLower.includes('혁신')) keywords.add('트렌드');
    if (titleLower.includes('가성비') || titleLower.includes('추천')) keywords.add('추천');
    if (titleLower.includes('역사') || titleLower.includes('금주령')) keywords.add('역사');
    if (titleLower.includes('칵테일') || titleLower.includes('하이볼')) keywords.add('칵테일');
    if (titleLower.includes('페어링') || titleLower.includes('음식')) keywords.add('페어링');
    if (titleLower.includes('증류소') || titleLower.includes('스코틀랜드')) keywords.add('지역탐방');
    if (titleLower.includes('입문') || titleLower.includes('가이드')) keywords.add('입문');
    if (titleLower.includes('투자') || titleLower.includes('컬렉팅') || titleLower.includes('경매')) keywords.add('컬렉팅');
    if (titleLower.includes('리뷰') || titleLower.includes('테이스팅')) keywords.add('리뷰');
    if (titleLower.includes('뉴스') || titleLower.includes('소식')) keywords.add('뉴스');

    // 특정 키워드
    if (titleLower.includes('피트') || titleLower.includes('스모키')) keywords.add('피트');
    if (titleLower.includes('셰리')) keywords.add('셰리');
    if (titleLower.includes('여름') || titleLower.includes('계절')) keywords.add('계절');
    if (titleLower.includes('아메리칸')) keywords.add('아메리칸위스키');
    if (titleLower.includes('블렌딩') || titleLower.includes('블렌더')) keywords.add('블렌딩');
    if (titleLower.includes('ai') || titleLower.includes('인공지능')) keywords.add('AI');
    if (titleLower.includes('지속가능') || titleLower.includes('친환경')) keywords.add('지속가능성');

    return Array.from(keywords);
}

async function main() {
    try {
        console.log('🔍 중복 기사 제거 및 태그 정리 시작...\n');

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // articles 배열 추출
        const articlesMatch = dataContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
        if (!articlesMatch) {
            throw new Error('articles 배열을 찾을 수 없습니다.');
        }

        // 간단한 파싱 (정규식 기반)
        const articlesText = articlesMatch[1];
        const articlePattern = /\{\s*id:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?category:\s*"([^"]+)",[\s\S]*?publishedAt:\s*"([^"]+)",[\s\S]*?tags:\s*(\[[^\]]+\])/g;

        const articles = [];
        let match;

        while ((match = articlePattern.exec(articlesText)) !== null) {
            articles.push({
                id: match[1],
                title: match[2],
                category: match[3],
                publishedAt: match[4],
                tags: match[5],
                fullMatch: match[0]
            });
        }

        console.log(`📊 총 ${articles.length}개의 기사를 찾았습니다.\n`);

        // 중복 제목 찾기
        const titleMap = new Map();
        const duplicates = [];

        articles.forEach(article => {
            if (titleMap.has(article.title)) {
                duplicates.push({
                    title: article.title,
                    existing: titleMap.get(article.title),
                    duplicate: article
                });
            } else {
                titleMap.set(article.title, article);
            }
        });

        console.log(`🔍 중복 제목 발견: ${duplicates.length}개\n`);

        // 중복 제거 (최신 날짜 유지)
        const toRemove = new Set();
        duplicates.forEach(dup => {
            const existingDate = new Date(dup.existing.publishedAt);
            const duplicateDate = new Date(dup.duplicate.publishedAt);

            if (duplicateDate > existingDate) {
                // 중복이 더 최신이면 기존 것 제거
                toRemove.add(dup.existing.id);
                titleMap.set(dup.title, dup.duplicate);
                console.log(`  ❌ 제거: "${dup.title}" (${dup.existing.publishedAt}) - 더 최신 버전 유지`);
            } else {
                // 기존이 더 최신이면 중복 제거
                toRemove.add(dup.duplicate.id);
                console.log(`  ❌ 제거: "${dup.title}" (${dup.duplicate.publishedAt}) - 기존 버전 유지`);
            }
        });

        // 태그 자동 생성 및 업데이트
        console.log(`\n🏷️  태그 자동 생성 중...\n`);

        let updatedContent = dataContent;
        let tagUpdateCount = 0;

        articles.forEach(article => {
            // 제거할 기사는 건너뛰기
            if (toRemove.has(article.id)) return;

            // 새 태그 생성
            const newTags = extractKeywordsFromTitle(article.title, article.category);
            const newTagsString = JSON.stringify(newTags);

            // 기존 태그와 비교
            if (article.tags !== newTagsString) {
                // 해당 기사의 tags 부분만 교체
                const escapedId = article.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const articleRegex = new RegExp(
                    `(id:\\s*"${escapedId}"[\\s\\S]*?tags:\\s*)\\[[^\\]]+\\]`,
                    'g'
                );

                updatedContent = updatedContent.replace(articleRegex, `$1${newTagsString}`);
                tagUpdateCount++;
                console.log(`  ✓ 태그 업데이트: "${article.title.substring(0, 40)}..."`);
            }
        });

        // 중복 기사 제거
        if (toRemove.size > 0) {
            console.log(`\n🗑️  중복 기사 제거 중...\n`);

            toRemove.forEach(id => {
                const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // 전체 기사 객체 제거 (쉼표 처리 포함)
                const removePattern = new RegExp(
                    `,?\\s*\\{\\s*id:\\s*"${escapedId}"[\\s\\S]*?\\},?`,
                    'g'
                );
                updatedContent = updatedContent.replace(removePattern, ',');
            });

            // 연속된 쉼표 정리
            updatedContent = updatedContent.replace(/,\s*,/g, ',');
            updatedContent = updatedContent.replace(/\[\s*,/g, '[');
            updatedContent = updatedContent.replace(/,\s*\]/g, ']');
        }

        // 파일 저장
        fs.writeFileSync(dataFilePath, updatedContent, 'utf-8');

        console.log(`\n✅ 작업 완료!`);
        console.log(`   제거된 중복 기사: ${toRemove.size}개`);
        console.log(`   태그 업데이트: ${tagUpdateCount}개`);
        console.log(`   최종 기사 수: ${articles.length - toRemove.size}개\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        process.exit(1);
    }
}

main();
