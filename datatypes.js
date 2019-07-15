// Dynamic Typed language
// Datatypes in Javascript
// 1) number
// 2) string
// 3) boolean
// 4) null
// 5) undefined
// 6) Object
// 7) Symbol


// Primitives

// number


console.log("node", global);

var num = 12;
typeof num // number

// string

var str = "ABC";
typeof str // string

// boolean

var bool = true;
typeof bool // boolean

// Objects

//null - value when you expilicitly want to have no value
var obj = null;

//undefined - default value set by the JS Engine in creation phase
//You should not be setting undefined yourself as it is default
//value set by the javascript Engine
var obj;

//Object - key/value pairs
// All are Objects in Javascript other than all
// mentioned primitives.
var obj = {
    a: 10,
    b: "ABC"
};
typeof obj; //Object

// Everything is object in Javascript other than primitives
// Array, Functions are all objects