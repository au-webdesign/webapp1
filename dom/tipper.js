function Calculate() {
    let val = document.forms['myform'].amount.value;
    if (val == null) {
        alert('You need to fill in an amount.');
    }
    if ( val > 0 && val <= 10000 ) {
        document.forms['myform'].tip.value = val*.15;
    } else {
        alert('Amount must be between 0 and 10,000 ');
    }
}
function noChange() {
    alert('You cannot change this field');
}

