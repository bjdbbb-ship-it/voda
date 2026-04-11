const apiKey = "AIzaSyACqAkUgl4HypzAv5nndWfP-V67kKTv6Qc";
async function listModels() {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(err);
    }
}
listModels();
