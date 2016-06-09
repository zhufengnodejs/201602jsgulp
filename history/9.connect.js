var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copyHtml',function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload())//拷贝完成后自动刷新浏览器页面
});
gulp.task('watch',function(){
    gulp.watch('./src/index.html',['copyHtml']);
});

gulp.task('serve',function(){
    connect.server({
//如果访问的是 /index.html 那么 /指的就是build目录
        root:'./build',//服务的根目录,
        port:8080, //服务的端口
        livereload:true // 可以自动刷新浏览器
    })
});

gulp.task('default',['copyHtml','serve','watch']);