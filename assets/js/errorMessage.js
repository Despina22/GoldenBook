export class ErrorMessage {
  errorMessageStyle(isFieldNotValid, formElement) {
    if (isFieldNotValid) {
      formElement.classList.add('error-message-input');
      formElement.nextElementSibling.classList.remove('hidden');
    } else {
      formElement.classList.remove('error-message-input');
      formElement.nextElementSibling.classList.add('hidden');
    }
  }
}
