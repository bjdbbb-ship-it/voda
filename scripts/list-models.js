const fs = require('fs');
const path = require('path');
const envPath = path.join(process.cwd(), '.env.local');
const env = fs.readFileSync(envPath, 'utf-8');
const match = env.match(/GEMINI_API_KEY=([^\r\n]+)/);
const key = match ? match[1] : '';

fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`)
  .then(r => r.json())
  .then(d => {
    if (d.models) {
      const flash = d.models.filter(m => m.name.includes('flash') || m.name.includes('gemini'));
      flash.forEach(m => console.log(m.name, '-', m.displayName || ''));
    } else {
      console.log('Error:', JSON.stringify(d));
    }
  });
