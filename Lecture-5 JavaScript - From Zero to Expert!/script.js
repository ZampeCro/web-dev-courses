/* "use strict";

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

const teamKoala = (koalaSc1, koalaSc2, koalaSc3) => {
  const avgKoalas = (koalaSc1 + koalaSc2 + koalaSc3) / 3;
  console.log(`prosjecan score Koale je ${avgKoalas}`);
};
teamKoala(65, 54, 49);

const teamDolphin = (dolphinSc1, dolphinSc2, dolphinSc3) => {
  const avgDolphins = (dolphinSc1 + dolphinSc2 + dolphinSc3) / 3;
  console.log(`prosjecan score Koale je ${avgDolphins}`);
};
teamDolphin(44, 23, 71);

const checkWinner = (avgKoalas, avgDolphins) => {
  if (avgKoalas > avgDolphins * 2) {
    console.log(`Koale su pobjednici ${avgKoalas} vs ${avgDolphins}`);
    return avgKoalas;
  } else if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphin  su pobjednici ${avgDolphins} vs ${avgKoalas}`);
  } else {
    ("nije niko pobjednik");
  }
};
console.log(checkWinner(56, 46));
