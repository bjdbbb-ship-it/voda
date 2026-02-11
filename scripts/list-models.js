const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listAllModels() {
    try {
        console.log('📋 사용 가능한 모델 리스트 조회 중...');
        const apiKey = "AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o";
        const genAI = new GoogleGenerativeAI(apiKey);

        // v1beta의 listModels는 일반적인 fetch로 처리하는 것이 더 확실할 때가 있음
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.models) {
            console.log(`\n✅ 총 ${data.models.length}개의 모델을 찾았습니다:`);
            data.models.forEach(m => {
                console.log(`- ${m.name} (${m.displayName})`);
                console.log(`  지원 기능: ${m.supportedGenerationMethods.join(', ')}`);
            });
        } else {
            console.log('❌ 모델 리스트를 가져오지 못했습니다:', data);
        }
    } catch (error) {
        console.error('❌ 오류 발생:', error);
    }
}

listAllModels();
