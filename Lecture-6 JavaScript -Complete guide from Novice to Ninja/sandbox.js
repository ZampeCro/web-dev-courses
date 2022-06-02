// const button = document.querySelector('button');
const ul = document.querySelector("ul");
// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something to do";
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.remove();
  });
});
