"use strict"
function showLOTR(){
    let ele  = document.getElementById("theArea")
    let str = "<ol>"
    str += "<li> Gandalf </li>"
    str += "<li> Aaragon </li>"
    str += "<li> Legolas </li>"
    str += "<li> Gimli </li>"
    str += "<li> Boromir </li>"
    str += "<li> Frodo </li>"
    str += "<li> Sam </li>"
    str += "</ol>"
    alert( "Ready")
    ele.innerHTML = str;

}
function doEither( what ) {
    if ( what == "XMen" ){
        alert(`XMEN!!!! What:${what}`)
    } else {
        alert(`Not What:${what}`)
    }
}
