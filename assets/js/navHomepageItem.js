import { API_BOOKS_URL } from './config.js';
import { BooksAPI } from './http.books.libary.js';
import { Pagination } from './pagination.js';
import { BooksUI } from './UI.libary.js';
import { ViewBookOverview } from './viewBookOverview.js';

export class HomepageItem {
  bookAPI;
  bookUI;
  bookOverview;
  pagination;

  async navHomepageItem() {
    this.bookAPI = new BooksAPI(API_BOOKS_URL);
    this.bookUI = new BooksUI();
    this.viewBookOverview = new ViewBookOverview();
    this.pagination = new Pagination();

    const data = await this.bookAPI.getBooks();
    this.bookUI.showBooks(this.pagination.getBooksForCurrentPage(data));
    this.bookUI.homepageEl();
    this.viewBookOverview.bookOverview();
  }
}
