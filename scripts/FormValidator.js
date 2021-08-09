class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = formElement;
        console.log(formElement);
    };

    

    _showErrorMessage(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }
    _hideErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
};


    _checkInputValidity(input, button) {
    if (input.validity.valid) {
        this._hideErrorMessage(input, button);
    } else {
        this._showErrorMessage(input, button);
    }
};

    
    _toggleButtonState(inputs, button) {
const isValid = this._inputs.every((input) => input.validity.valid);
    if (isValid) {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
    } else {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
    }
    };

    _setEventListeners() {
        this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
        this._button = this._form.querySelector(this._submitButtonSelector);
        this._inputs.forEach((input) => {
            input.addEventListener("input", () => {
                //Check input validity
                this._checkInputValidity(input, this._button);
                //toggle button state
                this._toggleButtonState(this._inputs, this._button);
            });
        
    
})
    };

    enableValidation() {
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._button.classList.add(this._inactiveButtonClass);
            this._button.disabled = true;
        });
    
        this._setEventListeners();
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
