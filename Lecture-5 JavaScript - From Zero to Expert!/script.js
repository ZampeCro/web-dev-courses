'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `Star si godina ${age}, rodjen ${birthYear}`;
    console.log(output);

    if (birthYear >= 1971 && birthYear <= 1996) {
      var millenial = true;
      //!------ Creating NEW variable with same name as outher scope variable
      const firstName = 'Meho';
      //!------- Reasigning outer scope variable (output)
      output = 'Novi output';

      const str = `Ferijalac iz Stoca, millenial ${firstName} `;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    ////  console.log(add(3, 2));
  }
  printAge();
  return age;
}
const firstName = 'Igor';
calcAge(1975);

////console.log(age);
////printAge();
