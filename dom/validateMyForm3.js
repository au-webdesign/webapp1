 function validateForm3() {
     alert("Inside V3")
     theRadio = document.myForm.contact;
     ret = returnRadio(theRadio)
     if (ret == false) {
         alert( "You gotta pick something")
     }
     alert( `ret=${ret}`)
     return false;
 }
 function returnRadio( theRadio ) {
     // theRadio is an array of objects
     nbuttons = theRadio.length;
     for ( i=0; i<nbuttons; i++) {
         if ( theRadio[i].checked ) {
             return(theRadio[i].value);
         }
     }
     return false;
 }
