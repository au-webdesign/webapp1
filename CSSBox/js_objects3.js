// https://www.youtube.com/watch?v=Ug4ChzopcE4&t=11s
//  5 - https://www.youtube.com/watch?v=HboT8g_QSGc
//Creating these users is nice but want to do something like this:
//let userJack = new users("Jack", 22 )
// Cannot really do this well with objects literals
//
// By convention ... upper case letter
//
class Users {
    constructor( email, name ){
       alert( "Inside Constructor ")
        //this.email = "blank@someplace.com"
        //this.name = null
        this.email = email
        this.name = name
        this.loginCt  = 0
    }
    shortLogin() {
        console.log( `User email ${this.email} with name:${this.name} has logged in`)
        // Need to return the instance of the object to 'chain' for vid 6
        return this
    }
    shortLoginOut() {
        console.log( `User email ${this.email} with name:${this.name} has logged OUT`)
        // Need to return the instance of the object to 'chain' for vid 6
        return this
    }
    // For video 6
    updateLoginCt() {
        this.loginCt++
        console.log( `User with name:${this.name} has loginCt:${this.loginCt}` );
        // Need to return the instance of the object to 'chain' for vid 6
        return this
    }
}
// "new"
// 1. Creates an empty object {}
// 2. Sets the value of this to be the new empty object---------------
// 3. Calls the constructor method
let userJake = new Users( "Yoshi@marioCart.com", "Yoshi");
userJake.shortLogin()
userJake.shortLoginOut()
console.log( userJake )
let userPica = new Users( "Pickchu@pokemon.com" , "Pickachu");
console.log( userPica  )
console.log( userPica  )
userPica.shortLogin()
userPica.shortLoginOut()

// --- Method Chaining  https://www.youtube.com/watch?v=8x1fygdWabY
// This will generate a syntax error because shortLogin() return undefined and
// cannot call shortLoginout with undefined
//userPica.shortLogin().shortLoginOut()
userPica.updateLoginCt()
userPica.updateLoginCt()
//
// When properly returning this can now chain
//
// this is not possible until return the 'object' via this
userPica.shortLogin().updateLoginCt().updateLoginCt().shortLoginOut()

let myCards = Array( userJake, userPica );
for ( let i in  myCards ){
    console.log( `Card:${myCards[i].name} `)
}
