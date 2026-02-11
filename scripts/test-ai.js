const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testAI() {
    try {
        console.log('🧪 Gemini API 연결 테스트 시작...');
        const apiKey = "AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o";
        const genAI = new GoogleGenerativeAI(apiKey);

        // 시도할 모델 목록 (v1beta 환경에서 유효한 명칭)
        const models = ["gemini-2.0-flash-exp", "gemini-1.5-pro-latest", "gemini-1.5-flash"];

        for (const modelName of models) {
            console.log(`\n🔍 모델 테스트: ${modelName}`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("위스키의 역사에 대해 짧게 한 문장으로 말해줘.");
                const response = await result.response;
                const text = response.text();
                console.log(` ✅ 성공: ${text.trim()}`);
                break; // 하나라도 성공하면 중단
            } catch (err) {
                console.error(` ❌ 실패 (${modelName}):`, err.message);
            }
        }
    } catch (error) {
        console.error('❌ 치명적 오류:', error);
    }
}

testAI();
