var person = {
    eat(){
        console.log('eat');
    }
}

var teacher = {
    __proto__:person,//可以直接使用原型对象 __proto__
    teach(){
        console.log('teach');
    }
}
teacher.eat();
teacher.teach();