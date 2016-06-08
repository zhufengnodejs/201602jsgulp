module.exports = function(){
    var $ = {};
    /**
     * 1. 读取package.json文件
     * 2. 得到devDependencies配置项
     * 3. 遍历所有的属性，找出所有以gulp-开头的属性
     * 4. 加载这些插件模块并且把返回赋给$的属性(属性等于模块名去掉gulp-前缀)
     */
    return $;
}