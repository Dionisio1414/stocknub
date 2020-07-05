const gulp = require('gulp')
const critical = require('critical')

module.exports = function criticalCss() {
    critical.generate({
        inline: true,
        base: 'build/',
        src: 'index.html',
        dest: 'index-critical.html',
        dimensions: [{
            width: 1300,
            height: 900
        }],
        minify: true,
        extract: true,
    }).then((output) => {
        console.log(output)
    }).catch((err) => {
        console.log(err)
    })
}