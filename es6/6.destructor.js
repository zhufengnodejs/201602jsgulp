//数组的解构赋值
var arr = [1, 2, 3];
let [a,b] = arr;
console.log(a, b);

//对象的解构赋值
var obj = {name: 'zfpx', age: 8};
var {name,age} = obj;
//var name = obj.name;
//var age = obj.age;
console.log(name, age);

/*function ajax(url,method){
 method = method?method:'get';
 url = url?url:'/'
 console.log(method,url);
 }
 ajax(undefined,'post');*/
//默认参数
function ajax(url = '/', method = 'get') {
    console.log(method, url);
}
ajax('/ajax', 'post');
//把其它的剩余参数转成一个数组赋给numbers
function show(prefix, ...numbers) {
    //var result = Array.prototype.slice.call(arguments,1).reduce((a,b)=>a+b);
    // from 用于把一个类数组转成数组
    //console.log(Array.from(arguments));
    //var result = Array.from(arguments).slice(1).reduce((a,b)=>a+b);
    var result = numbers.reduce((a, b)=>a + b);

    console.log(prefix + ':' + result);
}
show('结果', 2, 3, 4);

var arr = [1, 2, 3];
function add(a, b, c) {
    return a + b + c;
}
console.log(add.apply(null, arr));
console.log(add(...arr));

var target = {a: 1};
var sourceb = {b: 2};
var sourcec = {c: 3};
/*for(var attr in sourceb){
 target[attr] = sourceb[attr];
 }
 for(var attr in sourcec){
 target[attr] = sourcec[attr];
 }*/
Object.assign(target, sourceb, sourcec);
console.log(target);


var promise = new Promise(function (resolve, reject) {
    //setTimeout(function () {
        if (Math.random() > 0.5) {
            resolve('成功了');
        } else {
            reject('失败');
        }
    //}, 3000);
});
setTimeout(function(){
    promise.then(data=> {
        console.log(data)
    }, reason=> {
        console.error(reason)
    })
},3000);


