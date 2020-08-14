const zlib = require('zlib');

const gzip = (buffer) => zlib.gzipSync(buffer).length;

module.exports = gzip;
