'use strict';
const modal = document.querySelector('.succes-modal')
const nameInput = document.querySelector('.form__fname-input')
const lastNameInput = document.querySelector('.form__lname-input')
const emailInput = document.querySelector('.form__email-input')
const queryTypes = document.querySelectorAll('label[data-query-label]')
const textArea = document.querySelector('.form__text-area')
const checkbox = document.querySelector('.clause-section__checkbox')
const submitCTA = document.querySelector('.form__submit-button')
const regexFnameLname = /[A-Za-z]/;
const regexEmail = /\S+@\S+\.\S+/;
queryTypes.forEach(el => {
    el.addEventListener('click', (e) =>{
        e.target.classList.toggle('query-radio-activated')
        e.target.classList.toggle('general-enquiry-label-active')
        e.target.checked = false;
    })
})