'use strict';
/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'What is the number?';
console.log(document.querySelector('.message').textContent);

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // when there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');

        // when player wins the game
    } else if (guess === secretNumber) {    
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You Lost the Game!';
            displayMessage('💥 You Lost the Game!');
            document.querySelector('.score').textContent = 0;
        }
    }
        // when guess is too high
    // } else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You Lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // when guess is too low
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You Lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// Reset 
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});