/* const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
  img.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
} */

/* const squareImages = document.getElementsByClassName('square');
for (let img of squareImages) {
  img.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
} */

/* const links = document.querySelectorAll('p a');
for (let link of links) {
  console.log(link.href);
} */
/* const h2 = document.querySelector('h2');
// h2.setAttribute('class', 'purple');
h2.classList.add('purple', 'border');
h2.classList.toggle;
 */
/* const firstBold = document.querySelector('b');
const paragraph = firstBold.parentElement;
const squareImg = document.querySelector('.square');
 */
//*-------------- append & appendChild----------------------

const newImg = document.createElement('img');
newImg.src =
  'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZYRYY.img?w=612&h=304&q=90&m=6&f=jpg&u=t';
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'im new';
document.body.appendChild(newH3);
const p = document.querySelector('p');
p.append('kara mara tara sma');

const newB = document.querySelector('b');
newB.innerHTML = 'Hi';
p.prepend(newB);

const h2 = document.createElement('h2');
h2.append('dobra je to koka bila');
h1.insertAdjacentHTML;
