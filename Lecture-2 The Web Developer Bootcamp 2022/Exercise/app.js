const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', function () {
  console.log('hello');
});
goodbye.addEventListener('click', function () {
  console.log('goodbye');
});
