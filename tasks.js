var gulp = {
    tasks:[]
}
//添加一个任务
gulp.task  = function(fn){
    this.tasks.push(fn);
}

//开始执行任务
gulp.start = function(){
    //这个写法不能保证前一个任务执行完毕之后再执行下一个任务
    /*for(var i=0;i<this.tasks.length;i++){
        this.tasks[i]();
    }*/
    var count = 0;
    function next(){
        gulp.tasks[count++](next);
    }
    next();
}

gulp.task(function(next){
    setTimeout(function(){
        console.log(1);
        next();
    },3000);
});
gulp.task(function(next){
    console.log(2);
});
gulp.start();