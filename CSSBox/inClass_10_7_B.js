let  person = {}
person.first = "Miles"
person.last = "Davis"
person.plays = "Trumpet"
person["MusicType"] = "Jazz"
person.gotGig = false

let  menu = {
   Pizza: 9.99,
   Burgers: 19.99,
   Fries: 2.99,
   bananas: 12.99,
   Chicken: 12.99
}
let checkFor = prompt("What do want to know the price of?");
if ( menu[checkFor] != undefined  ) {
    alert( `Yes Menut price:${menu[checkFor]} is item: ${checkFor} `)
}

//if ( person.checkFor] == undefined  || !person.checkFor ) {
if ( person[checkFor] != undefined  ) {
   alert( `Yes Person:${person.first} has ${checkFor} `)
} else {
    alert( `Nope Person:${person.first} has no ${checkFor} `)
    console.log( person )
    console.log( "Plays:" + person[checkFor] )
}

   document.write("<ol>")
for ( item in person ){
   document.write(`<li> Key:${item} val:${person[item]} </li>`)
}
document.write("</ol>");

if ( person.gotGig == undefined  || !person.gotGig ){
   alert( `Person:${person.first} got no gig `)
} else {
   alert(`YES! Person:${person.first} Has a gig `)
}


console.log( typeof(person))
console.log( person)


