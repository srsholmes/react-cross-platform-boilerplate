const watch = require('watch')
const fs = require('fs')
const stripDirectory = (f) => f.split('/').slice(2).join('/')

watch.createMonitor('./app/js', function (monitor) {
  monitor.on('created', function (f, stat) {
    fs.createReadStream(f).pipe(fs.createWriteStream(`./ApplicationNative/ApplicationNative/app/${stripDirectory(f)}`));
  })
  monitor.on('changed', function (f, curr, prev) {
    fs.createReadStream(f).pipe(fs.createWriteStream(`./ApplicationNative/ApplicationNative/app/${stripDirectory(f)}`));
  })
  monitor.on('removed', function (f, stat) {
    // Handle removed files
  })
})
