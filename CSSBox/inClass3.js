let myList = new Array()
let myList2 = []     // more common
let myList3 = new Array("Apples", "Pears", "Plumbs")
let myList4 = ["Hockey" , "Football", "Baseball"]     // more common


// undefined -> was never assigned a value
// null -> was assigned a no value value
// NaN -> involved in a mathematical operation the resulted in Not a Number
let fruits = [];
fruits[0] = "Bananas"
fruits[1] = "Peaches"
fruits[2] = "Plubs";
fruits[3] = "Cherries"
fruits[4] = "Oranges"
fruits[4] = "Apples"
alert( "Fruit Size=" +fruits.length )
//alert( "Item 1 is =" +fruits[1] )
fruits.sort()
for ( let f in fruits ) {
   console.log("\nFirst F=" + fruits[f] )
}

for ( let i=0; i<fruits.length; i++ ) {
   console.log("\nSecond F=" + fruits[i] )
}

