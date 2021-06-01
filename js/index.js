'use strict'

/////----- Main -----/////

// Consts //
const body = document.querySelector('body');
const modalWindow = document.querySelector('#modal');
const search = document.querySelector('#search');
const formSearch = document.querySelector('#formSearch');
const submitButton = document.querySelector('#submit-button');

// Listeners //
search.addEventListener("focus", showModal);
search.addEventListener("blur", hideModal);

// Show Modal Function //
function showModal() {
    modalWindow.style.zIndex = 9999;
    formSearch.style.zIndex = 10000;
    modalWindow.style.backgroundColor = 'rgba(0,0,0,0.7)';
    submitButton.classList.remove('btn-outline-danger');
    submitButton.classList.add('btn-danger');
}

// Hide Modal Function //
function hideModal() {
    modalWindow.style.zIndex = -1;
    modalWindow.style.backgroundColor = 'transparent';
    submitButton.classList.remove('btn-danger');
    submitButton.classList.add('btn-outline-danger');
    // Si hay problemas con el buscador, éste es el problema //
    formSearch.style.zIndex = 1;
}

/////----- / Main -----/////