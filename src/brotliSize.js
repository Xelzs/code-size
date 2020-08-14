const zlib = require('zlib');

const brotli = (buffer) => zlib.brotliCompressSync(buffer).length;

module.exports = brotli;
