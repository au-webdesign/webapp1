"use strict"
function validateIt() {
   let l1 = document.myForm.vacation.length;
   alert( `Flag1 len=${l1}`)
   let oStr = ''
    console.log( document.myForm.vacation )
   for ( let i=0; i<l1; i++ ) {
      if ( document.myForm.vacation[i].checked ) {
         if ( oStr != "" ) oStr += ", "
         oStr += document.myForm.vacation[i].value
      }
   }
   let len1 =  document.myForm.contact.length;
   if ( document.myForm.contact.checked ) {
     alert( `It is checked ${len1}`)
   } else {
      alert( `It is NOT NOT checked ${len1}`)
   }
      if ( oStr == "" ) {
      alert( `Errro you must check 1 of the vacations`)
      return false
   }
   alert( `You Checked these vacations:${oStr}`)
    let obj = document.myForm.state;
    let ret = checkSelectDropDown( obj )
   return true
}
function checkSelectDropDown( o ) {
   alert( `Select length=${o.length}`)
   let oStr = ''
   for ( let i=0; i<o.length; i++ ) {
      if ( o[i].selected ) {
         if ( oStr != "" ) oStr += ", "
         oStr += o[i].value
      }
   }
   alert( `oStr=${oStr}`)
   if ( oStr == "" ) {
      return false
   } else {
      return true
   }
}
