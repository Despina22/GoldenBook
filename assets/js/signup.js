import { API_USERS_URL } from './config.js';
import { UsersAPI } from './http.users.library.js';
import { RegexValidator } from './regexValidator.js';

export class Signup {
  regexValidator;
  usersAPI;

  constructor() {
    this.regexValidator = new RegexValidator(
      '.email-input-signup',
      '.password-signup-input'
    );
    this.usersAPI = new UsersAPI(API_USERS_URL);
  }

  async userRegistration() {
    const isInputValid = this.regexValidator.validateAuthForm();
    if (isInputValid) {
      const authValue = this.regexValidator.getAuthoValue();
      await this.usersAPI.addUser(authValue);
    }
  }
}
