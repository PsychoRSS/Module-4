var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");


// start button
function startbttn(){
    var start = document.getElementById("start")
    document.addEventListener("click",start).updateCountdown()
}

// timer
const startingMinutes = 3;
let time = startingMinutes * 60;


setInterval(updateCountdown, 1000);
const countdownEL = document.getElementById('timer')
function updateCountdown(){

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 3 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if (updateCountdown < 0){
        clearInterval(updateCountdown);
        document.getElementById("timer").innerHTML = "expired"
    }
}




// questions
var questions = ['What is a variable?', 'What is a Boolien?' ]
