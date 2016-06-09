module.exports = function(){
    /**
     * 1. 读取package.json文件
     * 2. 得到devDependencies配置项
     * 3. 遍历所有的属性，找出所有以gulp-开头的属性
     * 4. 加载这些插件模块并且把返回赋给$的属性(属性等于模块名去掉gulp-前缀)
     */
    var fs=require('fs');
    fs.readFile('./package.json','utf8',function(err,data){
        var $={};
        var packObj=JSON.parse(data);
        var DevObj=packObj.devDependencies;
        var reg=/^gulp-([a-zA-Z-]+)/;
        for(var key in DevObj){
            if(reg.test(key)){
                var originalName = reg.exec(key)[1];// minify-html
                //按-进行分隔，然后第一个单词不变，后续其它单词首字母大写
                $[originalName]=require(''+key+'')
            }
        }
        return $;
    });
}

