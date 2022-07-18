/* const random = Math.random();
if (random < 0.5) {
  console.log('manji je od 0.5');
  console.log(random);
}
if (random > 0.5) {
  console.log('veci je od 0.5');
  console.log(random);
}
 */
/* function isEven(num){
    !WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (num==isEven){console.log('even')}

 */
/* function getColor(phrase) {
  todo WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (phrase == 'stop') {
    console.log('red');
  } else if (phrase == 'slow') {
    console.log('yellow');
  } else if (phrase == 'go') {
    console.log('green');
  } else {
    console.log('purple');
  }
  todo AND THIS LINE ↑↑↑↑↑
}
 */

/* const password = prompt('Please enter yor password');
todo ----- nuber of caracters
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('valid password');
  } else {
    console.log('u have space');
  }
} else {
  console.log('password too short');
}
todo------ no space in password
 */

/* let movieLine = ['meho', 'jure', 'andja'];
movieLine.push('salko');

let person = movieLine.pop();
 */
/* let colors = ['bijela', 'plava', 'zuta', 'crvena', 'smedja'];
colors.splice(1, 0, 'kafena');
 */

// DO NOT TOUCH!!! (please)
//todo ----challenge
/* const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

! YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3].splice(1, 1, 'Hugo');
 */
/* const person = {
  firstName: 'Mick',
  lastName: 'Jagger',
};
console.log(person.firstName);
 */

/* const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

todo YOUR CODE GOES DOWN HERE:
const fullAddress = [
  restaurant.address,
  restaurant.city,
  restaurant.state,
  restaurant.zipcode,
];
console.log(fullAddress);

 
const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

todo YOUR CODE GOES DOWN HERE:
let fullAddress = [
  restaurant.address,
  restaurant.city,
  restaurant.state,
  restaurant.zipcode,
];
console.log(fullAddress);
*/
/* for (let i = 0; i < 10; i++) {
  console.log('im in th loop');
  console.log(i);
}
 */
/* for (let i = 0; i <= 5; i++) {
  console.log('Da ba dee da ba daa');
}
 */
/* for (let index = 100; index > 0; index -= 10) {
  console.log(index);
}
 */
/* for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}
 */

/* const animals = ["lion", "tiger", "gephard"];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
 */
//todo challenge
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

/* for (let i = 0; i < people.length; i++) {
  const zivotinje = people[i];
  console.log(zivotinje.toUpperCase());
}
 */

/* for (let i = 0; i < 10; i++) {
  console.log(`I je: ${i}`);
  for (let j = 1; j < 4; j++) console.log(`    J je: ${j}`);
}
 */

/* let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}
 */

/* const secret = "tajna";
let guess = prompt("unesi tajnu");
while (guess !== secret) {
  guess = prompt("unesi ponovno");
}
console.log("pogodio si");
 */
/* let input = prompt("Say something:");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop") {
    break;
  }
}
 */

//// todo Guessing game
/* 
let maximum = parseInt(prompt("unesi broj"));

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
 */

//* PRACTICE ------------------------------
/* const subredits = ["knjige", "zivotine", "kompjuteri", "hargije"];
for (let i = 0; i < subredits.length; i++) {
  console.log(` Zelimo uci na: ${subredits[i]}`);
}
for (sub of subredits) {
  console.log(` Zelimo uci na: ${sub}`);
}
 */
//*----------------------------------------
/* const people = [
  ["Scooby", "Velma"],
  ["Daphne", "Shaggy", "Fred"],
];

for (let i = 0; i < people.length; i++) {
  const parovi = people[i];
  for (let i = 0; i < parovi.length; i++) {
    console.log(parovi[i]);
  }
}
for (let row of people) {
  for (let student of row) {
    console.log(`${student}`);
  }
}
 */
//*----------------------------------------------
//! -----Exercise-------------
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

?WRITE YOUR LOOP BELOW THIS LINE:
for (let mnoz of numbers) {
  mnoz = mnoz * mnoz;
  console.log(mnoz);
} */
//!---------------------------------

/* let die1 = Math.floor(Math.random() * 6) + 1;
console.log(die1);
 */
/* function singSong() {
  console.log('do');
  console.log('re');
  console.log('mi');
}
singSong();
 */
//? DEFINE YOUR FUNCTION:

/* function rant() {
  console.log('message'.toUpperCase());
  console.log('message'.toUpperCase());
  console.log('message'.toUpperCase());
}

rant('message');


*/

/*
*---------------------------------------
function greet(firstName, lastName) {
  console.log(`Greet ${firstName} ${lastName[0]}.`);
}
greet('Anja', 'Alavanja');
*------------------------------------------
 */

/* function repeat(str, numRepeat) {
  let result = '';
  for (let i = 0; i < numRepeat; i++) {
    result += str;
  }
  console.log(result);
}
repeat('kara-mara ', 5);
 */
//?-----------------------------------------
//todo  ------------Exercise--------

/* function isSnakeEyes(dice1, dice2) {
  if (dice1 === 1 && dice2 === 1) {
    console.log('Snake Eyes!');
  } else {
    console.log('Not Snake Eyes!');
  }
}
isSnakeEyes(2, 1);
 */
//* ------------------------------------

/* function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  let sum = x + y;
  return sum;
}
const total = add(add(2, 23), 10);

console.log(total);
 */
//todo ------------------------------------

function multiply(x, y) {
  return x * y;
}
multiply(2, 3);

//todo -------------------------------------

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  }
  return false;
}
isShortsWeather(80);

//todo ----------------------------------

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
}
