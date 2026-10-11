const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function getMaxDimension(filePath) {
  const normalized = filePath.replace(/\\/g, '/').toLowerCase();
  
  if (normalized.includes('dashboard.png')) {
    return 2400; // Ultra crisp 2x retina for 1200px container
  }
  if (normalized.includes('casestudy ss')) {
    return 1600;
  }
  if (normalized.includes('logos') || normalized.includes('brandlogos') || normalized.includes('social-media-logo')) {
    return 1200;
  }
  if (normalized.includes('amos-chen') || normalized.includes('sergio-walker') || normalized.includes('paulina-punla') || normalized.includes('jane-jay') || normalized.includes('leah-daniel') || normalized.includes('profile')) {
    return 1000;
  }
  if (normalized.includes('cloud')) {
    return 1600;
  }
  return 1800;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return null;
  }

  const origStat = fs.statSync(filePath);
  const origSize = origStat.size;

  try {
    const meta = await sharp(filePath).metadata();
    const maxDim = getMaxDimension(filePath);

    let pipeline = sharp(filePath);

    if (meta.width > maxDim || meta.height > maxDim) {
      pipeline = pipeline.resize({
        width: meta.width > meta.height ? maxDim : null,
        height: meta.height >= meta.width ? maxDim : null,
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    let compressedBuffer;
    if (ext === '.png') {
      compressedBuffer = await pipeline
        .png({
          compressionLevel: 9,
          effort: 10
        })
        .toBuffer();
    } else {
      compressedBuffer = await pipeline
        .jpeg({
          quality: 85,
          mozjpeg: true
        })
        .toBuffer();
    }

    if (compressedBuffer.length < origSize) {
      // Write to temp file then replace
      const tempPath = filePath + '.tmp';
      fs.writeFileSync(tempPath, compressedBuffer);
      fs.renameSync(tempPath, filePath);

      return {
        file: filePath,
        origSize,
        newSize: compressedBuffer.length,
        saved: origSize - compressedBuffer.length,
        percent: ((1 - compressedBuffer.length / origSize) * 100).toFixed(1),
        origDims: `${meta.width}x${meta.height}`,
        newDims: (meta.width > maxDim || meta.height > maxDim) ? `resized to max ${maxDim}px` : 'dimensions kept'
      };
    } else {
      return {
        file: filePath,
        origSize,
        newSize: origSize,
        saved: 0,
        percent: '0.0',
        origDims: `${meta.width}x${meta.height}`,
        newDims: 'already optimal'
      };
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return null;
  }
}

async function main() {
  const publicDir = path.resolve(__dirname, '../public');
  const allFiles = getAllFiles(publicDir);
  const imageFiles = allFiles.filter(f => ['.png', '.jpg', '.jpeg'].includes(path.extname(f).toLowerCase()));

  console.log(`Found ${imageFiles.length} image files to analyze and compress...\n`);

  let totalOrig = 0;
  let totalNew = 0;
  const results = [];

  for (const file of imageFiles) {
    const res = await compressImage(file);
    if (res) {
      totalOrig += res.origSize;
      totalNew += res.newSize;
      if (res.saved > 0) {
        results.push(res);
        const relPath = path.relative(publicDir, res.file);
        const origKB = (res.origSize / 1024).toFixed(0);
        const newKB = (res.newSize / 1024).toFixed(0);
        console.log(`✓ ${relPath.padEnd(50)} | ${origKB.padStart(6)} KB -> ${newKB.padStart(5)} KB (-${res.percent}%) [${res.newDims}]`);
      }
    }
  }

  const savedTotal = totalOrig - totalNew;
  const savedPercent = ((savedTotal / totalOrig) * 100).toFixed(1);

  console.log('\n========================================');
  console.log(`Total original size:   ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total compressed size: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total data saved:      ${(savedTotal / (1024 * 1024)).toFixed(2)} MB (-${savedPercent}%)`);
  console.log('========================================\n');
}

main();
