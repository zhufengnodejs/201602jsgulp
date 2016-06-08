var http = require('http');
var url = require('url');
var fs = require('fs');
/*
 1.先访问 / 得到html
 2. 在html中，先调 /ajax1接口获取内容赋给 div1
 3. 再调 /ajax2 接口获取内容赋给 div2
 */
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/ajax1'){
        res.end('ajax1');
    }else if(pathname == '/ajax2'){
        res.end('ajax2');
    }else{
        res.end('404');
    }
}).listen(9090,'localhost');