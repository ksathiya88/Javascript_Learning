// closure
var func = function(){
  var a =10;

  var innerFunc = function(){
      return {b:a+10};
  };
  return innerFunc;
};

var innerFunc = func();
console.log("InnerFunction",innerFunc());
var ret= innerFunc();
console.log("ret",ret.b);