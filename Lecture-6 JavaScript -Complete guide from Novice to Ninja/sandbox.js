// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText += " fighter pilot";
// console.log(para.innerText);

// const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   para.innerText += " karina";
//   console.log(para.innerText);
//

//
const content = document.querySelector(".content");

const people = ["meho", "jozo", "marko"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
