var gulp = require('gulp');//引入gulp模块
//此插件会自动加载在package.json中所有的插件
//所有的gulp插件会作为$的属性
var $ = require('./gulp-load-plugins')();//引入此插件
//var concat = require('gulp-concat');
/**
 * npm install gulp-concat --save-dev
 * npm install gulp-load-plugins --save-dev
 */

/**
 * concat用于将多个JS文件合并成同一个文件
 * 1. src 获取要处理的文件
 * 2. pipe方法导入到插件中
 * 3. pipe 导出来 dest里面进行保存最后结果
 */
gulp.task('default',function(){
    gulp.src(['./src/js/**/*.js']).//放着要处理的文件
        pipe($.concat('all.js')).//合并后的文件名
        pipe(gulp.dest('./build/js'));//保存到目标目录中去
})