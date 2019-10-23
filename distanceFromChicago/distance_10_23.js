class distances {
    constructor( img, dist ) {
        this.img = img
        this.dist = dist
    }
}
city = {}
city['Dallas'] = new distances("dallas.PNG", 948 )
city['Boston'] = new distances("boston.PNG", 984 )
city['St Louis'] = new distances("stlouis.PNG", 297 )
city['Aurora'] = new distances("aurora.PNG", 30 )
function showCities() {
    //alert("Got this far")
    let cArea = document.getElementById("cities")
    let str = ""
    for ( c in city ){
        alert( c )
        str += `<br /> <img src="${city[c].img}" height='60px' width='60px'`
        str +=  ` onclick="showDistance('${c}')" > `
        alert( str )
    }
    cArea.innerHTML = str
}
function showDistance( cName ) {
    alert( "Got CName=" + cName )
}
