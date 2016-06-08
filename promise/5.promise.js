/**
 * 我现在有一组异步任务，当三个文件都读取完毕之后执行回调
 **/
var fs = require('fs');
var tmpl = new Promise(function(resolve,reject){
   fs.readFile('./template.html','utf8',function(err,data){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
   })
});
var userData = new Promise(function(resolve,reject){
    fs.readFile('./user.json','utf8',function(err,data){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
});
//同时开启多个promise,当他们全部完成后执行回调
console.time('cost');
Promise.all([tmpl,userData]).then(function(result){
    var tmpl = result[0];
    var user = JSON.parse(result[1]);
    tmpl = tmpl.replace(/\{\{(\w+)\}\}/g,function(matched,group1){
        return user[group1];
    });
    console.log(tmpl);
}).catch(function(err){
    console.error(err);
})