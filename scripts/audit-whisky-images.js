const fs = require('fs');
const path = require('path');

/**
 * 위스키 이름에서 숙성 연수(Age)를 추출합니다.
 */
function extractAge(name) {
    const ageMatch = name.match(/(\d+)\s*(Year|Yr|년)/i);
    return ageMatch ? ageMatch[1] : null;
}

/**
 * 이미지 URL에서 숫자를 추출하여 이름의 연수와 비교합니다.
 */
function checkImageConsistency(whisky) {
    const nameAge = extractAge(whisky.name);
    if (!nameAge) return { ok: true };

    const url = whisky.imageUrl || "";
    const agePattern = new RegExp(`(\\D|^)${nameAge}(\\D|$)`);

    // URL에 이름의 연수가 포함되어 있는지 확인
    const hasCorrectAgeInUrl = agePattern.test(url);

    // 만약 URL에 다른 연수가 포함되어 있다면 경고 (예: 18년인데 12가 있는 경우)
    const otherAges = [10, 12, 15, 18, 21, 25, 30].filter(a => a.toString() !== nameAge);
    const hasWrongAgeInUrl = otherAges.some(a => {
        const wrongAgePattern = new RegExp(`(\\D|^)${a}(\\D|$)`);
        return wrongAgePattern.test(url);
    });

    if (hasWrongAgeInUrl && !hasCorrectAgeInUrl) {
        return { ok: false, reason: `Name says ${nameAge}, but URL likely points to another age.` };
    }

    return { ok: true };
}

function auditFile(filePath) {
    console.log(`\n🔍 Auditing: ${path.basename(filePath)}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 간단한 정규식으로 위스키 객체 추출 (완벽하진 않으나 검수용)
    const whiskyBlocks = content.split(/\{\s*id:/).slice(1);

    let issuesFound = 0;
    whiskyBlocks.forEach(block => {
        const idMatch = block.match(/"([^"]+)"/);
        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        const urlMatch = block.match(/imageUrl:\s*"([^"]+)"/);

        if (idMatch && nameMatch && urlMatch) {
            const whisky = {
                id: idMatch[1],
                name: nameMatch[1],
                imageUrl: urlMatch[1]
            };
            const result = checkImageConsistency(whisky);
            if (!result.ok) {
                console.log(`❌ [Issue] ID: ${whisky.id} | Name: ${whisky.name}`);
                console.log(`   URL: ${whisky.imageUrl}`);
                console.log(`   Reason: ${result.reason}`);
                issuesFound++;
            }
        }
    });

    if (issuesFound === 0) {
        console.log('✅ No obvious image inconsistencies found.');
    } else {
        console.log(`⚠️ Found ${issuesFound} potential issues.`);
    }
}

const poolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');
const globalPath = path.join(process.cwd(), 'src', 'lib', 'global-data.ts');

if (fs.existsSync(poolPath)) auditFile(poolPath);
if (fs.existsSync(globalPath)) auditFile(globalPath);
