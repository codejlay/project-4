'use strict';

var gulp = require('gulp'); // Load Gulp!
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./css'));
});



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [ historyApiFallback() ]
        }
    });


    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch(["index.html", "js/*.js", "css/*.css"]).on('change', browserSync.reload);
});

