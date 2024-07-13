"use strict";
const modal = document.querySelector(".succes-modal");
const firstNameInput = document.querySelector(".form__fname-input");
const lastNameInput = document.querySelector(".form__lname-input");
const emailInput = document.querySelector(".form__email-input");
const queryGeneral = document.querySelector(".general-enquiry-label__general");
const querySupport = document.querySelector(".general-enquiry-label__support");
const textArea = document.querySelector(".form__text-area");
const checkbox = document.querySelector(".clause-section__checkbox");
const submitCTA = document.querySelector(".form__submit-button");
const nameError = document.querySelector(".form__name-error");
const surnameError = document.querySelector(".form__surname-error");
const emailError = document.querySelector(".form__email-error");
const queryError = document.querySelector(".form__query-error");
const textareaError = document.querySelector(".form__error-textarea");
const checkboxError = document.querySelector(".form__checkbox-error");
const regexEmail = /\S+@\S+\.\S+/;
//function with global scope to valid form
const testFieldName = (input) => {
  return input.value.length >= 3;
};
const addError = (error, input) => {
  error.classList.add("show-error");
  input.classList.add("error-border");
};
const removeError = (error, input) => {
  error.classList.remove("show-error");
  input.classList.remove("error-border");
};
const validateField = (input, error, validFunc) => {
  if (validFunc(input)) {
    removeError(error, input);
    return true;
  } else {
    addError(error, input);
    return false;
  }
};
//main validator at CTA button
submitCTA.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNameValid = validateField(firstNameInput, nameError, testFieldName);
  const lastNameValid = validateField(lastNameInput, surnameError, testFieldName);
  const emailValid = validateField(emailInput, emailError, (input) => regexEmail.test(input.value));
  const textAreaValid = validateField(textArea, textareaError, (input) => input.value.length > 0);
  const queryValid = queryGeneral.checked || querySupport.checked;
  if (!queryValid) {
    queryError.classList.add("show-error");
  } else {
    queryError.classList.remove("show-error");
  }
  const checkboxValid = checkbox.checked;
  if (!checkboxValid) {
    checkboxError.classList.add("show-error");
  } else {
    checkboxError.classList.remove("show-error");
  }
  if (firstNameValid && lastNameValid && emailValid && textAreaValid && queryValid && checkboxValid) {
    modal.style.transform = "translate(-50%, 50px)";
  } else {
    modal.style.transform = "translate(-50%, -150px)";
  }
});