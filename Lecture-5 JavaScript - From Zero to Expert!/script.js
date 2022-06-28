'use strict';

/* 
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `Star si godina ${age}, rodjen ${birthYear}`;
    console.log(output);

    if (birthYear >= 1971 && birthYear <= 1996) {
      var millenial = true;
      !------ Creating NEW variable with same name as outher scope variable
      const firstName = 'Meho';
      !------- Reasigning outer scope variable (output)
      output = 'Novi output';

      const str = `Ferijalac iz Stoca, millenial ${firstName} `;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    //// console.log(add(3, 2));
  }
  printAge();
  return age;
}
const firstName = 'Igor';
calcAge(1975);

//// console.log(age);
//// printAge();
 */
/* 
//* ------ HOISTING -------

!---- Variables
console.log(me);
//// console.log(job);
//// console.log(year);

var me = 'Zampe';
let job = 'tech';
const year = 1975;

!----- Functions

console.log(addDecl(2, 3));
//// console.log(addExpr(2, 3));
console.log(addArrow);
//// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

!----- Example
if (!numProduct) {
  deleteShoppingCart();
}
var numProduct = 10;
function deleteShoppingCart() {
  console.log('Sve je izbrisano');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
 */

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1975);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(1975);
