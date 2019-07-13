console.log("event 1");
const callback = function () {
    console.log("event 2");
    // for(i=0;i<10;i++){
    //     console.log(i);
    // }

};
setTimeout(callback, 0);
console.log("event 3");
for (i = 0; i < 5; i++) {
    console.log(i);
}