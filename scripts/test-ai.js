const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testAI() {
    const apiKeys = [
        "AIzaSyD7mtQq9O0Q7NVRkitCN4L3CWAQYH1yM-8", // 신규 키
        "AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o"  // 백업 키
    ];

    for (const API_KEY of apiKeys) {
        console.log(`\n🔑 API 키 테스트 중: ${API_KEY.substring(0, 10)}...`);
        try {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const models = ["gemini-2.0-flash", "gemini-flash-latest", "gemini-1.5-flash"];

            let success = false;
            for (const modelName of models) {
                console.log(`  🔍 모델 테스트: ${modelName}`);
                try {
                    const model = genAI.getGenerativeModel({ model: modelName });
                    const result = await model.generateContent("위스키의 역사에 대해 짧게 한 문장으로 말해줘.");
                    const response = await result.response;
                    const text = response.text();
                    console.log(`   ✅ 성공: ${text.trim()}`);
                    success = true;
                    break;
                } catch (err) {
                    console.error(`   ❌ 실패 (${modelName}):`, err.message);
                }
            }
            if (success) {
                console.log(`\n✨ API 키 (${API_KEY.substring(0, 10)}...) 작동 확인 완료.`);
                return; // 성공했으므로 다른 키는 테스트하지 않음
            }
        } catch (error) {
            console.error(`❌ 키 (${API_KEY.substring(0, 10)}...) 테스트 중 치명적 오류:`, error.message);
        }
    }
    console.error('\n❌ 모든 API 키가 실패했습니다.');
}

testAI();
