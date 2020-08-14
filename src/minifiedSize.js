const sass = require('node-sass');

const minifyCss = (data) => {
  return sass.renderSync({
    data,
    outputStyle: 'compressed',
  }).css;
};

const minify = (bufferEntry, language) => {
  const languages = {
    css: minifyCss,
    scss: minifyCss,
  };

  const buffer = languages[language](bufferEntry.toString());

  return buffer.length;
};

module.exports = minify;
