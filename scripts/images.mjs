/**
 * Auto-generate optimized .webp versions of every raster image in public/images.
 *
 * Workflow: drop a `Name.png` (or .jpg/.jpeg) into public/images and a matching
 * `Name.webp` is (re)generated. The site references the .webp, so it updates too.
 *
 * A .webp is regenerated only when its source file is newer (or the .webp is
 * missing), so re-running is cheap and idempotent.
 *
 * Run manually:  npm run images
 * Runs automatically on `npm run build` and `npm run dev` (see vite.config.js).
 */
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, '..', 'public', 'images');
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg']);
const QUALITY = 85;

/** Convert a single source image to .webp if it's missing or out of date. */
export async function optimizeImage(file) {
    const ext = path.extname(file).toLowerCase();
    if (!SOURCE_EXT.has(ext)) return null;

    const webp = file.slice(0, -ext.length) + '.webp';

    if (existsSync(webp)) {
        const [src, out] = await Promise.all([stat(file), stat(webp)]);
        if (out.mtimeMs >= src.mtimeMs) return null; // up to date
    }

    const info = await sharp(file).webp({ quality: QUALITY }).toFile(webp);
    return { webp, info };
}

/** Convert every source image in public/images. Returns the number generated. */
export async function optimizeImages({ log = true } = {}) {
    let entries;
    try {
        entries = await readdir(IMAGES_DIR);
    } catch {
        return 0; // folder doesn't exist yet
    }

    let count = 0;
    for (const name of entries) {
        const file = path.join(IMAGES_DIR, name);
        const result = await optimizeImage(file).catch((err) => {
            console.error(`  ✗ ${name}: ${err.message}`);
            return null;
        });
        if (result) {
            count++;
            if (log) {
                const kb = Math.round(result.info.size / 1024);
                console.log(`  ✓ ${path.basename(result.webp)} (${result.info.width}x${result.info.height}, ${kb}KB)`);
            }
        }
    }

    if (log) {
        console.log(count ? `images: ${count} .webp generated/updated.` : 'images: all .webp up to date.');
    }
    return count;
}

// Run directly via `node scripts/images.mjs`
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    optimizeImages();
}
