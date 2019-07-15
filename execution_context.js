// By means of Execution context we are getting
// 1) 'this' reference
// 2) global value(windows)
// 3) reference to outer environment
// Two stages:
// 1) Creation Phase  - memory gets created( variables get a default
// value of undefined)
// 2) Execution Phase - JS Engine executes line by line

//Global context created anyway
var a = 30;
var b = 20;

// Execution context created for each function
var func = function () {

    var a = 10;
    console.log("a value", a); //10 since the a is present
    //in this context
    console.log("b value", b); // By means of scope chain
    // Javascript is able to get value from parent context
};



func();