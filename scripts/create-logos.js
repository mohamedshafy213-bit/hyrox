const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

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

function createPng(width, height, pixelShader) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = writePngChunk('IHDR', ihdr);

  const scanlineSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineSize;
    rawData[rowOffset] = 0;
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

function generateLogoShader(isRed = false) {
  return (x, y, w, h) => {
    const nx = x / w;
    const ny = y / h;
    
    // Top text arch: TRAIN BEYOND
    const archOffset = Math.sin(nx * Math.PI) * 0.08;
    const inTopText = ny >= (0.24 - archOffset) && ny <= (0.46 - archOffset) && nx >= 0.10 && nx <= 0.90;
    
    // Bottom text: LIMITS
    const inBottomText = ny >= 0.54 && ny <= 0.76 && nx >= 0.20 && nx <= 0.80;

    if (inTopText || inBottomText) {
      return isRed ? [255, 68, 56, 255] : [255, 255, 255, 255];
    }
    return [0, 0, 0, 0];
  };
}

fs.writeFileSync(path.join(imagesDir, 'logo.png'), createPng(340, 160, generateLogoShader(false)));
fs.writeFileSync(path.join(imagesDir, 'logo-red.png'), createPng(340, 160, generateLogoShader(true)));

console.log('TRAIN BEYOND LIMITS logos generated.');
