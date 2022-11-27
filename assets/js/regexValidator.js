import { ErrorMessage } from './errorMessage.js';

export class RegexValidator {
  emailInput;
  passwordInput;
  errorMessage;
  constructor(emailInput, passwordInput) {
    this.errorMessage = new ErrorMessage();
    this.emailInput = emailInput;
    this.passwordInput = passwordInput;
  }

  validateAuthForm() {
    const emailInput = document.querySelector(`${this.emailInput}`);
    const regexEmail = new RegExp(/^[\w\-\.]{3,}@[a-z]+(\.[a-z]{2,5})+$/);
    const isEmailValid = regexEmail.test(emailInput.value);
    this.errorMessage.errorMessageStyle(!isEmailValid, emailInput);

    const passwordInput = document.querySelector(`${this.passwordInput}`);
    const regexPassword = new RegExp(/^\d{2,8}$/);
    const isPasswordValid = regexPassword.test(passwordInput.value);
    this.errorMessage.errorMessageStyle(!isPasswordValid, passwordInput);

    return isEmailValid && isPasswordValid;
  }

  getAuthoValue() {
    const emailInput = document.querySelector(`${this.emailInput}`);
    const passwordInput = document.querySelector(`${this.passwordInput}`);
    return {
      email: emailInput.value,
      password: passwordInput.value,
    };
  }
}
