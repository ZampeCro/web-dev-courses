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

? ---- Declared function
function addDecl(a, b) {
  return a + b;
}
? ----- Expression function
const addExpr = function (a, b) {
  return a + b;
};

? ----- Arrow function
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

// console.log(this);
/* 
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAge(1975);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAgeArrow(1975);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
 */

//* ----- REGULAR FUNCTION VS ARROW FUNCTION -----
////var firstName = 'Matilda';

const jonas = {
  firstName: 'Zampe',
  year: 1991,
  calcAge: function () {
    ////console.log(this);
    console.log(2022 - this.year);

    /* 
    ! ------- Solution 1
    const self = this;  //self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1970 && self.year <= 1996);
      */
    //! ---------- Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1970 && this.year <= 1996);
      //// console.log(this.year >= 1970 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this), console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//! -------- Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addExpr(3, 7);
