/**
 * Promise(承诺) 是一个有 then方法的对象
 * 客户可以通过承诺注册成功和失败的回调函数
 * 如果成功后可以得到成功的结果
 * 如果失败可以得到失败的原因
 **/
var fs = require('fs');
function readFile(filename){
    /**
     * 返回一个promise
     * resolve 成功后执行的回调函数
     * reject失败之后的回调函数
     */
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
/**
 * then 方法有两个参数
 * success 成功之后的回调
 * reason失败之后的回调
 */
readFile('1.txt').then(function(data){
   console.log(data);
   return readFile(data);
}).then(function(data){
    console.log(data);
    return readFile(data);
}).then(function(data){
    console.log(data);
}).catch(function(reason){//可以捕获错误
    console.error(reason);
});
