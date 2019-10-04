//
// Function declaration
function add(num1, num2) {
    return num1 + num2;
}
//Example function expression
// Creates a function and puts its result in n
//Function expressions are invoked to avoid polluting the global scope.
// Instead of your program being aware of many different functions,
// when you keep them anonymous, they are used and forgotten immediately.

// Function expression
var add2 = function (num1, num2) {
    return num1 + num2;
};
alert("add=" +add(3, 4) )
alert ("add2=" +add2(9,4) )

alert("This works subtract=" +subtract(3, 4) )
function subtract(num1, num2) {
    return num1 - num2;
}
//alert("This DOESNOT work subtract=" +subtract2(3, 4) )
// Function expression
var substract2 = function (num1, num2) {
    return num1 - num2;
};

// We all know what this does
function add3( n1, n2 ){
    return n1 + n2
}
alert ("------------>>>>> add3=" +add3(9,4) )
// Arrow syntax for shorter syntax
var  add4 = ( n1, n2 ) => n1 + n2
// The same as
//var  add4 = ( n1, n2 ) =>  return n1 + n2
alert ("------------>>>>> add4 arrow=" +add4(9,4) )

var  add5 = ( n1, n2 ) => {
    n1 = n1 * 2
    return  n1 + n2
}
alert ("------------>>>>> add4 arrow with curlies =" +add5(9,8) )
