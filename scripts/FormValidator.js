class FormValidator{
    constructor(config, formElement) {
        this.inputSelector = config.inputSelector;
        this.submitButtonSelector = config.submitButtonSelector;
        this.inactiveButtonClass = config.inactiveButtonClass;
        this.inputErrorClass = config.inputErrorClass;
        this.form = formElement;
        this.errorClass = config.errorClass;
        this.inputErrorClass = config.inputErrorClass;n
    }
}

const editFormValidator = new FormValidator({})



{
    formSelector: ".form",
    inputSelector: ".modal__form-control-input",
    submitButtonSelector: ".button",
    inactiveButtonClass: "button-disabled",
    inputErrorClass: "modal__form-control-input-error",
    errorClass: "popup-error",
};
