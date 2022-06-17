// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
//* Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
//*----------------------------------------------------

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
    if (curTemp !== 'number') {
      continue;
    }
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 8, 1]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/* 
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
    if (curTemp !== 'number') {
      continue;
    }
  }
  console.log(max, min);
  return max - min;
};
//? calcTempAmplitude([3, 7, 4, 8, 1]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [8, 12, 20]);
console.log(amplitudeNew);
 */
/*
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); 
*/
/* 
const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:'),
  };
  console.table(measurment);
  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measureKelvin());
 */
// todo--------- Developer Skills & Editor Setup--------------------------

/* Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

// todo----------------------------------------------------------------------

const printForecast = function (t1, t2) {
  const temps = t1.concat(t2);
  //! console.log(temps);
  let maxTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];

    if (curTemp > maxTemp) {
      maxTemp = curTemp;
    }
  }
  //! console.log(maxTemp);
  console.log(
    `${temps[0]}C°... ${temps[1]}C°... ${temps[2]}C°... ${temps[3]}C°... ${temps[5]}C°...  `
  );
};
const resultForecast = printForecast([17, 21, 23], [12, 5, -5, 0, 4]);
