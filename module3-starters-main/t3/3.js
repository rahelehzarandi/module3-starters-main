'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector('#target');

for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = names[i];
    ul.appendChild(li);
}