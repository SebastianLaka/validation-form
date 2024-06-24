'use strict';
const regexFnameLname = [A-Za-z];
const regexEmail = /\S+@\S+\.\S+/;
const queryTypes = document.querySelectorAll('label[data-query-label]')
queryTypes.forEach(el => {
    el.addEventListener('click', (e) =>{
        e.target.classList.toggle('query-radio-activated')
        e.target.classList.toggle('general-enquiry-label-active')
        e.target.checked = false;
    })
})