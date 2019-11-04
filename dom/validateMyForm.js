 function validateForm() {
        oStr = ''
        if (document.myform.Name.value == '') {
            alert('Error: myName needs a value.');
            //oStr += 'Error: myName needs a value.'
            return false;
        }
     if (!document.forms['myform'].email.value) {
            alert('You must provide an email address.');
            oStr += "\n Error: You Must provide an email address"
            return false;
        } //if ( oStr == '' ){
            //alert( oStr )
            //return false
        //} else {
            //alert( oStr )
            //return true
        //}
        return True;
 }
