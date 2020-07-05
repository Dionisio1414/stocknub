const path = require('path')

const root = path.join(__dirname, '../')
const src = path.join(root, 'app')

console.log('root======', root)
console.log('src=======', src)

module.exports = {
  root,
  src,
  buildPath: path.join(root, '/build'),
  lighthouse: {
    reportPath: path.join(root, 'reports'),
    PORT: 8080,
    chromeLauncherPort: 9222,
    config: {
      extends: 'lighthouse:default'
    },
    flags: {
      // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
      chromeFlags: ['--show-paint-rects'],
      output: 'html'
    }
  },
  copyDependencies: {
    dist: path.join(src, 'local_modules')
  }
}
