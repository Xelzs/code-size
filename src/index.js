const minify = require('./minifiedSize');
const gzip = require('./gzipSize');
const brotli = require('./brotliSize');
const format = require('./formatBytes');
const fs = require('fs');

/**
 * @param {Buffer | string} buffer
 */
const bufferFormat = (buffer) => (typeof buffer === 'string' ? Buffer.from(buffer) : buffer);

const getSizes = (data) => {
  let out = {};
  const source = data.source;
  const originalSize = bufferFormat(source).length;

  out.original = format(originalSize);

  if (data.minify) {
    const minifySize = minify(bufferFormat(source), data.language);
    out.minify = format(minifySize);
  }

  if (data.gzip) {
    const gzipSize = gzip(bufferFormat(source));
    out.gzip = format(gzipSize);
  }

  if (data.brotli) {
    const brotliSize = brotli(bufferFormat(source));
    out.brotli = format(brotliSize);
  }

  return out;
};

const sizeByFile = (data) => {
  data.source = fs.readFileSync(data.file);

  return getSizes(data);
};

const size = (data) => {
  let out;

  try {
    data.source ? (out = getSizes(data)) : '';
    data.file ? (out = sizeByFile(data)) : '';

    !data.source && !data.file ? (out = 'Error: Please specify a source code or a path to a file.') : '';
  } catch (error) {
    out = false;
    console.error(error);
  }

  return out;
};

module.exports = size;
