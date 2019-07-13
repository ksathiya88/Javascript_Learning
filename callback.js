// Callbacks are a great way to handle
// something after something else has been completed.
// instead of waiting for it synchronously


// Example 1
setTimeout(() => {
  console.log("hello")
}, 1000);


// Example 2

function add(a, b, callback, callback1) {
  console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
  callback();
  callback1();
}

// disp() function is called just
// after the ending of add() function
function disp() {
  console.log("This must be printed after addition");
}

function disp1() {
  console.log("This must be printed after addition");
}
// Calling add() function
add(5, 6, disp);


//classic example
// $("#btn_1").click(function() {
//     alert("Btn 1 Clicked");
//   });