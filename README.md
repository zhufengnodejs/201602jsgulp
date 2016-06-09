#创建项目
```
mkdir gulp-demo && cd gulp-demo
npm init -y
```
#安装less
```
npm root -g 查看全局安装的模块目录
C:\Users\Administrator\AppData\Roaming\npm\node_modules

npm install less -g 全局安装less


C:\Users\Administrator\AppData\Roaming\npm\lessc -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\less\bin\lessc
创建一个快捷方式 npm\lessc指向正正需要的bin\lessc
这样做的原因是因为npm在环境变量中而less/bin不在
```

##安装gulp
查看本地安装目录
```
npm root
E:\gulp-demo\node_modules
```
全局安装
```
npm install -g gulp
```
本地安装
```
npm install gulp --save-dev

```

##依赖的不同
```
--save-dev 叫开发时依赖
开发的时候依赖或者说需要，真正上线后线上版本是不需要的。
--save 代表上线时的依赖
上线的时候也需要此模模块 mime
```

##本地模块的查找流程
从本地的node_modules中查找，如果找不到向上级查找，如果一直到根目录 都没有找到，就报错。

##添加gulpfile.js配置文件并编写一个自定义的任务

```
var gulp = require('gulp');//引入gulp模块
//定义一个任务
//名字叫hello
gulp.task('hello',function(){
    console.log('hello');
});
```

#练习 
源文件
app
  index.html
  js
  less
  images


建一个综合任务
1. js 合并压缩复制到dist
2. less 编译 合并 压缩 复制到dist
3. image 压缩 复制到dist
4. index.html进行压缩
5. 服务器 负责预览dist目录下面的文件并且当源文件发生改变后自动刷新

