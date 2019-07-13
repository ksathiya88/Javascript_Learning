// Inheritance
// prototypical Inheritance 
// object inherit another Object


// constructor Function
let Person = function (name, age) {
  console.log("Object", this);
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  console.log("Name", this.name);
};


let abc_obj = new Person('ABC', 22);
console.log("Person Obj", abc_obj);
let abc_obj1 = new Person('ABC1', 22);
let abc_obj2 = new Person('ABC2', 22);
let abc_obj3 = new Person('ABC3', 22);
abc_obj3.getName();