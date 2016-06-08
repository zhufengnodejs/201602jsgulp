
//当前进程 standard output 标准输出  可写流
process.stdout.write('hello2');
//向标准输出打印字符串
console.log('hello');
// 可读流
process.stdin.on('data',function(data){
    console.error(data.toString());
});