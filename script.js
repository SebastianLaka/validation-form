"use strict";
const modal = document.querySelector(".succes-modal");
const firstNameInput = document.querySelector(".form__fname-input");
const lastNameInput = document.querySelector(".form__lname-input");
const emailInput = document.querySelector(".form__email-input");
const queryGeneral = document.querySelector(".general-enquiry-label__general");
const querySupport = document.querySelector(".general-enquiry-label__support"); 
const textArea = document.querySelector(".form__text-area");
const checkbox = document.querySelector(".clause-section__checkbox")
const submitCTA = document.querySelector(".form__submit-button");
const nameError = document.querySelector(".form__name-error");
const surnameError = document.querySelector(".form__surname-error");
const emailError = document.querySelector('.form__email-error')
const queryError = document.querySelector('.form__query-error')
const textareaError = document.querySelector('.form__error-textarea')
const checkboxError = document.querySelector('.form__checkbox-error')
const regexName = /[A-Za-z]/;
const regexEmail = /\S+@\S+\.\S+/;
const testFieldName = (input) => {
  return input.value.length >= 3;
};
submitCTA.addEventListener("click", (e) => {
  e.preventDefault();
    checkbox.addEventListener('click', (e) =>{
      if(checkbox.checked){
      e.target.classList.add('checkbox-activated')
      }else{
       e.target.classList.remove('checkbox-activated')
      }
    })
    const validName = () => {
      if (testFieldName(firstNameInput)) {
        nameError.classList.remove("show-error");
        firstNameInput.classList.remove("error-border");
      }else{
        nameError.classList.add("show-error");
        firstNameInput.classList.add("error-border");
      }
    };
    validName();
    const validLastName = () => {
      if (testFieldName(lastNameInput)) {
        surnameError.classList.remove("show-error");
        lastNameInput.classList.remove("error-border");
      }else{
        surnameError.classList.add("show-error");
        lastNameInput.classList.add("error-border");
      }
    };
    validLastName()
    const validEmail = () =>{
      if(regexEmail.test(emailInput.value)){
        emailError.classList.remove('show-error')
        emailInput.classList.remove('error-border')
      }else{
        emailError.classList.add('show-error')
        emailInput.classList.add('error-border')
      }
    }
    validEmail();
    const validQuery = () =>{
      if(!queryGeneral.checked && !querySupport.checked){
        queryError.classList.add('show-error')
     
      }else{
        queryError.classList.remove('show-error')
      }
    }
    validQuery();
   
    const validTextarea = () =>{
      if(textArea.value.length < 1){
        textareaError.classList.add('show-error')
        textArea.classList.add('error-border')
      }else{
        textareaError.classList.remove('show-error')
        textArea.classList.remove('error-border')
      }
    }
    validTextarea();
    const validCheckbox = () => {
      if(checkbox.checked){
        checkboxError.classList.remove('show-error')
      }else{
        checkboxError.classList.add('show-error')
      }
    }
    validCheckbox();
});