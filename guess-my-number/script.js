'use strict';

// TODO: Refactor game logic
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.score').textContent = 21;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)
const setMessage = (messageString) => {
    document.querySelector('.message').textContent = messageString;
};

const generateNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateNumber();
let score = 20;
const initialMessage = 'Start guessing...';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(score > 1) { 
       if(!guess) {
            setMessage('👎 No number provided!');
        } else if(guess === secretNumber) {
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            setMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
            if (Number(document.querySelector('.highscore').textContent) < Number(score)) {
                document.querySelector('.highscore').textContent = score;
            }
        } else if(guess > secretNumber) {
            score -= 1;
            setMessage('🔺 Number is TOO HIGH!');
            document.querySelector('.score').textContent = score;
        } else if(guess < secretNumber) {
            score -= 1;
            setMessage('🔻 Number is TOO LOW!');
            document.querySelector('.score').textContent = score;
        }
    } else {
        // Only decrement when score is above zero - prevents going into negative scores.
        if (score < 0) score--;
        setMessage('💥 You lost the game.');
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    setMessage(initialMessage);
    secretNumber = generateNumber();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15';
    document.querySelector('body').style.background = "#222"
    document.querySelector('.score').textContent = score;
});