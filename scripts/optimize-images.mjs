import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'fs/promises';

const srcDir = path.resolve('src/content/img');
const outDir = path.resolve('public/img');

// Create output directory
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

if (files.length === 0) {
  console.log('No images found in src/content/img/');
  process.exit(0);
}

for (const file of files) {
  const inputPath = path.join(srcDir, file);
  const outName = path.parse(file).name + '.webp';
  const outPath = path.join(outDir, outName);

  const metadata = await sharp(inputPath).metadata();

  await sharp(inputPath)
    .resize(800, undefined, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);

  console.log(`  ${file} (${metadata.width}x${metadata.height}) → ${outName} (800x?)`);
}

console.log(`\nDone! ${files.length} images optimized.`);
