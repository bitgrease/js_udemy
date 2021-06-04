'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const hideModalandOverlay = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const showModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
btnsShowModal.forEach(btn => {
    btn.addEventListener('click', showModal);
});

btnCloseModal.addEventListener('click', hideModalandOverlay);
overlay.addEventListener('click', hideModalandOverlay);