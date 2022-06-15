'use strict';
/*
function logger() {
  console.log("My name is Igor");
}
logger();
logger();
logger();
 */
/* 
* --------------- FUNCTIONS ---------------
function masinaVocna(oranges, apples) {
  // console.log(oranges, apples);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = masinaVocna(5, 0);
console.log(appleJuice);
// console.log(masinaVocna(5, 0));

const orangeApple = masinaVocna(2, 4);
console.log(orangeApple);
*---------------------------------- declaration
age1 = calcAge1(1975);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
*--------------------------------- expression

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
age2 = calcAge2(1976);

console.log(age1, age2);

 


*/
//* ----------------- arrow function

// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1975);
// console.log(age3);

/* const yearsUntilRetiremen = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retire = 67 - age;
  return `${firstName} u penziju za ${retire}g ide`;
};
console.log(yearsUntilRetiremen(1975, "Zampe"));
 */

//* --------------- function calling other function

/* function komadiVoca(fruit) {
  return fruit * 4;
}

function masinaVocna(oranges, apples) {
  const applePieces = komadiVoca(apples);
  const orangePieces = komadiVoca(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(masinaVocna(3, 2));
 */

//*---------------------------------------------------

/* const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
console.log(calcAge(1975));
//*--------------------------------------------------
const yearsUntilRetiremen = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retire = 67 - age;
  if (retire > 0) {
    console.log(`${firstName} u penziju za ${retire}g ide`);
    return retire;
  } else {
    console.log(`${firstName} is allready retired`);
    return -1;
  }
};
console.log(yearsUntilRetiremen(1985, "Zampe"));
console.log(yearsUntilRetiremen(1955, "Meho"));
 */
//*------------------------------------------------------

/*
* --------------------Coding Challenge 2/1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
* -----------------------------------------------------------------------
*/

/* 
? ----------------TEST----------------------------
let teamKoalas = (koalaSc1, koalaSc2, koalaSc3) => {
  avgKoalas = (koalaSc1 + koalaSc2 + koalaSc3) / 3;
  console.log(`prosjecan score Koale je ${avgKoalas}`);
};

let teamDolphins = (dolphinSc1, dolphinSc2, dolphinSc3) => {
  avgDolphins = (dolphinSc1 + dolphinSc2 + dolphinSc3) / 3;
  console.log(`prosjecan score Delfina je ${avgDolphins}`);
};
teamKoalas(65, 54, 49);

teamDolphins(44, 23, 71);

let checkWinner = (avgKoalas, avgDolphins) => {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koale su pobjednici ${avgKoalas} vs ${avgDolphins}`);
    return avgKoalas;
  } else if (avgKoalas <= avgDolphins * 2) {
    console.log(`Dolphin  su pobjednici ${avgDolphins} vs ${avgKoalas}`);
  } else {
    console.log("nije niko pobjednik");
  }
};
checkWinner(1500, 100);
checkWinner(avgKoalas, avgDolphins);

teamKoalas(23, 34, 27);
teamDolphins(85, 54, 41);
checkWinner(avgKoalas, avgDolphins);
? -----------------------------------------------------
 */
/*
const friend1 = "Meho";
const friend2 = "Pero";
const friend3 = "Nurko";

const friends = ["Meho", "Pero", "Nurko"];
console.log(friends);

const y = new Array(1991, 2000, 2003, 2100);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Joza";
console.log(friends);
console.log(friends[2]);

const firstName = "Igor";
const igor = [firstName, "Kalin", 2022 - 1975, friends];
console.log(igor);
*/

//todo -------- Functions-----------------------

/* const calcAge1 = function (birthYear) {
  return 2022 - birthYear;
};
years = [1990, 1975, 1972, 1992];
console.log(calcAge1(years[1]));
const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[2])];
console.log(ages);
 */
//todo -----------------------------------------

/* const friends = ["Meho", "Pero", "Nurko"];
const newLenght = friends.push("Kemo");
console.log(friends);
console.log(newLenght);

friends.unshift("Stevo");
friends.unshift("Yarko");

friends.pop();
const izbacen = friends.shift();
console.log(izbacen);
console.log(friends);
console.log(friends.includes("Meho"));
console.log(friends.includes("Yarko"));
if (friends.includes("Stevo")) {
  console.log("Okle prijatelj Stevo");
}
 */

//*----------------- OPis Testa----------

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44



const calcAge1 = function (birthYear) {
  return 2022 - birthYear;
};
years = [1990, 1975, 1972, 1992];
console.log(calcAge1(years[1]));
const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[2])];
console.log(ages);




 */
//*-------------------------------------

//? -------------TEST 2------------------------------

/* const tip = function (calcTip) {
  return calcTip <= 300 && calcTip >= 50 ? calcTip * 0.15 : calcTip * 0.2;
};
const bills = [125, 555, 44];
const bill = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
const total = [bills[0] + bill[0], bills[1] + bill[1], bills[2] + bill[2]];
console.log(bills, bill, total);

//?---------------------------------------------------
 */

// Introduction to Objects
/* const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
 */
/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1975,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,
 */
/*   calcAge: function (BirthYear) {
    return 2022 - BirthYear;
  };
 */

/*   calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} old ${this.job} and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver license
    `;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
 */

/* 
todo--------Challenge #3--------------
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
todo----------------------------------------
 */

/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(
  `${john.fullName} BMI (${john.calcBMI()}) is ${
    john.calcBMI() < mark.calcBMI() ? "lower" : "heigher"
  } than ${mark.fullName} (${mark.calcBMI()})`
);
 */
/* console.log('lifring repetition 1');
console.log('lifring repetition 2');
console.log('lifring repetition 3');
console.log('lifring repetition 4');
console.log('lifring repetition 5');
console.log('lifring repetition 6');
console.log('lifring repetition 7');
console.log('lifring repetition 8');
console.log('lifring repetition 9');
console.log('lifring repetition 10');
 */

/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting repetition 1 ${rep}`);
}
 */

/* const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //*------------Filling types of Array------------------
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

//*-------------------------------------------
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}
console.log(ages);

//*-------------------continue and break
console.log("---------Only strings---------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}
//*-------------------break with number
console.log("---------Only strings---------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

*/

/* const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------lest start with ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} push weight ${rep}`);
  }
}
 */
/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting repetition 1 ${rep}`);
}
 */
/* 
let rep = 1;

while (rep <= 10) {
  // console.log(`lifting repetition 1 ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`Rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`pade ${dice}`);
  }
}
 */

/* 
todo --------------------Coding Challenge #4--------------------------
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
todo-------------------------------------------------------------------------
 */
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}
console.log(ages);
?-----------------------------------------------------------
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);

?------------------------------------------------------------
/* const tip = function (calcTip) {
  return calcTip <= 300 && calcTip >= 50 ? calcTip * 0.15 : calcTip * 0.2;
  
};
*/
//*------------------------exercise------------------------------------

/* const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, totals, tips);
//*-------------------bonus---------------------------
const calcAverage = function (arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
 */
//*-------------------------------------------------------------------------
