// One-off: convert every PNG/JPG under public/image to WebP (same basename).
// Originals are kept as a backup; the app references the .webp versions.
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/image');
const EXTS = new Set(['.png', '.jpg', '.jpeg']);

function walk(dir) {
    let out = [];
    for (const name of readdirSync(dir)) {
        const full = path.join(dir, name);
        const st = statSync(full);
        if (st.isDirectory()) out = out.concat(walk(full));
        else if (EXTS.has(path.extname(name).toLowerCase())) out.push(full);
    }
    return out;
}

const files = walk(ROOT);
let ok = 0;
let fail = 0;
let origBytes = 0;
let webpBytes = 0;

for (const file of files) {
    const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const isPng = /\.png$/i.test(file);
    try {
        origBytes += statSync(file).size;
        await sharp(file)
            .webp({ quality: isPng ? 90 : 80 })
            .toFile(out);
        webpBytes += statSync(out).size;
        ok++;
    } catch (e) {
        fail++;
        console.error('FAIL', path.relative(ROOT, file), '-', e.message);
    }
}

console.log(
    `converted=${ok} failed=${fail} | ${(origBytes / 1048576).toFixed(1)}MB -> ${(webpBytes / 1048576).toFixed(1)}MB`
);
