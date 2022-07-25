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
/* 
function multiply(x, y) {
  return x * y;
}
multiply(2, 3);

todo -------------------------------------

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  }
  return false;
}
isShortsWeather(80);

todo ----------------------------------

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
}
 */ //todo ----------------------------------
//*------------------------------------------
/* let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
 */ //*-----------------------------------------

/* let bird = 'Stiglic';
function fasha() {
  let bird = 'Lugarin';
  console.log(bird);
}
console.log(bird);
fasha();
 */ //*----------------------------------------------

/* let square = function (number) {
  num = Math.pow(number, 2);
  console.log(num);
};
square(4);
 */
//*-------------------- Roll dice twice/10 times -----------------------------------

/* function callTwice(func) {
  func();
  func();
}
function rollTenTimes(n) {
  for (let i = 0; i < 10; i++) {
    n();
  }
}
function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
rollTenTimes(rollDice);
 */
//*----------------------------------------------------------------------

/* function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log('Dobro je');
    };
  } else {
    return function () {
      alert('zajebo si');
      alert('zajebo si');
      alert('zajebo si');
    };
  }
}
const mystery = makeMysteryFunc();
console.log(mystery);
 */
//*------------------------------------------------------------------------
/* function isBetween(num) {
  return num >= 50 && num <= 100;
}
 */
/* function isBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
const isAdult = isBetween(19, 40);
console.log(isAdult(15));
 */
//*----------------------------------------------------------

/* const myMath = {
  PI: 3.14,
  naKvadrat(num) {
    return num ** 2;
  },
  naTrecu(num) {
    return num ** 3;
  },
};
 */

//todo --------- exercise method------

/* const square = {
  area(num) {
    return num * num;
  },
  perimeter(num) {
    return num * 4;
  },
};

 */
//todo--------------------------------

/* const cat = {
  name: 'Pero',
  color: 'Plava',
  func() {
    console.log(`${this.name} kaze mijauuu`);
  },
};
cat.func();
const mjau2 = cat.func;
mjau2();
 */
//*----------------------------------

/* const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg(num) {
    num = num + 1;
  },
};
hen.layAnEgg();
hen.name;
console.log(`${hen.layAnEgg}EGG`);
hen.eggCount;
 */
//*---------------------------------

//! ------ callback and array methods-------
//? ---------------- forEach
/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});
 */
//* ------------same example

/* for (const el of numbers) {
  console.log(el);
}
 */

/* 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums2 = nums.map(function (br) {
  return br * 2;
});
console.log(nums2);
 */
//todo --------- START --------

/* const fullNames = [
  { first: 'Albus', last: 'Dumbledore' },
  { first: 'Harry', last: 'Potter' },
  { first: 'Hermione', last: 'Granger' },
  { first: 'Ron', last: 'Weasley' },
  { first: 'Rubeus', last: 'Hagrid' },
  { first: 'Minerva', last: 'McGonagall' },
  { first: 'Severus', last: 'Snape' },
];
 */
//todo --------------- END --------------

//*------- arrow function------------

/* const square = num => {
  return num * num;
};
console.log(square(3)); */
//*---------------------------------
//todo --------- START --------
/* const greet = name => {
  console.log(`"Hey ${name}!"`);
};
greet('Hagrid');
greet('Luna'); */
//todo --------------- END --------------

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

/* const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
 */
//*------- setTimeout ------------------
/* setTimeout(() => {
  console.log('Hello');
}, 3000); */

/* const id = setInterval(() => {
  console.log(Math.random());
}, 3000); */
//*-----------------------------------------
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const rez = numbers.filter(n => {
  return n < 10;
});
console.log(rez); */
//*-----------------------------------------
/* const exams = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
exams.some(score => score >= 5); */
//todo --------------- Exercise (radi)------------------------------
/* const numbers = [2, 4, 6, 8];
const allEvents = numbers.every(num => num % 2 === 0);
if (allEvents === true) {
  console.log('bome jesu');
} else {
  console.log('bome nisu');
} */

//todo -----------------------------------------------------------------
/* [3,5,7,9,11].reduce(accumulator, currentValue)=>{
  return accumulator+currentValue
} */

/* const prices = [3, 5, 8, 12, 22];
 prices.reduce((total, price) => {
  return total + price;
}); 
// prices.reduce((total, price) => total + price);
const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
}); */
//*----------------- SPREAD ---------------------
/* const person = {
  firstName: 'Vigo',
  lastName: 'Mortesen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
 */
/* function rollDice(numSides) {
  if (numSides===undefined) {
    numSides=6
  }
  return Math.floor(Math.random() * numSides) + 1;
} */
/* function rollDice(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
function greet(name, msg = 'dje si') {
  console.log(`${msg},${name}`);
}
 */
/* const dataFromForm = {
  email: 'boza@gmail.com',
  password: '1234',
  username: 'hasjha',
};
const newUser = { ...dataFromForm, admin: false }; */
/* function sum(...nums) {
  return nums.reduce((total, elem) => total + elem);
}
 */
/* const scores = [12212, 323131, 5435543, 456446, 35353];
const goldMedal = scores[0];
const silverMedal = scores[1];
const [gold, silver, ...everOneElse] = scores;
 */
