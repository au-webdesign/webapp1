 function validateForm2() {
     var ncheck=0;
     var i;
     var len1 = document.myform.vacation.length;
     oStr = ""
     for ( i=0; i<len1; i++ ) {
         if ( document.myform.vacation[i].checked ) {
             ncheck=ncheck + 1;
             if ( oStr != '') oStr += ", "
             oStr += document.myform.vacation[i].value;
         }
     }
     alert ( "you checked" + ncheck);
     alert ( "that would be thee: " + oStr );
     if ( document.myform.emailMe.checked ) {
         alert ( "OK I Will email you " );
     } else {
         alert ( "OK I Will Not email you " );

     }
     checkSelectBox()
         //if ( ncheck > 0 ) return true;
     //else return false;

     alert( "False on ... will not send")
     return false;
 }
 function checkSelectBox() {
     let ncheck=0;
     let i;  let vals = ' '; let cma='';
     let len = document.myform.state.length;
     for ( i=0; i<len; i++ ) {
         if ( document.myform.state[i].selected ) {
             ncheck=ncheck + 1;
             vals = vals + cma + document.myform.state[i].value;
             cma = ',';
         }
     }
     alert( `Selected these from dropDown:${vals}`)
     var theAns = document.myform.contact;

     val1 = returnRadio( 'myform', 'contact2' );
     if ( val1 == 'Yes' ) {
         alert( 'Radio Thank you we will contact you');
         vacation = returnRadio( 'myform', 'vacation' );
     } else {
         alert( 'OK we will not contact you');
     }
 }
 function returnRadio( formName, radioName ) {
     var theRadio = document[formName][radioName];
     nbuttons = theRadio.length;
     for ( i=0; i<nbuttons; i++) {
         if ( theRadio[i].checked ) {
             return(theRadio[i].value);
         }
     }
     return false;
 }
