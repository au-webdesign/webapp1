let cRem = 10
let remArea = document.getElementById("charactersRemaining")
remArea.innerText = cRem
function countChars(){
    let tweet = document.messageForm.tweet.value;
    let tweetLen = tweet.length
    if ( tweetLen > 10 ) {
        alert( `sorry len:${tweetLen} is too big`)
        tweet = tweet.substring(0, tweet.length - 1);
        alert( `new value len:${tweet} is too big`)
        document.messageForm.tweet.value = tweet;
        cRem += 1
    }
    cRem -= 1
    remArea.innerText = cRem


}