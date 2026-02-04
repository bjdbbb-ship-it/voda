
import fs from 'fs';
import path from 'path';

const globalDataPath = path.join(process.cwd(), 'src', 'lib', 'global-data.ts');
const whiskyPoolPath = path.join(process.cwd(), 'src', 'lib', 'whisky-pool.ts');

const IMAGES = {
    peaty: "https://images.unsplash.com/photo-1574620638522-8378419f4033?auto=format&fit=crop&q=80&w=800",
    sherry: "https://images.unsplash.com/photo-1596377478065-22e382d6101f?auto=format&fit=crop&q=80&w=800",
    bourbon: "https://images.unsplash.com/photo-1613214149922-f1809c99e18e?auto=format&fit=crop&q=80&w=800",
    blended: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=800",
    light: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?auto=format&fit=crop&q=80&w=800"
};

function getImageForWhisky(whisky: any): string {
    const type = (whisky.type || "").toLowerCase();
    const region = (whisky.region || "").toLowerCase();
    const tags = (whisky.tags || []).join(" ").toLowerCase();

    if (tags.includes("peat") || tags.includes("smoke") || region.includes("islay")) return IMAGES.peaty;
    if (type.includes("bourbon") || type.includes("rye") || type.includes("tennessee") || region.includes("usa") || region.includes("kentucky")) return IMAGES.bourbon;
    if (type.includes("blended") || region.includes("ireland") || type.includes("irish")) return IMAGES.blended;
    if (region.includes("japan") || region.includes("taiwan") || region.includes("india") || tags.includes("light") || tags.includes("floral")) return IMAGES.light;

    // Default fallback to Sherry/Speyside style as it looks like classic scotch
    return IMAGES.sherry;
}

function processFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // We want to insert imageUrl into objects that don't have it or have it empty.
    // The objects look like { id: "...", ... }
    // We can use regex to find the object end "}" and insert imageUrl if missing?
    // Or cleaner: iterate line by line.

    const lines = content.split('\n');
    const newLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('},')) {
            // It's a whisky line
            // Parse it somewhat safely by wrapping as array
            try {
                // Remove trailing comma
                const jsonStr = trimmed.slice(0, -1);
                // Convert to valid JSON? Keys are not quoted usually in TS.
                // Regex approach is safer for TS files.

                // key extraction
                const getVal = (key: string) => {
                    const match = line.match(new RegExp(`${key}:\\s*"([^"]+)"`));
                    return match ? match[1] : "";
                };
                const getTags = () => {
                    const match = line.match(/tags:\s*\[(.*?)\]/);
                    return match ? match[1] : ""; // distinct tags logic needed if we rely on tags heavily
                };

                const type = getVal("type");
                const region = getVal("region");
                const tagsRaw = getTags();

                const dummyWhisky = { type, region, tags: tagsRaw.split(",") };
                const newImage = getImageForWhisky(dummyWhisky);

                if (line.includes('imageUrl: ""')) {
                    return line.replace('imageUrl: ""', `imageUrl: "${newImage}"`);
                } else if (!line.includes('imageUrl:')) {
                    // Insert before the closing brace
                    // We need to find the insertion point.
                    // Usually "tags: [...] },"
                    // Let's replace "}," with `, imageUrl: "${newImage}" },`
                    // But wait, "tags" might not be last.
                    // Most lines end with `},`.
                    const lastBraceIndex = line.lastIndexOf("}");
                    if (lastBraceIndex > -1) {
                        const beforePart = line.substring(0, lastBraceIndex);
                        const afterPart = line.substring(lastBraceIndex);
                        // Check if there is a trailing space or comma before brace
                        // Actually, let's just append.
                        // Need to make sure we have a comma before if needed?
                        // The existing properties are comma separated.
                        // e.g. ... tags: [...] },
                        // convert to ... tags: [...], imageUrl: "..." },
                        return `${beforePart}, imageUrl: "${newImage}"${afterPart}`;
                    }
                }
            } catch (e) {
                console.error("Error processing line", line, e);
            }
        }
        return line;
    });

    const newContent = newLines.join('\n');
    // Fix any double commas ",,"
    const fixedContent = newContent.replace(/,(\s*),/g, ',$1');
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Updated ${filePath}`);
}

processFile(globalDataPath);
processFile(whiskyPoolPath);
