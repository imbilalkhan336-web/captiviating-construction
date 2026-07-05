import sharp from 'sharp';
import { statSync, readFileSync, writeFileSync, rmSync } from 'fs';

// Resize oversized images down to ~2x their largest on-screen display size.
// fit:'inside' preserves aspect ratio; the value caps the longest side.
const JOBS = [
    { file: 'cooling-icon.webp', width: 128, height: 128, q: 80 },
    { file: 'heating-icon.webp', width: 128, height: 128, q: 80 },
    { file: 'air-quality-icon.webp', width: 128, height: 128, q: 80 },
    { file: 'electrical-icon.webp', width: 128, height: 128, q: 80 },
    { file: 'time.webp', width: 160, height: 160, q: 80 },
    { file: 'logo.webp', width: 440, q: 82 },
    { file: 'about-img.webp', width: 1300, q: 80 },
    { file: 'about-page-img.webp', width: 1300, q: 80 },
    { file: 'side-view.webp', width: 700, q: 80 },
];

const DIR = 'public/img';
let before = 0, after = 0;
for (const job of JOBS) {
    const src = `${DIR}/${job.file}`;
    try { rmSync(`${src}.tmp`, { force: true }); } catch {}
    let input;
    try { input = readFileSync(src); } catch { console.log(`SKIP (missing): ${job.file}`); continue; }
    const pre = input.length;
    const meta = await sharp(input).metadata();
    const resize = { width: job.width, withoutEnlargement: true, fit: 'inside' };
    if (job.height) resize.height = job.height;
    const out = await sharp(input).resize(resize).webp({ quality: job.q }).toBuffer();
    writeFileSync(src, out);
    const m2 = await sharp(out).metadata();
    before += pre; after += out.length;
    console.log(`${job.file.padEnd(24)} ${meta.width}x${meta.height} ${Math.round(pre/1024)}KB  ->  ${m2.width}x${m2.height} ${Math.round(out.length/1024)}KB`);
}
console.log(`\nTOTAL: ${Math.round(before/1024)}KB -> ${Math.round(after/1024)}KB  (saved ${Math.round((before-after)/1024)}KB)`);
