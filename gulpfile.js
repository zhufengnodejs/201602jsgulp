var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
jshint = require("gulp-jshint");
gulp.task('image',function(){
    gulp.src('./src/img/big.bmp')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
});

gulp.task('jshint', function () {
    gulp.src('src/js/*.js')
        .pipe(jshint()) //进行代码检查
        .pipe(jshint.reporter()); // 输出检查结果
});