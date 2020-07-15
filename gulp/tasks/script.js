const gulp = require('gulp')
const path = require('path')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function script() {
  return gulp.src(['node_modules/fslightbox/index.js', 'node_modules/rellax/rellax.min.js', 'app/js/main.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(terser({
      keep_fnames: true,
      mangle: false
    }))
    .pipe(gulp.dest('build/js'))
}