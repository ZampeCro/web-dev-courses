const btn = document.querySelector('#v2');
btn.onclick = function () {
  console.log('you clicked me');
  console.log('jos jednom klikno');
};
function onscreen() {
  console.log('aaaaaaaaaaa');
}
btn.onmouseenter = onscreen;

document.querySelector('h1').onclick = () => {
  alert('You cliked me h1');
};
