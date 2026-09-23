'use strict';
var browserify =  require('browserify')
  , fs         =  require('fs');

browserify({ debug: true })
  .require(require.resolve('./javascript-editor'), { entry: true })
  .require(require.resolve('./coffee-editor'), { entry: true })
  .require(require.resolve('./json-editor'), { entry: true })
  .require(require.resolve('./lua-editor'), { entry: true })
  .bundle()
  .on('error', function (error) {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  })
  .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
