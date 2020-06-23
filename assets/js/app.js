// ==========global variables===========
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
const welcome = document.getElementById('welcome');
const end = document.getElementById('end-game');

// ========global functions==============

// timer count down function
function countDown() {
    // decrement time and print to Dom
    time--;
    timeContainer.textContent = time;

    // conditional statement to end game if time is 0
    if (time <= 0){
        endGame();
    }
}

// start quiz function
function startGame() {
    // hide welcome message and show the game section
    welcome.classList.add('hide');
    game.classList.remove('hide');

    // show starting time
    timeContainer.textContent = time;

    // start timer
    timer = setInterval(countDown, 1000);

    // generate questions with answer choices
    populate();
}

// populate questions and answers
function populate(){
    // grab question question at the above index
    let current = questions[currentQuestionIndex];
    questionContainer.textContent = current.question;

    // clear previous children
    buttons.textContent = '';

    // function that loops through choices and creates a button for each
    current.choices.forEach(
        function(choice, i){
            // populate question choices
            var optionNode = document.createElement("button");
            optionNode.classList.add('choice');
            optionNode.setAttribute("value", choice);
            // text the name to the button with an increasing index
            optionNode.textContent = i + 1 + '.' + choice;
            // add eventListener to each button
            optionNode.onclick = answerCheck;
            // append the choice 
            buttons.appendChild(optionNode);
        }
    );
}

// answer check of the button clicked
function answerCheck() {
    // this refers to the button that was clicked
    if(this.value !== questions[currentQuestionIndex].answer){
        // subtract question time off of timer. Send new time
        time -= 15;
        // conditional checking that time does not go below zero
        if (time <= 0){
            time = 0;
        }
        // print to DOM
        timeContainer.textContent = time;
        // display type of result
        result.textContent = "Incorrect!";
    } else {
        result.textContent = "Correct!";
    }

    // set the result of the answer to flash for a period of time
    result.classList.remove('hide');
    setTimeout(function() {
        result.classList.add('hide');
    }, 1000)
    // increase question index
    currentQuestionIndex ++;
    // populate next question or end game if last question 
    if (currentQuestionIndex === questions.length){
        endGame();
    } else {
        populate();
    }
}

// end game function 
function endGame() {
    // stop timer
    clearInterval(timer);
    // show end game section 
    end.classList.remove('hide');
    finalScore.textContent = time;
    // hide question section 
    game.classList.add('hide');
}

// save the high score of the new player
function saveScore() {

}

// check if user pushed enter instead of clicking submit
function enterCheck() {

}


// ===============application start===================

// onclick for start button
start.onclick = startGame;