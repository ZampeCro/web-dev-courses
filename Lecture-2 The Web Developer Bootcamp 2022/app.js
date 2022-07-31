const btn2 = document.querySelector('#v2');
btn2.onclick = function () {
  console.log('you clicked me');
  console.log('jos jednom klikno');
};
function onscreen() {
  console.log('aaaaaaaaaaa');
}
btn2.onmouseenter = onscreen;

document.querySelector('h1').onclick = () => {
  alert('You cliked me h1');
};
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
  alert('CLICKED');
});

const twist = function () {
  console.log('twist');
};
const shout = function () {
  console.log('shout');
};
const tas = document.querySelector('#tas');

//* tas.onclick = twist;

tas.addEventListener('click', shout, { once: true });
tas.addEventListener('click', twist);
