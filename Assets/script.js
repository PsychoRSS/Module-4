var button1 = document.getElementById("#button-1");
var button2 = document.getElementById("#button-2");
var button3 = document.getElementById("#button-3");
var button4 = document.getElementById("#button-4");
var start = document.getElementById("#start")

var secondsleft = 120;
function timer() {
    var timerinterval = setInterval(function() {
        secondsleft --;
        timerinterval.textcontent = secondsleft + " seconds left till quiz is over"

        if(secondsleft ===0) {
            clearInterval(timerinterval);
            sendMessage();
        }
    }, 1000);
}

var questions = ['What is a variable?', 'What is a Boolien?' ]
console.log(timer);
