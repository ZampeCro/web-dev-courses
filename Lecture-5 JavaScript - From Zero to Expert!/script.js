'use strict';

//!----- Selecting elements ------
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//!----- Starting conditions -----
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//!---- Rolling dice funcionality ----
btnRoll.addEventListener('click', function () {
  if (playing) {
    //todo 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //todo 2.Display a dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //todo 3.Wait for roll 1
    if (dice !== 1) {
      //* -add to current score
      ////currentScore += dice;
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //* -switch to next player
      switchPlayer();
    }
  }
});
//!----- Hold score functionality-------

btnHold.addEventListener('click', function () {
  if (playing) {
    //todo 1.Add current score to player score pool
    ////scores[0]=scores[0]+currentScore;
    ////scores[1]=scores[1]+currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //todo 2.Check is player score >=100
    if (scores[activePlayer] >= 20) {
      //todo 3.Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //todo 4.Switch to next player
      switchPlayer();
    }
  }
});
