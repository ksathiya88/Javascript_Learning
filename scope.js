// let declaration - block scope
var a =10;


var a =20;

let b =20;

let b =30;

// scopes in Javascript
// 1) global scope
// 2) function scope(local scope)
var func1 = function () {
    for (var i = 0; i < 10; i++) {
        var a = 10;
        {
            let b=30;
            console.log(b);
        }
    }
    //console.log(b);
}
func1();