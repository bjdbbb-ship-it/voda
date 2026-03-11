async function testFlashNative() {
    const apiKeys = [
        "AIzaSyD7mtQq9O0Q7NVRkitCN4L3CWAQYH1yM-8", // 신규 키
        "AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o"  // 백업 키
    ];

    console.log('🧪 Gemini Pro (1.0) Native Fetch 테스트...');

    for (const API_KEY of apiKeys) {
        console.log(`\n🔑 API 키 테스트 중: ${API_KEY.substring(0, 10)}...`);
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: "안녕? 반가워!" }] }]
                })
            });

            const data = await response.json();
            if (response.ok) {
                console.log(' ✅ 성공:', data.candidates[0].content.parts[0].text);
                return;
            } else {
                console.error(' ❌ 실패:', data.error?.message || response.statusText);
            }
        } catch (error) {
            console.error(' ❌ 오류:', error.message);
        }
    }
}

testFlashNative();
