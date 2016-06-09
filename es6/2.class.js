function Person(name){
    this.name = name;
}
Person.prototype.showName = function(){
    console.log(this.name);
}

function Teacher(name){
   Person.call(this,name);
   this.name = 'abc';
}
//Teacher.prototype = new Person();
Teacher.prototype = Object.create(Person.prototype);

var teacher = new Teacher('zfpx');
teacher.showName();//undefined
//console.log(teacher.__proto__.name);

/*Object.create = function(proto){
    function Temp(){

    }
    Temp.prototype = proto;
    return new Temp(); //__proto__
}*/




/*
class Person{
    //定义构函数
   constructor(name){
    this.name = name;
   }

   showName(){
       console.log(this.name);
   }
}
class Teacher extends Person{
    //在子类的构造函数中必须调用父类的构函数
    constructor(name,age){
        super(name);
        this.name = 'zxxx';
        this.age = age;
    }

    teach(){
        console.log('teach',this.age)
    }

}
var person = new Person('zfpx');
person.showName();

var teacher = new Teacher('zfpx2',8);
teacher.showName();
teacher.teach();
*/
