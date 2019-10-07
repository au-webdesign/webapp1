let users = {
    email : "jack@jack.com",
    name : "jack",
    login : function() {
        console.log( `User email ${this.email} with name:${this.name} has logged in`)
    },
    shortLogin() {
        console.log( `User email ${this.email} with name:${this.name} has logged in`)
    },
    shortLoginOut() {
        console.log( `User email ${this.email} with name:${this.name} has logged OUT`)
    }
}

console.log(`user1:{users1.email}`)
console.log( users.login() )
console.log( users.shortLoginOut() )
// 3 ---
// --- can update the property
users.name = 'Jane'
console.log( users.login() )

// Square brackets work
users['name'] = "Julie"
users['email'] = "Julie@Julie.com"
console.log( users.login() )
//
// Square brackets allow for variables be used for the properities:
// https://www.youtube.com/watch?v=ni9e-lOEw3Q
//
let prop = 'name';
alert( "Hmmmm"  + users[prop])
prop = 'email';
alert( "Hmmmm"  + users[prop])

// can create new properites on the object
// while this is strange ... it seems bad practice.
users.age = 22
users.alertInfo = function () {
    alert( `User email ${this.email} with name:${this.name} has age ${this.age} `)
}
users.alertInfo()

