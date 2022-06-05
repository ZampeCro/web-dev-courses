const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validation
  const username = form.username.value;
  const namePattern = /^[a-z A-Z]{6,12}$/;

  if (namePattern.test(username)) {
    feedback.textContent = "dobar";
  } else {
    feedback.textContent = "ne valja";
  }
});
