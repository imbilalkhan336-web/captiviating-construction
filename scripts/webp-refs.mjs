// One-off: rewrite hardcoded /image/*.png|jpg references to .webp across the JSX.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('resources/js');

function walk(dir) {
    let out = [];
    for (const name of readdirSync(dir)) {
        const full = path.join(dir, name);
        const st = statSync(full);
        if (st.isDirectory()) out = out.concat(walk(full));
        else if (full.endsWith('.jsx')) out.push(full);
    }
    return out;
}

const re = /(\/image\/[^"'`\s)>]+?)\.(png|jpe?g)/g;
let changed = 0;

for (const file of walk(ROOT)) {
    const content = readFileSync(file, 'utf8');
    const next = content.replace(re, '$1.webp');
    if (next !== content) {
        writeFileSync(file, next, 'utf8');
        changed++;
        console.log('updated', path.relative(ROOT, file));
    }
}

console.log('files updated:', changed);
