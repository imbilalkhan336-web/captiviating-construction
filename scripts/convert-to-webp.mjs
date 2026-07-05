import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';

const TARGETS = ['public/website', 'public/images'];
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg']);
const QUALITY = 82;
const SKIP = new Set(['Screenshot 2026-05-05 012158.png', 'Screenshot 2026-05-07 025254.png', 'Screenshot 2026-05-07 031428.png', 'Screenshot 2026-05-08 041316.png']);

let converted = 0;
let skipped = 0;
let removed = 0;

for (const dir of TARGETS) {
    let entries;
    try {
        entries = await readdir(dir);
    } catch (e) {
        console.log(`(skipping missing dir ${dir})`);
        continue;
    }

    for (const name of entries) {
        if (SKIP.has(name)) {
            console.log(`SKIP   ${dir}/${name}`);
            skipped++;
            continue;
        }
        const full = join(dir, name);
        const ext = extname(name).toLowerCase();
        if (!SOURCE_EXT.has(ext)) continue;

        const stats = await stat(full);
        if (!stats.isFile()) continue;

        const out = full.slice(0, -ext.length) + '.webp';
        await sharp(full).webp({ quality: QUALITY }).toFile(out);
        await unlink(full);
        console.log(`WEBP   ${full} -> ${out}`);
        converted++;
        removed++;
    }
}

console.log(`\nDone. Converted: ${converted}, removed PNG/JPG: ${removed}, skipped: ${skipped}.`);
