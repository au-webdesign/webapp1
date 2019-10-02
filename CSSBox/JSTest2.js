"use strict"
console.log("HEllow there")
let max = 50

let inNumb = getInputFromUser( "Gimme a float number", max)
let res = sumNumber( inNumb )
alert( "Res=" + res)
function sumNumber( max ){
    let sum = 0
    alert("Starting maax=" +max )
    for( let i=0; i<max; i++){
        alert("i=" +i + "max=" +max)
        sum += i
    }
    return sum
}
function getInputFromUser( myMsg, MAX  ) {
    let keepGoing = true
    let n = 0
    while (keepGoing) {
        n = parseFloat(prompt(myMsg, "Message"))
        console.log("N Type=" + typeof (n))
        console.log("n=" + n)
        if (isNaN(n)) {
            alert("Hey thats not a number")
        } else if (n >= 1 && n <= MAX) {
            alert("OK ... got it")
            keepGoing = false
        } else {
            alert("Hey that not between 1 and 10")
        }
    }
    return n
}

