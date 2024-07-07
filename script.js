"use strict";
const modal = document.querySelector(".succes-modal");
const firstNameInput = document.querySelector(".form__fname-input");
const lastNameInput = document.querySelector(".form__lname-input");
const emailInput = document.querySelector(".form__email-input");
const queryTypes = document.querySelectorAll("label[data-query-label]");
const textArea = document.querySelector(".form__text-area");
const checkbox = document.querySelector(".clause-section__checkbox");
const submitCTA = document.querySelector(".form__submit-button");
const nameError = document.querySelector(".form__name-error");
const surnameError = document.querySelector(".form__surname-error");
const emailError = document.querySelector('.form__email-error')
const textareaError = document.querySelector('.form__error-textarea')
const checkboxError = document.querySelector('.form__checkbox-error')
const regexName = /[A-Za-z]/;
const regexEmail = /\S+@\S+\.\S+/;
// queryTypes.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.classList.toggle("query-radio-activated");
//     e.target.classList.toggle("general-enquiry-label-active");
//     e.target.checked = false;
//   });
// });
// const validForm = (regex, input, err, inputArea) =>{
//   if(regex.test(input.value)){
//      err.forEach(err => err.classList.remove('show-error'));
//      inputArea.classList.remove('error-border');
//   }
// }
const testFieldName = (input) => {
  return input.value.length >= 3;
};

submitCTA.addEventListener("click", (e) => {
  e.preventDefault();
  // validForm(regexName, firstNameInput, error, firstNameInput)
  // validForm(regexName, lastNameInput, surnameError, lastNameInput)
  // const validForm = () => {
  //   if(regexName.test(firstNameInput.value)){
  //     nameError.classList.remove('show-error');
  //     firstNameInput.classList.remove('error-border')
  //   }
  // }
  // validForm()
  //when all inputs are empty
  // const invalidForm = () => {
    checkbox.addEventListener('click', (e) =>{
      if(checkbox.checked == true){
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
    const validQuerys = () =>{
      queryTypes.forEach(el =>{
        if(!el.checked === true){
          console.log('ok');
        }
      })
    }
    validQuerys();
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
    const validCheckbox = () =>{
      if(checkbox.checked == true){
        checkboxError.classList.remove('show-error')
      }else{
        checkboxError.classList.add('show-error')
      }
    }
    validCheckbox();
    // const invalid = () => {
    //   if (
    //     !regexName.test(firstNameInput.value, lastNameInput.value) ||
    //     !regexEmail.test(emailInput.value) ||
    //     !textArea.value
    //   ) {
    //     error.forEach((err) => err.classList.add("show-error"));
    //     input.forEach((input) => input.classList.add("error-border"));
    //   }
    // };
    // invalid()
  // };
  // invalidForm();
});

