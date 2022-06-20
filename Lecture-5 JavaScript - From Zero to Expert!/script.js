'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);
  console.log(quess, typeof quess);
  if (!quess) {
    document.querySelector('.message').textContent = '⛔ Wrong ⛔';
  } else if (quess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉';
  } else if (quess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 To high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (quess < secretNumber) {
    document.querySelector('.message').textContent = '🔺 To low';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
});
