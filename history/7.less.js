var gulp = require('gulp');
var less = require('gulp-less');
/**
 * 1. 获取要处理的文件 src
 * 2. pipe到插件中
 * 3. 保存到目标文件中 dest
 */
gulp.task('default',function(){
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
});