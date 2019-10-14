"use strict"
function doIt(){
    let x
    let n = prompt("Gimme a Number")
    n = n * 5
    if ( isNaN(n) ) {
        alert("This is NaN")
    } else {
      alert("n=" + (n) )
    }
    alert("x=" + (x) )
    n = "happy"
    n = true
}
function doIt2(){
    let myA = document.getElementById("myArea")
    let p = prompt("Give me a part name")
    //console.log( myA )
    let parts = {
       hammer         : 12.99,
       saw           : 2.99,
       screwDriver   : 3.99,
       aMethod    : function( parm1 ) {
          alert( "inside this object p=" +parm1 )
        }

    }
    let price = parts[p]     // CANNOT DO THIS price = parts.p
    let h = parts.hammer     // BUT I COULD DO h = parts['hammer']
    let oStr = `The Part:${p} has price:${price}`
    oStr += `<br /> and BTW The Part:Hammer has price:${h}`
    parts.aMethod( h )


    myA.innerHTML =  oStr
}
class Users {
  constructor( em, us) {
      alert("Inside constructor")
      this.email = em
      this.user = us
      this.loginCt  = 0
  }
    login() {
        console.log(`User:${this.user} with email:${this.email} has logged in`)
        return this
    }
    loginCount() {
        this.loginCt++
        console.log(`User:${this.user} has logged in ct:${this.loginCt} times`)
        return this
    }
}
function doIt3() {
    let myA = document.getElementById("myArea")
    let yoshi = new Users("Yoshi@mariocart.com", "Yoshi")
    let mario = new Users("Mario@mariocart.com", "Mario")
    let users = []
    users[0] = yoshi
    users[1] = mario

    console.log(users)
    console.log("First 0 = " + users[0].user )
    console.log("First 1 = " + users[1].user )
    //yoshi.login().loginCount()
    //console.log(yoshi)
    //mario.login()
    //mario.loginCount()
}
