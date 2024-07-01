"use strict";
const modal = document.querySelector(".succes-modal");
const input = document.querySelectorAll('[data-form-input]')
const nameInput = document.querySelector(".form__fname-input");
const lastNameInput = document.querySelector(".form__lname-input");
const emailInput = document.querySelector(".form__email-input");
const queryTypes = document.querySelectorAll("label[data-query-label]");
const textArea = document.querySelector(".form__text-area");
const checkbox = document.querySelector(".clause-section__checkbox");
const submitCTA = document.querySelector(".form__submit-button");
const error = document.querySelectorAll(".form__error");
const nameError = document.querySelector('.form__name-error')
const regexFnameLname = /[A-Za-z]/;
const regexEmail = /\S+@\S+\.\S+/;
queryTypes.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.toggle("query-radio-activated");
    e.target.classList.toggle("general-enquiry-label-active");
    e.target.checked = false;
  });
});
// const addHandleError = (firstName, lastName, emailInput, textArea,) =>{
//     firstName.classList.add("add-border");
//     lastName.classList.add("add-border");
//     emailInput.classList.add('add-border')
//     textArea.classList.add('add-border')
// }
// const removeHandleError = (firstName, lastName, email, textArea) =>{
//     firstName.classList.remove("remove-border");
//     lastName.classList.remove("remove-border");
//     email.classList.remove('remove-border')
//     textArea.classList.remove('remove-border')
// }

submitCTA.addEventListener("click", (e) => {
  e.preventDefault();
  const validFormName = () =>{
  if(regexFnameLname.test(nameInput.value)){
     nameError.classList.remove('show-error');
     nameInput.classList.add('remove-border');
  }else {
    nameInput.classList.remove('remove-border');
  }
}
validFormName();
  //when all inputs are empty
  const invalidForm = () =>{
  if (!regexFnameLname.test(nameInput.value, lastNameInput.value) || regexEmail.test(emailInput.value) || (textArea.value='')) {
    error.forEach(err => err.classList.add("show-error"));
    input.forEach(input => input.classList.add('add-border'));
  }
}
invalidForm();
});