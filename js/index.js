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

/////----- Navbar -----/////

// Consts //
const containerScroll = document.querySelector('.container-scroll');

// Array (categories) //
const categories = ['it', 'oficios', 'electrónica', 'salud', 'estética', 'electricidad', 'mecánica', 'economía']

// Categories Iteration //
categories.forEach(function(item, index) {
    // li //
    const li = document.createElement("li");
    // imagen //
    const img = document.createElement("img");
    img.setAttribute('src', '../images/arrowright.svg');
    img.setAttribute('alt', 'alt');
    img.style = 'position: absolute; right: 10px; top: 13px';
    // a //
    const a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.classList.add(`categoria${index}`)
    a.setAttribute("href", ".");
    a.textContent = `${item}`;
    a.style = 'position: relative';
    // br //
    const br = document.createElement("br");
    // span //
    const span = document.createElement("span");
    span.textContent = `${index} cursos`;
    // Insertar y vincular todo //
    a.appendChild(img);
    a.appendChild(br);
    a.appendChild(span);
    li.appendChild(a);
    containerScroll.appendChild(li);

    // `<li>
    //     <a class="dropdown-item" href="#">${index}${item} <br />
    //     <span>3 cursos</span></a>
    // </li>`
});

// Consts //
const categoria0 = document.querySelector('.categoria0');
const categoria1 = document.querySelector('.categoria1');
const categoria2 = document.querySelector('.categoria2');
const categoria3 = document.querySelector('.categoria3');
const categoria4 = document.querySelector('.categoria4');
const categoria5 = document.querySelector('.categoria5');
const categoria6 = document.querySelector('.categoria6');
const categoria7 = document.querySelector('.categoria7');
const topSection = document.querySelector('.container-information-top');
const bottomSection = document.querySelector('.container-information-bottom');


// Listeners //
categoria0.addEventListener("mouseover", mostrar0);
categoria1.addEventListener("mouseover", mostrar1);
categoria2.addEventListener("mouseover", mostrar2);
categoria3.addEventListener("mouseover", mostrar3);
categoria4.addEventListener("mouseover", mostrar4);
categoria5.addEventListener("mouseover", mostrar5);
categoria6.addEventListener("mouseover", mostrar6);
categoria7.addEventListener("mouseover", mostrar7);

// Functions //

function mostrar0() {
    topSection.innerHTML = "Hola a todos, producto 0!<br><button class='btn btn-success'>Clickeá y mirá más!</button>"
}
function mostrar1() {
    topSection.innerHTML = "Hola a todos, producto 1!<br><button class='btn btn-danger'>Clickeá y mirá más!</button>"
}
function mostrar2() {
    topSection.innerHTML = "Hola a todos, producto 2!<br><button class='btn btn-info'>Clickeá y mirá más!</button>"
}
function mostrar3() {
    topSection.innerHTML = "Hola a todos, producto 3!<br><button class='btn btn-light'>Clickeá y mirá más!</button>"
}
function mostrar4() {
    topSection.innerHTML = "Hola a todos, producto 4!<br><button class='btn btn-dark'>Clickeá y mirá más!</button>"
}
function mostrar5() {
    topSection.innerHTML = "Hola a todos, producto 5!<br><button class='btn btn-warning'>Clickeá y mirá más!</button>"
}
function mostrar6() {
    topSection.innerHTML = "Hola a todos, producto 6!<br><button class='btn btn-secondary'>Clickeá y mirá más!</button>"
}
function mostrar7() {
    topSection.innerHTML = "Hola a todos, producto 7!<br><button class='btn btn-primary'>Clickeá y mirá más!</button>"
}