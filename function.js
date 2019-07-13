// Functions is the First Class Objects because
// 1) It can be saved to a variable
// 2) It can send as a parameter to a function.
// 3) It can be returned from a variable

// 1) It can be saved to a variable

var func1 = function () {
   console.log(this);
};

// calling this function
func1();
// 2) It can send as a parameter to a function.

var func2 = function (func_variable) {
   func_variable();
}

func2(func1); // calling the function with existing func1
// as parameter

// 3) It can be returned from a variable


var func2 = function (func_variable) {
   return func_variable;
};

var func_object = func2(func1); // saves the returned function from the
// func2 object to the func_object