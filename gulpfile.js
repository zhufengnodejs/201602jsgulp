var gulp = require('gulp');//引入gulp模块
/**
 * 定义一个任务
 * 把src 下面所有的文件全部拷贝到build 目录下
 * 1.拷贝所有的css文件
 * 3. 拷贝除了jpg以外的所有图片
 *
 * ! 表示取反，排除掉此模式
 */
gulp.task('copy',function(){
    //需要所有的图片，除了jpg
    /*gulp.src(['./src/css/!**!/!*.css','
    ./src/imgs/!**!/!*','!./src/imgs/!**!/!*.jpg'])
        .pipe(gulp.dest('./build'))*/

    //需要所有的png和gif图片，其它不要 {png,gif} 表示任何一种
    gulp.src(['./src/css/**/*.css','./src/imgs/**/*.{png,gif}'])
        .pipe(gulp.dest('./build'))
    //目标路径是一个文件夹的名字
});
