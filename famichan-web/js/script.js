let alertWorkInProg = function () {
    return alert('WARNING! This site is still a work in progress, so there may be features that are either missing or buggy. Proceed with caution.  -Kira'); //This is a concatonative string. This can be considered 'primitive' data
}


function getTime() {
    let newTime = new Date();
    let currentTime = newTime.getHours();
    return currentTime;
}
const mornGreet = "Good morning!";
const arvoGreet = "Hello!";
const eveGreet = "Good evening!";
let myTime = getTime();

if (myTime >6 && myTime <12) {
    console.log (mornGreet);
} else if (myTime >18) {
    console.log (eveGreet);
} else {
    console.log (arvoGreet);
}
alertWorkInProg();

console.log ('Current location is ' + location.href);
console.log('Current port number is ' + location.port);
console.log(history);

function kvFadeIn () {
    document.getElementById("KV");
}
setTimeout(kvFadeIn, 1000);