'use strict';

const gulp = require('gulp');

gulp.task('autoprefixer', function () {
    const postcss      = require('gulp-postcss');
    const sourcemaps   = require('gulp-sourcemaps');
    const autoprefixer = require('autoprefixer');

    return gulp.src('./*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', ['autoprefixer']);
