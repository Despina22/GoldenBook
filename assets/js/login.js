import { ViewBookOverview } from './viewBookOverview.js';
import { API_BOOKS_URL, API_USERS_URL } from './config.js';
import { BooksAPI } from './http.books.libary.js';
import { UsersAPI } from './http.users.library.js';
import { Pagination } from './pagination.js';
import { RegexValidator } from './regexValidator.js';
import { BooksUI } from './UI.libary.js';

export class Login {
  regexValidator;
  usersAPI;
  bookAPI;
  bookUI;
  pagination;
  viewBookOverview;
  constructor() {
    this.regexValidator = new RegexValidator(
      '.email-input-login',
      '.password-login-input'
    );
    this.usersAPI = new UsersAPI(API_USERS_URL);
    this.bookAPI = new BooksAPI(API_BOOKS_URL);
    this.bookUI = new BooksUI();
    this.pagination = new Pagination();
    this.viewBookOverview = new ViewBookOverview();
  }
  async checkIsUserRegistered() {
    const isInputValid = this.regexValidator.validateAuthForm();
    if (isInputValid) {
      const authValue = this.regexValidator.getAuthoValue();
      const data = await this.usersAPI.getUsers(authValue);
      if (data.length !== 0) {
        const bookData = await this.bookAPI.getBooks();
        this.bookUI.showBooks(this.pagination.getBooksForCurrentPage(bookData));
        this.bookUI.displaySecondPage();
        this.viewBookOverview.bookOverview();
      }
    }
  }
}
