const addForm = document.querySelector(".add");
addForm = addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
});
