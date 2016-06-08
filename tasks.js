var gulp = {
    tasks:[]
}
//添加一个任务
gulp.task  = function(fn){
    this.tasks.push(fn);
}

//开始执行任务
gulp.start = function(){

}

gulp.task(function(){
    console.log(1);
});
gulp.task(function(){
    console.log(2);
});
gulp.start();