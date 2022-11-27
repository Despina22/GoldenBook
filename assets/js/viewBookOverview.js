import { closeBookOverview } from './closeBookOverview.js';
import { API_BOOKS_URL } from './config.js';
import { BooksAPI } from './http.books.libary.js';
import { BooksUI } from './UI.libary.js';

export class ViewBookOverview {
  bookAPI;
  bookUI;
  closeBookOverview;

  bookOverview() {
    const bookOverview = document.querySelectorAll('.book-btn');
    bookOverview.forEach(btn =>
      btn.addEventListener('click', async function (e) {
        e.preventDefault();
        this.bookAPI = new BooksAPI(API_BOOKS_URL);
        this.bookUI = new BooksUI();
        this.closeBookOverview = new closeBookOverview();
        const bookId = e.target.hash.slice(1);
        const data = await this.bookAPI.getBooks(bookId);
        if (bookId === data.id) this.bookUI.showBookOverview(data);
        this.closeBookOverview.closeBookOverview();
      })
    );
  }
}
