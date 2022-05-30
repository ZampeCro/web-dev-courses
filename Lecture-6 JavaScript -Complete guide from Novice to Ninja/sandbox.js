const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://bljesak.info/");
link.innerText = "Bljesak Mostar";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
