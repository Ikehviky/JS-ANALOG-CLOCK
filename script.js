// select the clock hand
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock(){
// get the time 
let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(date);
console.log("hour:" + hr + " minute:" + min + " seconds:" + min);

// set the clock positions
let hrPosition = (hr*360/12)+(min*(360/60)/60);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

// rotate the clock hand to the correct position
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

let interval = setInterval(runClock, 1000);