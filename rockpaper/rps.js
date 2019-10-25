class pieces {
    constructor( img, name, beats ) {
        this.beats = beats
        this.name = name
        this.img = img
    }
}
class player{
    constructor( name, wins, loss ) {
        this.name = name
        this.wins = wins
        this.loss = loss
    }
}
p = new player( null, 0, 0 )
let piece= {}
piece['R'] = new pieces( "Rock.png", "Rock", "S")
piece['P'] = new pieces( "Paper.png", "Paper", "R")
piece['S'] = new pieces( "Scissors.png", "Scissors", "P")
function playGame() {
    if ( p.name == null ) {
        p.name = prompt( "What is your name")
    }
    keepGoing = true
    while ( keepGoing ) {
        uPick = prompt("Select Rock (R) Paper (P) or Scissors(S)->")
        if ( uPick == "R" || uPick == "P" || uPick == "S"  ) {
            keepGoing = false
        } else {
            alert(`Error: ${uPick} is illegal`)
        }
    }
    uArea = document.getElementById("user")
    item = piece[uPick]
    uArea.innerHTML = `<img src=${item.img} height="60px" width="60px">`
    uArea.innerHTML += `<br/> Pick: ${item.name}`
    rand = Math.floor(Math.random() * 3) + 1
    if ( rand == 1 ) i = "R"
    else if ( rand == 2 ) i = "P"
    else i = "S"

    let cItem = piece[i]
    alert( `Rand=${rand} Item:${cItem.img}` )
    // Get object of the computer output area
    cArea = document.getElementById("computer")
    cArea.innerHTML = `<img src=${cItem.img} height="60px" width="60px">`
    cArea.innerHTML += `<br/> Computer Pick: ${cItem.name}`

    resArea = document.getElementById("result")
        oStr = "<br /> <span style='color:red'>"
        if ( item.beats == i   ) {
            oStr += "User Beats Computer"
            p.wins += 1
    } else if ( cItem.beats == uPick )  {
          oStr += "Computer Beats User"
          p.loss += 1
    } else if ( i == uPick )  {
          oStr +=  "It is a tie"
     } else {
         alert( "HMMMMM SOME THING IS NOT RIGHT ")
     }
    oStr +=  `Wins:${p.wins} Loss ${p.loss}`
    oStr += "</span>"
    resArea.innerHTML = oStr
}


