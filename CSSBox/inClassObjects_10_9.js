let myObject = {}
myObject.hammers = 2.99
myObject.saws = 12.99
myObject['Bananas'] = 1.99
alert( `Bananas Name="Bananas" Value:${myObject['Bananas']}`)
alert( `Bananas Name="Saws" Value:${myObject.saws}`)

let user = {
    email : "jack@jack.com",
    name : "jack",
    login : function() {
        console.log(`User${this.name} with email:${this.email} has logged in`)
    }
}
alert( `User Name:${user.name} email:${user.email}`)
user.login()


