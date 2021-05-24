'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.score').textContent = 21;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(score > 1) { 
       if(!guess) {
            document.querySelector('.message').textContent = '👎 No number provided!';
        } else if(guess === secretNumber) {
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.message').textContent = '🎉 Correct Number!';
        } else if(guess > secretNumber) {
            score -= 1;
            document.querySelector('.message').textContent = '🔺 Number is TOO HIGH!';
            document.querySelector('.score').textContent = score;
        } else if(guess < secretNumber) {
            score -= 1;
            document.querySelector('.message').textContent = '🔻 Number is TOO LOW!';
            document.querySelector('.score').textContent = score;
        }
    } else {
        // Only decrement when score is above zero - prevents going into negative scores.
        if (score < 0) score--;
        document.querySelector('.message').textContent = '💥 You lost the game.';
        document.querySelector('.score').textContent = score;
    }
});