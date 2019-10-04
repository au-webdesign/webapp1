function showList() {
   myList  =  Array("Bronco", "Bears", "Bengals", "Panthers", "Colts" );
    document.write("<h2> NFL Animal Teams </h2>" )
   document.write("<ol>" )
   for( i in myList ){
       document.write("<li>" + myList[i] + "</li>")
   }
    document.write("</ol>" )
    myList.push("Ravens")
    myList.push("Cardinals")
    document.write("<h2> Again but sorted</h2><ol>" )
    myList.sort();
    for( i=0; i<myList.length; i++ ) {
        document.write("<li>" + myList[i] + "</li>")
    }
    document.write("</ol>" )
    let l  = myList.length;
    document.write("<br /> Number of elements:" +l)
    item = myList.pop()
    document.write("<br /> item=" + item );
    document.write("<hr /><ol> " );

    myList[9] = "Apples"
    for( i=0; i<myList.length; i++ ) {
        document.write("<li>" + myList[i] + "</li>")
    }
    document.write("</ol> " );
    l  = myList.length;
    document.write("<br /> length=" + l );

}

