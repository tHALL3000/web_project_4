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
    error.classList.remove(inputErrorClass);
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

photoDefault.addEventListener("click", () => {
    checkInputValidity(input);
    toggleButtonState(inputs, button);
});


function setEventListeners(inputs, formSelector, button) {
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            //Check input validity
            checkInputValidity(input, formSelector, rest);
            //toggle button state
            toggleButtonState(inputs, button, rest);
        });
    });
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, ...settings }) => {
    const forms = [...document.querySelectorAll(formSelector)];
    console.log(settings);
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        });
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);
        inputs.forEach((input) => {
            input.addEventListener("input", () => {
                checkInputValidity(input, settings);
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
