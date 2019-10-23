"use strict"
//let myArea = document.getElementById("one")
//console.log( myArea )
//myArea.innerHTML = "Bananas are good!"
class Items{
    constructor( name, image, price ){
       this.name = name;
        this.image = image;
        this.price = price;
    }
}
let items = []
items[0] = new Items("Hammer", "hammer.PNG", 5.99 )
items[1] = new Items("Saw", "saw.png", 6.99 )
items[2] = new Items("Wrench", "wrench.png", 7.99 )
items[3] = new Items("Bears", "bears.jpg", 'free' )
let ct = 0
function showSale2() {
    // Allow multiple clicks of button to scroll through each
    // sale image/item
    alert( `items have len:${items.length} items`)
    let area = document.getElementById("one")
    let curO = items[ct].image
    let oStr = `<img src="${curO}">`
    oStr += `<br /> ${items[ct].name} `
    oStr += ` ${items[ct].price} `
    area.innerHTML = oStr
    ct = ct + 1
    if ( ct >= items.length ) {
        ct = 0
    }
    //let oStr = `<img src="${items[ct].img}">`
}
function showSale() {
    alert("Got this far!")
    let area = document.getElementById("one")
    let oStr = `<img src="${item.image}">`
    oStr += `<br /> ${item.name} `
    oStr += ` ${item.price} `
    area.innerHTML = oStr

}