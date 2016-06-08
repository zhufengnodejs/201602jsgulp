var gulp = require('gulp');//引入gulp模块

gulp.task('copyHtml',function(){
    gulp.src('./src/index.html').pipe(
        gulp.dest('./build')
    )
});
// 1 参数 是指要监控的文件
// 2 参数 当文件发生变化的时候执行任务数组
//gulp.watch('./src/index.html',['copyHtml']);

// 1 参数 是指要监控的文件
// 2 参数 当文件发生变化的时候执行的回调函数

gulp.task('default',function(){
    gulp.watch('./src/js/*.js',function(event){
        console.log(event);
        //type 表示变化的类型 changed 改变 added 新增  deleted删除
        //path 变化的文件
    });
});