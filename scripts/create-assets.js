const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Ensure directories exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const videosDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

// CRC32 implementation for PNG chunks
function makeCrcTable() {
  let c;
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  return crcTable;
}
const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function writePngChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = Buffer.alloc(4 + len);
  typeAndData.write(type, 0, 4, 'ascii');
  data.copy(typeAndData, 4);
  const crc = crc32(typeAndData);
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

// Generate a valid PNG buffer from width, height, and a pixel color function (x, y) => [r, g, b, a]
function createPng(width, height, pixelShader) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth: 8
  ihdr[9] = 6; // color type: RGBA (6)
  ihdr[10] = 0; // compression method
  ihdr[11] = 0; // filter method
  ihdr[12] = 0; // interlace method
  const ihdrChunk = writePngChunk('IHDR', ihdr);

  // Raw image data with filter byte 0 at start of each scanline
  const scanlineSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineSize;
    rawData[rowOffset] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelShader(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a !== undefined ? a : 255;
    }
  }

  const deflated = zlib.deflateSync(rawData);
  const idatChunk = writePngChunk('IDAT', deflated);
  const iendChunk = writePngChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Helper color generators for athletic dark theme
function darkGymGradient(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;
  const dist = Math.hypot(nx - 0.5, ny - 0.4);
  const vignette = Math.max(0, 1 - dist * 1.2);
  const r = Math.min(255, Math.floor(25 + vignette * 40 + (ny > 0.6 ? 20 : 0)));
  const g = Math.min(255, Math.floor(25 + vignette * 35));
  const b = Math.min(255, Math.floor(28 + vignette * 35));
  return [r, g, b, 255];
}

function heroShader(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;
  // Deep dark moody athletic outdoor vibe with red accent glow
  const glow = Math.exp(-((nx - 0.5) ** 2 + (ny - 0.45) ** 2) * 12);
  const r = Math.floor(18 + glow * 55 + ny * 15);
  const g = Math.floor(18 + glow * 20 + ny * 10);
  const b = Math.floor(22 + glow * 15 + ny * 10);
  return [r, g, b, 255];
}

function phoneMockupShader(x, y, w, h, variant = 1) {
  const nx = x / w;
  const ny = y / h;
  // Phone bezel
  const borderWidth = 12 / w;
  const isBezel = nx < borderWidth || nx > 1 - borderWidth || ny < 16 / h || ny > 1 - 20 / h;
  if (isBezel) {
    return [25, 25, 25, 255];
  }
  // Notch/Dynamic island
  if (ny < 38 / h && Math.abs(nx - 0.5) < 45 / w) {
    return [15, 15, 15, 255];
  }
  // Screen background
  if (variant === 1) {
    // Workout video screen
    const isHeader = ny < 0.15;
    const isVideoArea = ny >= 0.15 && ny < 0.65;
    if (isHeader) return [20, 20, 22, 255];
    if (isVideoArea) {
      const redGlow = Math.exp(-((nx - 0.5) ** 2 + (ny - 0.4) ** 2) * 20);
      return [Math.floor(30 + redGlow * 120), Math.floor(30 + redGlow * 40), 35, 255];
    }
    // Exercise list cards at bottom
    const cardY = (ny - 0.65) % 0.09;
    return cardY < 0.075 ? [38, 38, 42, 255] : [24, 24, 26, 255];
  } else if (variant === 2) {
    // Daily exercise set/rep list
    const isHeader = ny < 0.14;
    if (isHeader) return [255, 68, 56, 255]; // Red accent bar
    const listY = (ny - 0.14) % 0.085;
    return listY < 0.07 ? [32, 32, 36, 255] : [20, 20, 22, 255];
  } else {
    // Nutrition / Profile
    const isHeader = ny < 0.18;
    if (isHeader) return [212, 192, 143, 255]; // Gold accent header
    const itemY = (ny - 0.18) % 0.1;
    return itemY < 0.08 ? [36, 36, 40, 255] : [22, 22, 24, 255];
  }
}

function badgeShader(x, y, w, h) {
  const nx = (x / w) * 2 - 1;
  const ny = (y / h) * 2 - 1;
  const dist = Math.hypot(nx, ny);
  if (dist > 1.0) return [0, 0, 0, 0]; // Transparent outer
  if (dist > 0.92) return [255, 68, 56, 255]; // Red border
  // Dark charcoal textured badge interior
  const dCenter = 1 - dist;
  const r = Math.floor(25 + dCenter * 35);
  const g = Math.floor(25 + dCenter * 30);
  const b = Math.floor(28 + dCenter * 30);
  return [r, g, b, 255];
}

