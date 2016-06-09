
var addAll = function(){
    // from可以把类数组转成数组
    //return Array.from(arguments).reduce();
}

console.log(addAll(1,2,3));
/*

var arr = [1,2,3,2,5,4];
// current  当前值
// next下一个元素
var result = arr.reduce(function(current,next){
    return current>next?current:next;
},0);
console.log(result);
*/
