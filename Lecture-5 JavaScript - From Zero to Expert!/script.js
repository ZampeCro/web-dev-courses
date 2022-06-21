'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
    */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);
  console.log(quess, typeof quess);
  //! ------ Pogresan unos------------
  if (!quess) {
    document.querySelector('.message').textContent = '⛔ Wrong ⛔';
  }
  //! ---------- BINGO ------------
  else if (quess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //!-------- Broj veci--------
  else if (quess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 To high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
  //! ------- Broj manji--------
  else if (quess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 To low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* 
todo-------------------Coding Challenge #1------------------------
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
todo---------------------------------------------------------------
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing.....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
