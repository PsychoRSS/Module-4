var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var start = document.getElementById("start")


const startingMinutes = 3;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);
const countdownEL = document.getElementById('timer')
function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

console.log(timmer);
