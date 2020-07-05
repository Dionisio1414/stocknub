const gulp = require('gulp')

module.exports = function fonts() {
  return gulp.src('app/fonts/**/*.woff2')
    .pipe(gulp.dest('build/fonts'))
}


