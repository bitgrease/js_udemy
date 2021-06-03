'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

btnsShowModal.forEach(btn => {
    console.log(btn.textContent);
});