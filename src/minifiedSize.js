const sass = require('node-sass');
const uglify = require('babel-minify');

const minifyCss = (data) => {
  return sass.renderSync({
    data,
    outputStyle: 'compressed',
  }).css;
};

const minifyJs = (data) => {
  return Buffer.from(uglify(data).code, 'utf-8');
};

const minify = (bufferEntry, language) => {
  const languages = {
    css: minifyCss,
    sass: minifyCss,
    scss: minifyCss,
    js: minifyJs,
  };

  const buffer = languages[language](bufferEntry.toString());

  return buffer.length;
};

module.exports = minify;
