const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#list');
form.addEventListener('submit', function (s) {
  s.preventDefault();
  const catName = input.value;
  const newList = document.createElement('li');
  newList.innerText = catName;
  list.append(newList);
  input.value = '';
});
