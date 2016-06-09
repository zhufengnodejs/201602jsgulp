var gulp = require('gulp');
//它可以把多个文件合并成同一个
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('join',function(){
    gulp.src(['./src/js/**/*.js','!./src/js/a.tmp.js'])
        .pipe(concat('all.js')) //把多个文件合并成同一个文件
        .pipe(gulp.dest('./build/js'))//先保存一次
        .pipe(uglify())//对合并后的文件进行压缩
        .pipe(rename('all.min.js'))//对文件进行重命名
        .pipe(gulp.dest('./build/js'))//输出到目的地中并保存
});