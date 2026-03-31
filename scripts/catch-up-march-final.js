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
    console.log('🔄 3월 밀린 위스키 추천 데이터 업데이트 시작 (3/12 ~ 3/31)\n');
    
    for (let i = 12; i <= 31; i++) {
        const date = `2026-03-${i.toString().padStart(2, '0')}`;
        runCommand(`cmd.exe /c npx tsx scripts/generateDailyWhiskies.js --date=${date}`);
    }

    console.log('🔄 3월 밀린 뉴스/기사 데이터 업데이트 시작 (3/24 ~ 3/31)\n');
    for (let i = 24; i <= 31; i++) {
        const date = `2026-03-${i.toString().padStart(2, '0')}`;
        console.log(`\n\n======================================================`);
        console.log(`📅 [${date}] 기사 데이터 업데이트 진행 중...`);
        console.log(`======================================================\n`);
        
        runCommand(`cmd.exe /c npx tsx scripts/generateDailyArticle.js --date=${date}`);
        
        console.log('⏳ API 호출 제한(Rate Limit)을 막기 위해 잠시 대기합니다 (20초)...');
        await new Promise(res => setTimeout(res, 20000));
        
        runCommand(`cmd.exe /c npx tsx scripts/generateNewsArticle.js --date=${date}`);
        
        console.log('⏳ 다음 일자 처리를 위해 잠시 대기합니다 (30초)...');
        await new Promise(res => setTimeout(res, 30000));
    }
    console.log('\n✨ 모든 업데이트가 완료되었습니다!');
}
main();
