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
const testFieldName = (input) => {
  return input.value.length >= 3;
};
const addError = (error, input, succesModal) => {
  error.classList.add("show-error");
  input.classList.add("error-border");
  succesModal.style.transform = "translate(-50%, -150px)";
};
const removeError = (error, input, succesModal) => {
  error.classList.remove("show-error");
  input.classList.remove("error-border");
  succesModal.style.transform = "translate(-50%, 50px)";
};
submitCTA.addEventListener("click", (e) => {
  e.preventDefault();
  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      e.target.classList.add("checkbox-activated");
    } else {
      e.target.classList.remove("checkbox-activated");
    }
  });
  const validName = () => {
    if (testFieldName(firstNameInput)) {
      removeError(nameError, firstNameInput, modal);
    } else {
      addError(nameError, firstNameInput, modal)
    }
  };
  validName();
  const validLastName = () => {
    if (testFieldName(lastNameInput)) {
      removeError(surnameError, lastNameInput, modal);
    } else {
      addError(surnameError, lastNameInput, modal)
    }
  };
  validLastName();
  const validEmail = () => {
    if (regexEmail.test(emailInput.value)) {
      removeError(emailError, emailInput, modal)
    } else {
      addError(emailError, emailInput, modal)
    }
  };
  validEmail();
  const validQuery = () => {
    if (!queryGeneral.checked && !querySupport.checked) {
      queryError.classList.add("show-error");
      modal.style.transform = "translate(-50%, 50px)";
    } else {
      queryError.classList.remove("show-error");
      modal.style.transform = "translate(-50%, -150px)";
    }
  };
  validQuery();
  const validTextarea = () => {
    if (textArea.value.length > 0) {
      removeError(textareaError, textArea, modal)
  
    } else {
      addError(textareaError, textArea, modal)
    }
  };
  validTextarea();
  const validCheckbox = () => {
    if (checkbox.checked) {
      checkboxError.classList.remove("show-error");
    } else {
      checkboxError.classList.add("show-error");
      modal.style.transform = "translate(-50%, -150px)";
    }
  };
  validCheckbox();
});