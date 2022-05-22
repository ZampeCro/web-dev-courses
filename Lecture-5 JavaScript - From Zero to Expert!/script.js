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

function komadiVoca(fruit) {
  return fruit * 4;
}

function masinaVocna(oranges, apples) {
  const applePieces = komadiVoca(apples);
  const orangePieces = komadiVoca(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(masinaVocna(3, 2));
