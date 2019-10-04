"use strict"
let x = 12
let y=31.5
// Hello this a comment
/*
   this is a block comment
   written by me!
 */

let userInput = parseInt( prompt("Gimme a number from 1-100"))

let keepGoing = true
while ( keepGoing ){
    let userInput = parseInt( prompt("Gimme a number from 1-100"))
    if ( isNaN(userInput)){
        console.warn("NaN  detected")
        alert("Illega number detected")
        continue
    } else {
        keepGoing = false
    }
}
alert( "IT is OK ")

