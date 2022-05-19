/* // JavaScript Document
let js = 'amazing';
// console.log(48 + 20 + 6 - 10);
console.log("Jonas");
console.log("23");
let firstName="Bob";
console.log(firstName);

let myCountry="BiH";
let myContinent="Europe";
let myPopulations="Hrvati";
console.log(myCountry);
console.log(myContinent);
console.log(myPopulations);
 */

/* let javaScriptIsFun = true;

console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = "Yes";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
 */

/* let age = 30;
age = 31;
console.log(age);

const birthYear = 1975;
// birthYear=1976;

var job = "programer";
job = "teacher";
console.log(job); */

/* console.log(ageIgor *2, ageCery /3, 2**3);

const firstName='Igor';
const lastName='Kalin';
console.log(firstName+' '+lastName);

// assigments operators
let x= 10+5;
x+=10;
x*=4;
x++;
x--;
x--;
console.log(x);

// comparison operators
;
console.log(ageIgor>=18);
 */
/* 
const now=2022;
const ageIgor=now-1975;
const ageCery=now-1942;
console.log(ageCery>ageIgor);

let x,y;
x=y=25-10-5;
console.log(x,y);

const averageAge=(ageCery+ageIgor) /2;
console.log(averageAge); */

/* 

const firstName = "Igor";
const job = "Teacher";
const birthYear = 1975;
const currentYear = 2022;
const igor = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(igor);
console.log(`just a example`);
console.log("starting\nwith\nmultiple\nnew lines");
console.log(`Starting
with
multiple
new lines `);
 */

/* const age = 15;
if (age >= 18) {
  console.log("vozi misko 🚕");
} else {
  const yearsLeft = 18 - age;
  console.log(`sjedi kuci ${yearsLeft} godine ostalo`);
}
 */
/* const birthYear = 2002;
let century;
if (birthYear <= 2000) {
  let century = 20;
  console.log(century);
} else {
  let century = 21;
  console.log(century);
}
 */

/*  */

/* Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

/* 
const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
 */

/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */

/* const markWeight = 81;
const johnWeight = 52;
const markHeight = 1.86;
const johnHeight = 1.75;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
/* console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
 */
/* let exampleBMI;
exampleBMI = markBMI - johnBMI;
if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI ${markBMI} is higher than John's! for ${exampleBMI} BMI`
  );
} else {
  console.log(
    `John's BMI ${johnBMI} is higher than Mark's! for ${exampleBMI} BMI`
  );
}
 */
/* const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 19);
console.log(typeof inputYear);
console.log(String(23));
 */

/* console.log("Im " + 23 + " years old");
console.log("23" - "10" - "3");
 */
let n = "1" + 1;
n = n - 1;
console.log(n);
