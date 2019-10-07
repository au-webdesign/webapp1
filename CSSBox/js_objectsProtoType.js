// ES6 Classes -> Syntatic Surger built on to of the JS Prototype model
//    - It emulates the prototype model
//    - Understanding the prototype model -> Makes you the inner workings
//                             - working better with objects
// The old style way to create a class
//    -->> Constructor binds all the properties to the object
// Now longer using the class keyword ... this how did it before class
function User( email, name ) {
    this.email = email
    this.name = name
    this.onLine = false
    // This login method is 'attached' to the constructor
    this.login = function() {
        console.log( `The user:${name} has logged in` )
    }
}

let userYoshi = new User( "Yoshi@marioCart.com", "Yoshi");
let userPica = new User( "Pickchu@pokemon.com" , "Pickachu");
console.log( userYoshi )
userPica.login()


// Can directly attach functions to the prototype
// Can use it this way *instead* of defining within the User Constructor
// So can comment out lines 12-15
User.prototype.nlogin = function() {
    this.online = true
    console.log( `Login2: The user:${name} has logged in` )
}
User.prototype.logout = function() {
    this.online = false
    console.log( `LoginOut: The user:${name} has logged OUT` )
}
userPica.nlogin()
userPica.logout()
