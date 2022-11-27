import { API_BOOKS_URL } from './config.js';
import { BooksAPI } from './http.books.libary.js';
import { Pagination } from './pagination.js';
import { BooksUI } from './UI.libary.js';
import { ViewBookOverview } from './viewBookOverview.js';

export class closeBookOverview {
  bookAPI;
  bookUI;
  pagination;
  bookOverview;
  closeBookOverview() {
    const closeBtn = document.querySelector('.close-book-overview-btn');
    closeBtn.addEventListener('click', async function () {
      this.bookAPI = new BooksAPI(API_BOOKS_URL);
      this.bookUI = new BooksUI();
      this.pagination = new Pagination();
      this.bookOverview = new ViewBookOverview();

      const data = await this.bookAPI.getBooks();
      this.bookUI.showBooks(this.pagination.getBooksForCurrentPage(data));
      this.bookOverview.bookOverview();
    });
  }
}
