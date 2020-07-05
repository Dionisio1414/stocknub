const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('assets/new-icons/*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite-socials.svg'))
    .pipe(gulp.dest('build/images'))
}

