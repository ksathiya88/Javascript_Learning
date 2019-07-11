// Callbacks are a great way to handle
// something after something else has been completed.
// instead of waiting for it synchronously

function add(a, b, callback) {
  console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
  callback();
}

// disp() function is called just
// after the ending of add() function
function disp() {
  console.log("This must be printed after addition");
}

// Calling add() function
add(5, 6, disp);

//classic example
// $("#btn_1").click(function() {
//     alert("Btn 1 Clicked");
//   });
