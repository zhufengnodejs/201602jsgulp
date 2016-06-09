let a = 1;
//块级作用域
if(true){
    let a = 10;
}
console.log(a);

const PI = 3.1415;
//常量一旦被定义便不能再修改
console.log(PI)
/*
PI = 3.15;
*/

const obj = {
    name:'zfpx'
}
console.log(obj);
obj.name = 'zfpx2';
//obj = {};
console.log(obj);