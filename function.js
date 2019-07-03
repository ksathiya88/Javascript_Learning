var name="ggg";
func1 = function(){
    console.log(this);

    console.log(name);
    console.log(this.name);
};

//func1();

let Obj1={func:func1,name:'kar'};

Obj1.func();
