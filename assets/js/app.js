// global variables
// game counters
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timer;


// html #id grab
const start = document.getElementById('start');
const submit = document.getElementById('submit');
const timeContainer = document.getElementById('time');
const game = document.getElementById('game');
const questionContainer = document.getElementById('question');
const buttons = document.getElementById('btns');
const result = document.getElementById('result');
const finalScore = document.getElementById('final-score');
const initialsContainer = document.getElementById('initials');



// global functions

// timer count down function
function countDown() {
    // decrement time and print to Dom
    time--;
    timeContainer.textContent = time;

    // conditional statement to end game if time is 0
    if (time <= 0){
        endgame();
    }
}



// application start

