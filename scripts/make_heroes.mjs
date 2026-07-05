import sharp from 'sharp';
import { mkdirSync } from 'fs';

const SRC = 'public/images/img';
const OUT = 'public/img/heroes';
mkdirSync(OUT, { recursive: true });

// Theme-matched source PNG -> clean WebP hero name
const map = {
    'ChatGPT Image Jun 12, 2026, 02_18_54 AM.png': 'heating.webp',      // basement furnace
    'ChatGPT Image Jun 12, 2026, 02_39_51 AM.png': 'cooling.webp',      // outdoor AC condenser
    'ChatGPT Image Jun 12, 2026, 02_17_25 AM.png': 'plumbing.webp',     // tankless water heater + copper pipes
    'ChatGPT Image Jun 12, 2026, 01_29_11 AM.png': 'drains.webp',       // mechanical room, heavy piping
    'ChatGPT Image Jun 12, 2026, 01_28_37 AM.png': 'commercial.webp',   // rooftop crew, commercial
    'ChatGPT Image Jun 12, 2026, 01_57_35 AM.png': 'air-quality.webp',  // residential vents/filter + thermostat
    'ChatGPT Image Jun 12, 2026, 02_37_32 AM.png': 'local.webp',        // strip mall + branded van
    'ChatGPT Image Jun 12, 2026, 02_02_18 AM.png': 'cost-guides.webp',  // refrigerant gauges close-up
    'ChatGPT Image Jun 12, 2026, 02_23_22 AM.png': 'company.webp',      // office lobby (professional)
};

for (const [src, dest] of Object.entries(map)) {
    const meta = await sharp(`${SRC}/${src}`).metadata();
    await sharp(`${SRC}/${src}`)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(`${OUT}/${dest}`);
    console.log(`wrote ${dest}  (from ${meta.width}x${meta.height})`);
}
console.log('done');
