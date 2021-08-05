class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputErrorClass = config.inputErrorClass;
        this._form = formElement;
    };


    _showErrorMessage(input) {
        const error = document.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _checkInputValidity(input, button, settings) {
    if (input.validity.valid) {
        hideErrorMessage(input, button, settings);
    } else {
        showErrorMessage(input, button, settings);
    }
};

    
    _toggleButtonState(inputs, button, settings) {
const isValid = inputs.every((input) => input.validity.valid);
    if (isValid) {
        button.classList.remove(this._inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(this._inactiveButtonClass);
        button.disabled = true;
    }
    };

    _setEventListeners() {
        const inputs = [this._form.querySelectorAll(this._inputSelector)];
        const button = this._form.querySelector(this._submitButtonSelector);
    
        // inputs.forEach((input) => {
            input.addEventListener("input", () => {
                //Check input validity
                checkInputValidity(input, formSelector, settings);
                //toggle button state
                toggleButtonState(inputs, button, settings);
            });
        

    };

    enableValidation() {
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            button.classList.add(settings.inactiveButtonClass);
            button.disabled = true;
        });
    
        this._setEventListeners();
        this._showErrorMessage();
        this._checkInputValidity();
        this._toggleButtonState();
    
    };
};
export default FormValidator;



// const editFormValidator = new FormValidator({})



// {
//     formSelector: ".form",
//     inputSelector: ".modal__form-control-input",
//     submitButtonSelector: ".button",
//     inactiveButtonClass: "button-disabled",
//     inputErrorClass: "modal__form-control-input-error",
//     errorClass: "popup-error",
// };
