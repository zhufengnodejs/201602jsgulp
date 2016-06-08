// npm install q
var Q = require('q');

function fiveLater(){
    var defer = Q.defer();//生成一个延迟对象
    setTimeout(function(){
        if(Math.random()>0.5){
            defer.resolve('成功');//成功的时候调用resovle
        }else{
            defer.reject('失败');//失败的时候调用reject
        }
    },5000);
    return defer.promise;
}
fiveLater().then(function(data){
  console.log(data);
},function(reason){
    console.log(reason);
});