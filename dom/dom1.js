"use strict"
function myFunction() {
    var item = document.getElementById('p1').innerHTML;
    let str = "<br />"
    let lm  = document.lastModified
    str += `This document was LMod:${lm}`
    document.getElementById('p1').innerHTML = str
}
function showHomer() {
    let str = "<br />"
    str += "<img src='homer1.png' id='imgHomer' width='50px' height='50px'/>"
    document.getElementById('homer').innerHTML = str
}
function fatHomer() {
   let width = prompt("How fat (wide) should homer be? ")
   document.getElementById('imgHomer').width = width
    document.getElementById('imgHomer').height = width
}
function changeTitle() {
    let color = prompt("What color would you like?")
    document.getElementById("title").style.color = color
}
function changeFont() {
    let fSize = prompt("What fount size would you like?")
    document.getElementById("title").style.fontSize = fSize
}
function mouseDown( obj ) {
    obj.style.backgroundColor = "Red"
    obj.innerHTML= "You moused down"
}
function mouseOver( obj ) {
    obj.style.backgroundColor = "green"
    obj.innerHTML= "You moused over"
}
function mOut( obj ) {
    obj.style.backgroundColor = "yellow"
    obj.innerHTML= "You moused out"
}

