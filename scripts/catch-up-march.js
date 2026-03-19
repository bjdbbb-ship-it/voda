const { execSync } = require('child_process');

function runCommand(command) {
    console.log(`\n▶️ 실행: ${command}`);
    try {
        // execSync throws an error on non-zero exit code
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`\n❌ 명령어 실패: ${command}`);
        console.error(`오류 메시지: ${error.message}`);
        console.warn('⚠️ 스크립트 실행을 계속 진행합니다.\n');
    }
}

async function main() {
    console.log('🔄 3월 밀린 데이터 일괄 업데이트 시작 (3/10 ~ 3/19)\n');
    
    // 누락된 날짜 리스트
    const dates = [
        '2026-03-10', '2026-03-11', '2026-03-12', '2026-03-13',
        '2026-03-14', '2026-03-15', '2026-03-16', '2026-03-17',
        '2026-03-18', '2026-03-19'
    ];

    for (const date of dates) {
        console.log(`\n\n======================================================`);
        console.log(`📅 [${date}] 데이터 업데이트 진행 중...`);
        console.log(`======================================================\n`);
        
        // 1. 위스키 평가 데이터 10개 갱신
        runCommand(`npx tsx scripts/generateDailyWhiskies.js --date=${date}`);
        
        // 2. 일일 매거진 아티클
        runCommand(`npx tsx scripts/generateDailyArticle.js --date=${date}`);
        
        console.log('⏳ API 호출 제한(Rate Limit)을 막기 위해 잠시 대기합니다 (15초)...');
        await new Promise(res => setTimeout(res, 15000));
        
        // 3. 글로벌 뉴스 아티클
        runCommand(`npx tsx scripts/generateNewsArticle.js --date=${date}`);
        
        console.log('⏳ 다음 일자 처리를 위해 잠시 대기합니다 (15초)...');
        await new Promise(res => setTimeout(res, 15000));
    }
    
    console.log('\n✨ 모든 업데이트가 완료되었습니다! 웹사이트에서 결과를 확인해 보세요.');
}

main();
