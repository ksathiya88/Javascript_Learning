//Promise Chain
let promise_obj = new Promise(function (resolve1, reject1) {
        setTimeout(function () {
            //resolve1("Success");
            reject1("Failure");
        }, 1000);
    })
    .then(
        function (value) {
            return new Promise(function (resolve1, reject1) {
                setTimeout(function () {
                    resolve1("Success1111");
                    //reject1("Failure");
                }, 2000);
            });
        },
        function (value) {
            console.log("Promise state rejected");
            console.log("Failure", value);
        }
    )
    .then(value => {
        console.log("Second Promise returned", value);
    }, () => {

    });

console.log("promise", promise_obj);