let userName = 'John';
function showMessage() {
    let message = 'Hello, ' + userName;    // Can access the outer variables
    alert(message);
    let message2 = "Hello2" + userName
    userName += " Smith"
}

function showMessage2(  msg="Default Message") {
    alert( "msg=" +msg )
}

showMessage(); // Hello, John
alert( userName )                 // userName is global in scope
// alert( message2 )               // message2 is unknow value

showMessage2( )