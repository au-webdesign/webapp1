//  8 - https://www.youtube.com/watch?v=_cgBvtYT3fQ
// JS Inheritance
class Users {
    constructor( email, name ){
        alert( "Inside Constructor ")
        this.email = email
        this.name = name
        this.loginCt  = 0
    }
    shortLogin() {
        console.log( `User email ${this.email} with name:${this.name} has logged in`)
        return this
    }
    shortLoginOut() {
        console.log( `User email ${this.email} with name:${this.name} has logged OUT`)
        return this
    }
    updateLoginCt() {
        this.loginCt++
        console.log( `User with name:${this.name} has loginCt:${this.loginCt}` );
        return this
    }
}
// Suppose want a 'special' Admin user that has all properties and methods
//  of Users but has more 'special' //  cial' extra properities and methods
class Admins extends  Users {
    deleteUser( user ) {
        # See : https://www.w3schools.com/jsref/jsref_filter.asp
        myUsers = myUsers.filter( u => {
            return u.email != user.email
        })
    }
}

let userJake = new Users( "Yoshi@marioCart.com", "Yoshi");
let userPica = new Users( "Pickchu@pokemon.com" , "Pickachu");
let userChar = new Users( "Charmander@pokemon.com" , "Charmander");
var myUsers = [ userJake, userPica, userChar ]
console.log( "B4" + myUsers )
let admin = new Admins( "Mario@marioCart.com", "Mario")
admin.deleteUser( userPica )
console.log(  myUsers )
// Now lets add the admin into array
var myUsers = [ userJake, userPica, userChar, admin ]
admin.deleteUser( userChar )
console.log(  myUsers )

myUsers.forEach( function( arrayItem ) {
    console.log(`User:${arrayItem.name} email:${arrayItem.email}`)
});

