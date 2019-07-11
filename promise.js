// Promise used for Asynchronous handling in Javascript
// A promise is a proxy for a value not necessarilly
// known when the promise is created.
// As the name suggests it is Promise to the Javascript
// Engine that it will eventually get a value.
// This lets asynchronous functions return value as
// it is a synchronous function
// It allows you to associate handlers with an aynchronous
// action's eventual success value or failure reason.
// Promise is in one of the states
// 1)pending
// 2)fulfilled
// 3)rejected

let promise_obj = new Promise(function(resolve1, reject1) {
  setTimeout(function() {
    resolve1("Success");
    //reject1("Failure");
    for (i = 0; i < 10; i++) {
      console.log(i);
    }
  }, 1000);

  setTimeout(function() {
    resolve1("Success");
  }, 2000);
});
console.log("Promise state", promise_obj);

promise_obj.then(
  function(value) {
    console.log("Promise state fulfilled", promise_obj);
    console.log("Success", value);
  },
  function(value) {
    console.log("Promise state rejected", promise_obj);
    console.log("Failure", value);
  }
);

// for(i=0;i<1000;i++){
//     console.log(i);
// }
