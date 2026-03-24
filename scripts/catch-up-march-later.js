const { execSync } = require('child_process');

function runCommand(command) {
    console.log(`\n▶️ 실행: ${command}`);
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`\n❌ 명령어 실패: ${command}`);
        console.error(`오류 메시지: ${error.message}`);
        console.warn('⚠️ 스크립트 실행을 계속 진행합니다.\n');
    }
}

async function main() {
    console.log('🔄 3월 밀린 데이터 일괄 업데이트 시작 (3/16 ~ 3/25)\n');
    
    const dates = [
        '2026-03-16', '2026-03-17', '2026-03-18', '2026-03-19', '2026-03-20',
        '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25'
    ];

    for (const date of dates) {
        console.log(`\n\n======================================================`);
        console.log(`📅 [${date}] 데이터 업데이트 진행 중...`);
        console.log(`======================================================\n`);
        
        runCommand(`cmd.exe /c npx tsx scripts/generateDailyWhiskies.js --date=${date}`);
        
        runCommand(`cmd.exe /c npx tsx scripts/generateDailyArticle.js --date=${date}`);
        
        console.log('⏳ API 호출 제한(Rate Limit)을 막기 위해 잠시 대기합니다 (20초)...');
        await new Promise(res => setTimeout(res, 20000));
        
        runCommand(`cmd.exe /c npx tsx scripts/generateNewsArticle.js --date=${date}`);
        
        console.log('⏳ 다음 일자 처리를 위해 잠시 대기합니다 (30초)...');
        await new Promise(res => setTimeout(res, 30000));
    }
    
    console.log('\n✨ 모든 업데이트가 완료되었습니다! 웹사이트에서 결과를 확인해 보세요.');
}

main();
