const apiKey = 'AIzaSyC0FuMOgWuHi1jWDJVqsOHo6LARqLgpy9o';

async function testFlashNative() {
    console.log('🧪 Gemini Pro (1.0) Native Fetch 테스트...');
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "위스키와인차이점한문장소개" }] }]
            })
        });

        if (!response.ok) {
            console.log('❌ Status:', response.status);
            const text = await response.text();
            console.log('❌ Error:', text);
        } else {
            const data = await response.json();
            console.log('✅ 성공:', data.candidates[0].content.parts[0].text);
        }
    } catch (err) {
        console.error('❌ Exception:', err.message);
    }
}

testFlashNative();
