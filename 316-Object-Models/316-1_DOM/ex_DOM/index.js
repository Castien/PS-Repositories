import {menuLinks} from './data.js';
console.log(menuLinks);


//BOM example
const userName = window.prompt('whats your user name?');
console.log(userName);


// #app {color: 'blue'}

const appElement = document.getElementById('app');

console.log(appElement);

console.dir(appElement);

// queries the first p tag
//CSS Selector->  p { font-family: 'arial' }
const pElement = document.querySelector('p');
console.log(pElement.textContent);

// queries the anchor with id of contact
//CSS Selector->  #contact {  }
const anchorContact = document.querySelector('#contact');
console.log(anchorContact);

// queries a p tag with class third-p
//CSS Selector->  .third-p {  }
const thirdP = document.querySelectorAll('.third-p');
console.log(thirdP);


const section = document.querySelector('section');
const ul = section.firstElementChild;
console.log(ul.firstElementChild.nextElementSibling);


const lis = document.getElementsByTagName('li')
console.log(lis);

// lis[0].remove();

console.log(lis);

const myHTMLArray = Array.from(lis);

console.log(myHTMLArray);

const UL = document.querySelector('ul');
console.log(UL.lastElementChild);

const firstLi = document.querySelector("#first")
console.log(firstLi.nextElementSibling.nextElementSibling);


const aside = document.querySelector('aside');

// while we have a first child
while(aside.firstChild) {
    // remove the first child 
    const removedChild = aside.removeChild(aside.firstChild);

    console.log(removedChild);
}