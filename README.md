# CodeSize

[![Maintainability](https://api.codeclimate.com/v1/badges/0926045450cb16d6e423/maintainability)](https://codeclimate.com/github/Xelzs/code-size/maintainability)

Estimates the size of your files in different format (original, minified, gzipped, brotli).  

**The minified format support only CSS and SCSS languages.**

## Command-line Usage

Install code-size package globally with npm :

```
$ npm install -g @xelzs/code-size
```

Basic usage :
```
$ code-size -f test.css -gbm --language css

CodeSize | Version 1.0.0

Original size : 9.11 KB
Minified size : 7.16 KB
Gzipped size : 140 Bytes
Brotli size : 82 Bytes
```

Available options :
```
Usage: code-size [options]

Options:
  -V, --version              output the version number
  -s, --source <code>        specify raw source code
  -f, --file <path>          specify path to a file
  -g, --gzip                 show gzipped size
  -b, --brotli               show brotli size
  -m, --minify               show minified size | !! Works only with supported language !!
  -l, --language <language>  specifies the language type. Supported: css, scss (default: "css")
  -h, --help                 display help for command
```

## Programmatic Usage 

Install with npm :
```
$ npm install --save @xelzs/code-size
```

Get all sizes : 
```js
const {size} = require('code-size');

const data = size({
  file: 'test.css',
  gzip: true,
  brotli: true,
  minify: true,
  language: 'css',
});

console.log(data);
// {
//   original: '9.11 KB',
//   minify: '7.16 KB',
//   gzip: '140 Bytes',
//   brotli: '82 Bytes',
// }
```

### Options
All options availables on command-line are also available here.

- `source` - Raw source code
- `file` - Path to a file
- `gzip` - Boolean to enable the gzip estimation
- `brotli` - Boolean to enable the brotli estimation
- `minify` - Boolean to enable the minify estimation. **Language option required**
- `language` - Specify the language type. Supported: `css, scss`.