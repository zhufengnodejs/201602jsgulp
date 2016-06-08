var boy1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('1');
    },6000);
});
var boy2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('2');
    },5000);
});
/**
 * 多个 promise或者异步任务同时开始执行
 * 哪位先执行完就执行回调，并且把它的结果赋给result
 */
Promise.race([boy1,boy2]).then(function(result){
    console.log(result);
});