// Hoisting
// It is the term by which the Declarations moves up.
// Actually happens because of the creation phase where JS Engine
// scans and sets undefined for variables before actual
// execution happens.

var a;
console.log(a);// undefined
a = 10;
console.log(a);//10
console.log(func);
var func = function(){
    console.log("function");
};
console.log(func);
console.log(func1);
function func1(){
    console.log("function");
};
console.log(func1);