#!/usr/bin/env node

/**
 * 신규 위스키 소식 기사의 태그를 제목에 맞게 재생성하는 스크립트
 * 
 * 문제점:
 * 1. "신규 위스키 소식" 카테고리명이 태그에 중복으로 들어감
 * 2. 제목과 맞지 않는 일반적인 태그들이 자동 생성됨
 * 
 * 해결책:
 * 1. 카테고리명은 태그에서 제외
 * 2. 제목과 내용에서 핵심 키워드만 추출
 * 
 * 사용법:
 * node scripts/fix-news-tags.js
 */

const fs = require('fs');
const path = require('path');

// 제목에서 의미있는 키워드만 추출
function extractSmartKeywords(title, subtitle) {
    const keywords = new Set();

    const combined = `${title} ${subtitle}`.toLowerCase();

    // 위스키 타입
    if (combined.includes('버번') || combined.includes('bourbon')) keywords.add('버번');
    if (combined.includes('스카치') || combined.includes('scotch')) keywords.add('스카치');
    if (combined.includes('아이리쉬') || combined.includes('irish')) keywords.add('아이리쉬');
    if (combined.includes('일본') || combined.includes('japanese') || combined.includes('야마자키') || combined.includes('히비키')) keywords.add('일본위스키');
    if (combined.includes('라이') || combined.includes('rye')) keywords.add('라이위스키');
    if (combined.includes('아메리칸')) keywords.add('아메리칸위스키');

    // 주제 키워드
    if (combined.includes('트렌드') || combined.includes('혁신') || combined.includes('미래')) keywords.add('트렌드');
    if (combined.includes('가성비') || combined.includes('추천') || combined.includes('베스트')) keywords.add('추천');
    if (combined.includes('역사') || combined.includes('금주령') || combined.includes('prohibition')) keywords.add('역사');
    if (combined.includes('칵테일') || combined.includes('하이볼') || combined.includes('cocktail')) keywords.add('칵테일');
    if (combined.includes('페어링') || combined.includes('음식') || combined.includes('조화')) keywords.add('페어링');
    if (combined.includes('증류소') || combined.includes('스코틀랜드') || combined.includes('순례')) keywords.add('지역탐방');
    if (combined.includes('입문') || combined.includes('가이드') || combined.includes('초보') || combined.includes('beginner')) keywords.add('입문');
    if (combined.includes('투자') || combined.includes('컬렉팅') || combined.includes('경매') || combined.includes('auction')) keywords.add('컬렉팅');
    if (combined.includes('리뷰') || combined.includes('테이스팅') || combined.includes('노트')) keywords.add('리뷰');

    // 특정 주제
    if (combined.includes('피트') || combined.includes('스모키') || combined.includes('smoky')) keywords.add('피트');
    if (combined.includes('셰리') || combined.includes('sherry')) keywords.add('셰리');
    if (combined.includes('블렌딩') || combined.includes('블렌더') || combined.includes('레시피')) keywords.add('블렌딩');
    if (combined.includes('ai') || combined.includes('인공지능')) keywords.add('AI');
    if (combined.includes('지속가능') || combined.includes('친환경') || combined.includes('sustainability')) keywords.add('지속가능성');
    if (combined.includes('여름') || combined.includes('겨울') || combined.includes('계절')) keywords.add('계절');
    if (combined.includes('뉴스') || combined.includes('소식') || combined.includes('발표')) keywords.add('뉴스');

    // 특정 브랜드/지역
    if (combined.includes('맥켈란') || combined.includes('macallan')) keywords.add('맥켈란');
    if (combined.includes('아드벡') || combined.includes('ardbeg')) keywords.add('아드벡');
    if (combined.includes('라프로익') || combined.includes('laphroaig')) keywords.add('라프로익');
    if (combined.includes('아일라') || combined.includes('islay')) keywords.add('아일라');

    // 너무 적으면 "위스키" 추가
    if (keywords.size === 0) {
        keywords.add('위스키');
    }

    // 최대 5개로 제한
    return Array.from(keywords).slice(0, 5);
}

async function main() {
    try {
        console.log('🏷️  신규 위스키 소식 태그 정리 시작...\n');

        const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
        let dataContent = fs.readFileSync(dataFilePath, 'utf-8');

        // 신규 위스키 소식 카테고리의 기사 찾기
        const newsArticlePattern = /\{\s*id:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)",\s*category:\s*"신규 위스키 소식"[\s\S]*?tags:\s*(\[[^\]]+\])/g;

        const matches = [...dataContent.matchAll(newsArticlePattern)];

        console.log(`📊 신규 위스키 소식 기사: ${matches.length}개\n`);

        let updateCount = 0;

        matches.forEach(match => {
            const id = match[1];
            const title = match[3];
            const subtitle = match[4];
            const currentTags = match[5];

            // 새 태그 생성 (카테고리명 제외)
            const newTags = extractSmartKeywords(title, subtitle);
            const newTagsString = JSON.stringify(newTags);

            // 현재 태그와 다르면 업데이트
            if (currentTags !== newTagsString) {
                const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                // 해당 기사의 tags 부분만 교체
                const articleRegex = new RegExp(
                    `(id:\\s*"${escapedId}"[\\s\\S]*?tags:\\s*)\\[[^\\]]+\\]`,
                    'g'
                );

                dataContent = dataContent.replace(articleRegex, `$1${newTagsString}`);

                console.log(`✓ "${title.substring(0, 50)}..."`);
                console.log(`  이전: ${currentTags}`);
                console.log(`  변경: ${newTagsString}\n`);

                updateCount++;
            }
        });

        // 파일 저장
        fs.writeFileSync(dataFilePath, dataContent, 'utf-8');

        console.log(`\n✅ 작업 완료!`);
        console.log(`   업데이트된 기사: ${updateCount}개`);
        console.log(`   변경 없음: ${matches.length - updateCount}개\n`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error);
        console.error(error.stack);
        process.exit(1);
    }
}

main();
