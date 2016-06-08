/**
 * 我现在有一组异步任务，当三个文件都读取完毕之后执行回调
 **/
var p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
    },10000);
});
var p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(2);
    },2000);
});
//同时开启多个promise,当他们全部完成后执行回调
console.time('cost');
Promise.all([p1,p2]).then(function(result){
    console.log(result);
    console.timeEnd('cost');
})