'use strict';

const gulp = require('gulp');

gulp.task('autoprefixer', function () {
    const postcss      = require('gulp-postcss');
    const sourcemaps   = require('gulp-sourcemaps');
    const autoprefixer = require('autoprefixer');

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['autoprefixer']);
