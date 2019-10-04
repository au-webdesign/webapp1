// var and let -> function scope VS block scope
// function expression is ...
// => Functions -> Smaller and require fucntion def first
// default parameters

function add( num1, num2 ){
    return num1 + num2
}
alert("Add1=" + add(2, 3))

//Function Expression
  let add2 = function( num1, num2 ){
    return (num1 + num2 )
  }
alert("Add2=" + add2(9, 3))
// Function expression are used to avoid
// polluting the global scope of your function list
// instead of you program know about lots of functions
// anonymous function are forgetten immediately


alert( "------ More strang things to follow -----")
alert( "------ subtracting ... " + subtract( 3, 2 ) )
function subtract( num1, num2 ) {
    return num1 - num2
}
let n1 = 5
let n2 = 2
// Arrow functions -> Part of the most recent JS version
subtract2 = ( n1, n2 ) => ( n1 - n2  )
alert( "------ subtracting2 ... " + subtract2( 8, 2 ) )

subtract3 = ( n1, n2 ) => {
    let res = n1 - n2
    alert( "res=" +res )
    return res
}
alert( "------ subtracting3 ... " + subtract3( 8, 2 ) )
