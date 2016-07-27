const watch = require('watch')
const fs = require('fs')
const stripDirectory = (f) => f.split('/').slice(2).join('/')
const createFilePath = (f) => `./ApplicationNative/ApplicationNative/app/${stripDirectory(f)}`

watch.createMonitor('./app/js', function (monitor) {
  monitor.on('created', function (f) {
    fs.createReadStream(f).pipe(fs.createWriteStream(`${createFilePath(f)}`));
  })
  monitor.on('changed', function (f) {
    fs.createReadStream(f).pipe(fs.createWriteStream(`${createFilePath(f)}`));
  })
  monitor.on('removed', function (f) {
    fs.unlinkSync(`${createFilePath(f)}`);
  })
})
