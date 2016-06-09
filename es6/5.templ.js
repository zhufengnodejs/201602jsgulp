var name = 'zfpx';
var age = 8;
//console.log(`${name} is ${age} years old!`)
//// ZFPX IS 8 YEARS OLD!
function uppercase(strings,...values){
    //console.log(strings);
    //console.log(values);
    //用变量把字符串进行拆分 变量的数组长的长度+1= 字符串数组长度
    var str = '';
    for(var i=0;i<values.length;i++){
        str += (strings[i]+values[i]).toUpperCase();
    }
    str += strings[i].toUpperCase();
    console.log(str);
}
console.log(`${name} is ${age} years old!`);
//带标签的模板字符串
uppercase`${name} is ${age} years old!`