function foodShader(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;
  const goldTone = Math.exp(-((nx - 0.6) ** 2 + (ny - 0.5) ** 2) * 6);
  const r = Math.floor(45 + goldTone * 70 + ny * 20);
  const g = Math.floor(38 + goldTone * 55 + ny * 15);
  const b = Math.floor(30 + goldTone * 25);
  return [r, g, b, 255];
}

function logoShader(x, y, w, h) {
  // Stacked hand-lettered bold white text placeholder
  const nx = x / w;
  const ny = y / h;
  // Let's create crisp white stylized logo bars
  const inText1 = ny >= 0.22 && ny <= 0.44 && nx >= 0.12 && nx <= 0.88;
  const inText2 = ny >= 0.56 && ny <= 0.78 && nx >= 0.12 && nx <= 0.88;
  if (inText1 || inText2) {
    return [255, 255, 255, 255];
  }
  return [0, 0, 0, 0];
}

console.log('Generating images...');

// 1. Logo
fs.writeFileSync(path.join(imagesDir, 'logo.png'), createPng(300, 180, logoShader));

// 2. Hero (scaled proportion for fast placeholder)
fs.writeFileSync(path.join(imagesDir, 'hero.jpg'), createPng(960, 540, heroShader));

// 3. Video Poster
fs.writeFileSync(path.join(imagesDir, 'video-poster.jpg'), createPng(750, 438, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  const r = Math.floor(25 + nx * 40);
  const g = Math.floor(25 + ny * 20);
  const b = 30;
  return [r, g, b, 255];
}));

// 4 & 5. Phone workouts
fs.writeFileSync(path.join(imagesDir, 'phone-workout-1.png'), createPng(420, 700, (x, y, w, h) => phoneMockupShader(x, y, w, h, 1)));
fs.writeFileSync(path.join(imagesDir, 'phone-workout-2.png'), createPng(420, 700, (x, y, w, h) => phoneMockupShader(x, y, w, h, 2)));

// 6. Badge
fs.writeFileSync(path.join(imagesDir, 'badge.jpg'), createPng(300, 300, badgeShader));

// 7, 8, 9. Athlete photos inside app
fs.writeFileSync(path.join(imagesDir, 'inside-athlete-1.jpg'), createPng(600, 400, (x, y, w, h) => darkGymGradient(x, y, w, h)));
fs.writeFileSync(path.join(imagesDir, 'inside-athlete-2.jpg'), createPng(600, 400, (x, y, w, h) => darkGymGradient(x, y, w, h)));
fs.writeFileSync(path.join(imagesDir, 'inside-athlete-3.jpg'), createPng(600, 400, (x, y, w, h) => darkGymGradient(x, y, w, h)));

// 10-15. App preview profile and program mockups
fs.writeFileSync(path.join(imagesDir, 'app-profile-1.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 3)));
fs.writeFileSync(path.join(imagesDir, 'app-program-1.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 1)));
fs.writeFileSync(path.join(imagesDir, 'app-profile-2.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 3)));
fs.writeFileSync(path.join(imagesDir, 'app-program-2.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 2)));
fs.writeFileSync(path.join(imagesDir, 'app-profile-3.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 3)));
fs.writeFileSync(path.join(imagesDir, 'app-program-3.png'), createPng(240, 520, (x, y, w, h) => phoneMockupShader(x, y, w, h, 1)));

// 16. Method background
fs.writeFileSync(path.join(imagesDir, 'method-bg.jpg'), createPng(960, 400, darkGymGradient));

// 17, 18, 19. Steps phone mockups
fs.writeFileSync(path.join(imagesDir, 'step-1.png'), createPng(320, 600, (x, y, w, h) => phoneMockupShader(x, y, w, h, 3)));
fs.writeFileSync(path.join(imagesDir, 'step-2.png'), createPng(320, 600, (x, y, w, h) => phoneMockupShader(x, y, w, h, 2)));
fs.writeFileSync(path.join(imagesDir, 'step-3.png'), createPng(320, 600, (x, y, w, h) => phoneMockupShader(x, y, w, h, 1)));

// 20 & 21. Nutrition background & phone
fs.writeFileSync(path.join(imagesDir, 'nutrition-bg.jpg'), createPng(760, 900, foodShader));
fs.writeFileSync(path.join(imagesDir, 'nutrition-phone.png'), createPng(320, 780, (x, y, w, h) => phoneMockupShader(x, y, w, h, 3)));

console.log('All images generated successfully!');
