const showErrorMessage = () => {
    
}

const hideErrorMessage = (input, form, settings) => {
    const error = document.querySelector(`#${input.id}-error`);
    console.log(error)
}


const checkInputValidity = (input, form, settings) => {
    if (input.validity.valid) {
        hideErrorMessage(input, form, settings);
    } else {
        showErrorMessage();
    }
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector,...settings}) => {
    const forms = [...document.querySelectorAll(formSelector)];


    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        })

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelectorAll(submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                checkInputValidity(input, form, settings);
                //toggle button state
                })
        })
    })
}


enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});