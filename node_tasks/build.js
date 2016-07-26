var browserify = require('browserify')
var fs = require('fs')
var envify = require("envify");
var babelify = require('babelify');
var colors = require('colors');

var bundler = browserify({
  entries: ['./app/js/app.js'],
  transform: [
    [babelify, {}],
    [envify, {}]
  ],
  global: true
}, 'uglifyify')

bundler.on('log', (msg) => console.log('log...', msg))

bundle()

function bundle() {
  const start = new Date();
  console.log(`[${colors.blue(start)}] Starting '${colors.green('bundleJS')}'...`);
  bundler.bundle()
    .on('error', function (err) {
      console.log(`[${colors.blue(new Date())}] Error '${colors.red('bundleJS')}' ${err}`);
    })
    .pipe(fs.createWriteStream('./ApplicationWeb/js/app.js')).on('finish', function () {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    const timeStr = time < 1000 ? `${time} ms` : `${Math.floor(time / 1000)} seconds`;
    console.log(`[${colors.blue(end)}] Finished '${colors.magenta('bundleJS')}' after ${colors.magenta.underline(timeStr)}`);
  });
}
