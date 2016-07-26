// const nativeWatch = () =>
//   console.log('watching native...')
//
// nativeWatch()

const watch = require('watch')
const fs = require('fs')

watch.createMonitor('./app/js', function (monitor) {
  monitor.on('created', function (f, stat) {
    // Handle new files
    console.log('file created')
  })
  monitor.on('changed', function (f, curr, prev) {
    const outputFile = f.split('/').slice(2).join('/')
    fs.createReadStream(f).pipe(fs.createWriteStream(`./ApplicationNative/ApplicationNative/app/${outputFile}`));
  })
  monitor.on('removed', function (f, stat) {
    // Handle removed files
  })
})

console.log('***** WATCHER ****')


// Set up watch here. Detect which file has been chnaged and copy it oveer to the directory in application native.
