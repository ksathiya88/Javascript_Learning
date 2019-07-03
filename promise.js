// Promise used for Asynchronous Execution

let promise_obj= new Promise(function(resolve1,reject1){
   setTimeout(function () {
        reject1("Failure");
        for(i=0;i<10;i++){
            console.log(i);
        }
    },1000);

    setTimeout(function () {
        resolve1("Success");
    },2000);

});


promise_obj.then(function(value){
    console.log("Success",value);
},function(value){
    console.log("Failure",value);
});

// for(i=0;i<1000;i++){
//     console.log(i);
// }
