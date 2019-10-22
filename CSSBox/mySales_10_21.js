"use strict"
class Items{
    constructor( name, image, price ){
       this.name = name;
        this.image = image;
        this.price = price;
    }
}
let item = new Items("Hammer", "hammer.PNG", 5.99 )
function showSale() {
    alert("Got this far!")
    let area = document.getElementById("one")
    let oStr = `<img src="${item.image}">`
    oStr += `<br /> ${item.name} `
    oStr += ` ${item.price} `
    area.innerHTML = oStr

}