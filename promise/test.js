var tmpl = '{{name}}   {{age}}';
var data = {name:'zfpx',age:8};
var tmpl = tmpl.replace(/\{\{(\w+)\}\}/g,function(matched,group1){
    console.log(matched,group1);
    return data[group1];
});
console.log(tmpl);