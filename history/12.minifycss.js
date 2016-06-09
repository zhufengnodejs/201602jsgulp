var gulp = require('gulp');
//它可以把多个文件合并成同一个
/*var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');*/
var $ = require('gulp-load-plugins')();
/**
 * fs.createReadstream 创建一个可读流 里面只放数据
 * gulp 流 虚拟文件流 ， 是个对象，对象里包括 内容 文件名
 */
gulp.task('css',function(){
    gulp.src('./src/**/*.less')
        .pipe($.less())
        .pipe($.concat('333.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe($.minifyCss())
        // all.css    all.min.css
        .pipe($.rename(function (path) {//要重命名的文件路径
            //path.dirname += "/ciao";//修改所在目录
            path.basename += ".min"; //文件名
            //path.extname = "min."+path.extname //扩展名
        }))
        .pipe(gulp.dest('./build/css'))
})
