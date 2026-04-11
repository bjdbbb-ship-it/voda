#!/usr/bin/env node

/**
 * 2026-03-30 ~ 2026-04-11 기간의 누락된 데이터를 일괄 생성하는 캐치업 스크립트
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runCommand(scriptPath, args) {
    const tsxPath = path.join(process.cwd(), 'node_modules', 'tsx', 'dist', 'cli.mjs');
    const command = `node "${tsxPath}" ${scriptPath} ${args}`;
    console.log(`\nExecuting: ${command}`);
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        console.error(error.message);
    }
}

async function main() {
    console.log('🚀 4월 위스키 매거진 캐치업 작업 시작...\n');

    const startDate = new Date('2026-03-30');
    const endDate = new Date('2026-04-11');
    const dates = [];

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d).toISOString().split('T')[0]);
    }

    console.log(`📅 대상 날짜: ${dates.join(', ')} (${dates.length}일)\n`);

    for (const date of dates) {
        console.log(`\n-----------------------------------------`);
        console.log(`📅 [${date}] 작업 진행 중...`);
        console.log(`-----------------------------------------`);

        // 1. 일일 기사 생성
        console.log(`📝 [${date}] 일일 기사 생성 중...`);
        await runCommand('scripts/generateDailyArticle.js', `--date=${date}`);

        // 2. 뉴스 기사 생성
        console.log(`📰 [${date}] 뉴스 기사 생성 중...`);
        await runCommand('scripts/generateNewsArticle.js', `--date=${date}`);

        // 3. 데일리 위스키 업데이트 (availableDate 갱신)
        console.log(`🥃 [${date}] 데일리 위스키 업데이트 중...`);
        await runCommand('scripts/generateDailyWhiskies.js', `--date=${date}`);

        console.log(`\n✅ [${date}] 모든 작업 완료!`);
    }

    console.log('\n✨ [모든 날짜] 캐치업 작업이 성공적으로 완료되었습니다!');
}

main();
