var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var start = document.getElementById("start")
var timer = document.getElementById("timer")

var secondsleft = 240;


var timmer =setInterval(() => {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
}, 1000);

// function timer() {
//     var timerinterval = setInterval(function() {
//         secondsleft --;
//         timerinterval.textcontent = secondsleft + " seconds left till quiz is over"

//         if(secondsleft === 0) {
//             clearInterval(timerinterval);
//             sendMessage();
//         }
//     }, 1000);
// }
// var questions = ['What is a variable?', 'What is a Boolien?' ]
console.log(timer);
 