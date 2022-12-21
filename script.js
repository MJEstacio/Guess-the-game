'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 3;
// document.querySelector('.score');
// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

const displayHighScore = function(highscore) {
  
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 too high!' : '📉 too low!';
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the Game!';
      displayMessage('You lost the Game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
      // document.querySelector('body').style.backgroundColor = 'red';
      displayBody('red');
    }
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Answer!';
    displayMessage('🎉Correct Answer!');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    displayBody('#60b347');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
// Reset Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('body').style.backgroundColor = '#222';
  displayBody('#222');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
// // When the number is too low!
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉Number is too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the Game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'red';
//   }
// }

// // When guess is wrong

// // When the number is too high!
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈Number is too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the Game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'red';
//   }
// }
// When the player Wins!
