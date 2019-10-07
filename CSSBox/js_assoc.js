alert("inside js assoc")

let user = {
    name : "John",
    age : 22,
    major : "CSC"
}
alert( "User Name" + user.name );
alert( "User Major" + user.major );
let myMenu = {
    'Pizza': 9.99, // a key Pizza has value 9.99
    'Fries': 4.99, // this is also a data property
    'Burgers': 8.99
}
// Square bracket syntax is an alertnative
myMenu['Salad'] = 10.99;

myMenu.Chips = 1.99;
let newItem = prompt("What new item would you like to add? ") // enter Chicken
myMenu[newItem] = 6.99

    document.write(" <ol>")
for ( item in myMenu ) {
    document.write(" <li> Item:" + item + "Price: " + myMenu[item] + "</li>")
    // the back tick makes this easier
    document.write(`<li> Item:${item} Price:${myMenu[item]}  </li>`)
}
document.write(" </ol>")

function showInventory(){
    let myInventory = {
        'Hammers': 33,
        'Pliers': 22,
        'Saws': 122,
        'ScrewDrivers': 2
    }
    document.write(" <h1> The Inventory </h1>")
    document.write(" <ol>")
    for ( item in myInventory ) {
        //document.write(" <li> Item:" + item + "Count: " + myMenu[item] + "</li>")
        // the back tick makes this easier
        document.write(`<li> Item:${item} Price:${myInventory[item]}  </li>`)
    }
    document.write(" </ol>")
}
let myInventory = {
    'Hammers': 33,
    'Pliers': 22,
    'Saws': 122,
    'ScrewDrivers': 2
}
function checkInventory() {
    item = prompt("What items to look for?")
    //Cannot do it this way
    //if ( myInventory.item == undefined ){
    if ( myInventory[item] == undefined ){
        alert(`Error item ${item} does not exist`)
    } else {
        alert(`Yes we have item ${item} We have ct:${myInventory[item]}`)
        //Cannot do it this way
        alert(`Yes we have item ${item} We have ct:${myInventory.item}`)

    }
}
