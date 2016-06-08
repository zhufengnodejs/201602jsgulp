var gulp = {
    tasks:[]//定认一个任务的数组
}
//添加一个任务
gulp.task  = function(fn){
    gulp.tasks.push(fn);
}

//开始执行任务
gulp.start = function(){
    //这个写法不能保证前一个任务执行完毕之后再执行下一个任务
    /*for(var i=0;i<this.tasks.length;i++){
        this.tasks[i]();
    }*/
    var count = 0;// 表示数组中的第一个索引，也就是表示第一个任务
    function next(){
        gulp.tasks[count++](next);//一个next只执行一个函数，如果不再调用next就不会再继续往下执行了
    }
    next();
}

gulp.task(function(next){
    setTimeout(function(){
        console.log(1);
        //next();
    },3000);
});
gulp.task(function(next){
    console.log(2);
});
gulp.start();