const showErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
};

const hideErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
};

const checkInputValidity = (input, button, settings) => {
    if (input.validity.valid) {
        hideErrorMessage(input, button, settings);
    } else {
        showErrorMessage(input, button, settings);
    }
};

const toggleButtonState = (inputs, button, { inactiveButtonClass, ...settings }) => {
    const isValid = inputs.every((input) => input.validity.valid);
    if (isValid) {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    }
};

const photoDefault = document.querySelector("#addPhoto");


const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, ...settings }) => {
    const forms = [...document.querySelectorAll(formSelector)];
    console.log(settings);
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            button.classList.add(settings.inactiveButtonClass);
            button.disabled = true;
        });
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);
        inputs.forEach((input) => {
            input.addEventListener("input", () => {
                //Check input validity
                checkInputValidity(input, formSelector, settings);
                //toggle button state
                toggleButtonState(inputs, button, settings);
            });
        });
    });
};

enableValidation({
    formSelector: ".form",
    inputSelector: ".modal__form-control-input",
    submitButtonSelector: ".button",
    inactiveButtonClass: "button-disabled",
    inputErrorClass: "modal__form-control-input-error",
    errorClass: "popup-error",
});
