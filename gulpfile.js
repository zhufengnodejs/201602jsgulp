var gulp = require('gulp');//引入gulp模块
gulp.task('buy',function(){
    console.log('买大米');
});
/**
 * 当你定义一个任务的时候如果有这个形参，callback
 * 表示这个任务有异步的代码
 * 那么在异步任务完成后必须调用callback,如果不调用代表此任务没有完成
 * 后续任务就得不到执行
 */
gulp.task('cook',['buy'],function(callback){
    setTimeout(function(){
        console.log('煮米饭')
        callback();//当异步任务完成的时候调用此回调函数
    },5000);
});

gulp.task('eat',['cook'],function(){
    console.log('吃米饭');
});