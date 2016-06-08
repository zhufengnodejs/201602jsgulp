/**
 * 1.先读取1.txt，读到其中的文件名
 * 2. 再读取对应文件名中的内容并输出在控制台
 *
 * 1.如果回调太多的话会变得难以维护
 */
var fs = require('fs');
fs.readFile('1.txt','utf8',function(err,filename){
    fs.readFile(filename,'utf8',function(err,content){
        console.log(content);
    })
})
var count =0;
var content1,content2;
//如果多个异步任务没有关系的话，也会变成串行
fs.readFile('1.txt','utf8',function(err,data){
    content1 = data;
    if(++count == 2)
        console.log(content1,content2)
})

fs.readFile('2.txt','utf8',function(err,data){
    content2 = data;
    if(++count == 2)
        console.log(content1,content2)
})
