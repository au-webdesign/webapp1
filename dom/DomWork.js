"use strict"
//alert("Flag!!!!!")
function changeBlockUp( obj ) {
    //let myBox = document.getElementById("myBox")
    obj.style.backgroundColor = "teal"
}
function changeBlockDown( obj ) {
    //let myBox = document.getElementById("myBox")
    obj.style.backgroundColor = "orange"
}
function changeBlockOut( obj ) {
    //let myBox = document.getElementById("myBox")
    obj.style.backgroundColor = "green"
}
function changeBlock( obj ) {
    //let myBox = document.getElementById("myBox")
    obj.style.backgroundColor = "red"
}
function changeDom() {
    let myArea = document.getElementById("myArea")
    myArea.innerHTML = document.lastModified
    let myAster = document.getElementById("aaa")
    myAster.style.display = "inline"
    myAster.style.color = "red"
    myAster.style.fontSize = "20"
}
function showHomer() {
    let myArea = document.getElementById("myArea")
    myArea.innerHTML = "<img src='homer2.png' id='homer' width='50px' height='50px'/> "
    myArea.innerHTML += " <br /> Duuuhhh!!"
}
function changeHomer() {
    let myHomer = document.getElementById("homer")
    let h = prompt("How tall should homer be?")
    let w = prompt("How wide should homer be?")
    myHomer.width = w
    myHomer.height = h
    let myTitle = document.getElementById("myTitle")
    let c  = prompt("How color  should title be?")
    myTitle.style.color = c
    myTitle.style.fontFamily = 'arial'
}
