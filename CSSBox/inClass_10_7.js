"use strict"
let fruits = Array("Apples", "Pears", "Peaches")
console.log( fruits.length)
fruits.sort()


document.write("<ol> ")
for(  let fr in fruits ){
    //document.write("<li>" + fruits[fr]  + "</li>" )
    document.write(`<li> ${fruits[fr]} </li>` )
}
document.write("<ol> ")
console.log( fruits )
console.log( document )
console.log( window )
let name="George"
console.log( name )
// what are JS primative data types?
// 1. number -> float and intergers
// 2. string ->  primative that gets wrapped with an object
// 3. boolean -> true or false values
console.log( name.length )
console.log( name.toUpperCase() )
let x = 12
let getMilk = true


