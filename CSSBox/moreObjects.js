// An Array is an object
myList = [ 'Baseball', 'Hot Dogs', 'Apple Pie' ];
// it has properities
alert( myList.length );

// it has methods
myList.sort();


//document is an object in JS-
// it has properties-
//https://www.w3schools.com/jsref/dom_obj_document.asp
z = document.doctype
alert(`docutype:${document.doctype.name}`)
// it has methods
document.write("Hello")

// window is an object
//https://www.w3schools.com/js/js_window.asp
// It has properies
x = window.innerHeight
alert(`Inner Height=${x}`)
alert('Warning ... resizing ');
externalWindow = window.open("http://www.aurora.edu", "auWindow", "resizable")
externalWindow.resizeTo( 500, 400)


//Technically  String  is an NOT an object in JS-
//Number, string, booleans are NOT objects they are primitive types
// BUT it has properties-
//https://www.w3schools.com/jsref/jsref_obj_string.asp
let myName = "Jack"
let upper = myName.toUpperCase()
let l = myName.length;
alert( `Upper:${upper} l:${l}`)
// String looks like an object because JS silently wraps  the primative inside an object

// See https://www.youtube.com/watch?v=4l3bTDlT6ZI