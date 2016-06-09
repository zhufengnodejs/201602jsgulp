function print(val){
    console.log(val);
}
/**
 *  左边是输入  右边是输出
 *   如果输入参数多于1个,需要用小括号括起来
 *   如果不只是一个简单输出，需要大括号把语句块括起来
 */
/*
var arr = [1,2,3];
arr.forEach((val)=> {
    console.log(val)
});*/

var add = (val1,val2) => {};
console.log(add(1,2));

var person = {
    start:function(){
        console.log(this);
        //var self = this;
        //箭头函数没有自己的this,而会和上级共用this对象
        setTimeout(()=>{
            console.log(this);
        },1000)
    }
}
person.start();