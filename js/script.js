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

function kvfadeIn() {
    document.getElementById("KV").style.display = 'flex';
}

setTimeout(kvfadeIn, 3000);

//I would do <document.getElementById("KV").style.animation = "scaler 1s ease-out"> here in my JS, but I only ended up breaking the code that way so I'll just do it directly in CSS instead. Hey, at least I tried.


let socialID = document.getElementById('media');
console.log(socialID);
document.innerHTML = "insert media here";

let arrayNames = ['Hana', 'Eimi', 'Koe', 'Irene', 'Kelly', 'Tia'];

const user = {
    location: "Kansai",
    status: function() {
        console.log(`Heya! I'm ${arrayNames[0]} from ${this.location}!`)
    }
}

user.status();

function charaGreet(person) {
    console.log("Hi! I'm " + person + "!");
}
arrayNames.forEach(charaGreet);

arrayNames.push ("Evie");
arrayNames.pop ();
arrayNames.sort ();

console.log (arrayNames);