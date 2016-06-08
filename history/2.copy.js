var gulp = require('gulp');//引入gulp模块
/**
 * 定义一个任务
 * 把src/index.html拷贝到build目录下
 * 1. src 获取到处理的文件或目录
 * 2. dest 拷贝到保存到的目标文件夹
 */
gulp.task('hello',function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/index.html'))
    //目标路径是一个文件夹的名字
});

gulp.task('hello2',function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/index.html'))
    //目标路径是一个文件夹的名字
});