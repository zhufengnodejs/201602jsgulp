var Q = require('./q');
var defer = Q.defer();//延迟的任务
setTimeout(function () {
    if (Math.random() > 0.5) {
        defer.resolve('成功');
    } else {
        defer.reject('失败');
    }
},1000);
var promise = defer.promise;

setTimeout(function(){
    promise.then(data=> {
        console.log(data);
    }, (reason) => {
        console.error(reason);
    });
},3000);