var gulp = require('gulp');
//它可以把多个文件合并成同一个
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var $ = require('./gulp-load-plugins')();
console.log($);
//var minifyHtml = require('gulp-minify-html');
gulp.task('minifyHtml',function(){
    gulp.src('./src/index.html')
        .pipe($.minifyHtml())
        .pipe(gulp.dest('./build'))
});