"use strict"
function showTheRightOne( whichOne ) {
    if ( whichOne == "LOTR") {
        showLOTR()
    } else {
       showAvengers()
    }
}
function showLOTR(){
    alert("Hey there!!!!")
    let area = document.getElementById("showResults")
    if ( area == null){
        alert("Dude thats null")
    }
    let LOTR = Array( "Gandalf", "Gimli", "Legolas", "Aragon", "Frodo", "Sam", "Bromomir", "Assorted Hobbits" )
    let str = "<span style='color:blue'> "
    str += "<ol>"
    for ( let i in LOTR ) {
        str += `<li> Item: ${i} Character:${LOTR[i]} </li>`
    }
    str += "</ol>"
    alert(`STR=${str}`)

    area.innerHTML = str

    console.log( "Area type: " + typeof(area))
    console.log( area )
}
function showAvengers() {
    alert("Inside ShowAvengers ")
    let area = document.getElementById("showResults")
    let str = "<span style='color:red'> "
    str += "<ol><li> Iron Man </li></ol>"
    area.innerHTML = str
}
