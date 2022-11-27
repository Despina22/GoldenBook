import { API_BOOKS_URL } from './config.js';
import { BooksAPI } from './http.books.libary.js';
import { TableBooksGenerator } from './tableBooksGenerator.js';

export class DeleteAdminBook {
  bookAPI;
  tableBooksGenerator;
  deleteBook() {
    const deleteBtn = document.querySelectorAll('.x-btn');
    deleteBtn.forEach(btn => {
      btn.addEventListener('click', async function (e) {
        this.bookAPI = new BooksAPI(API_BOOKS_URL);
        this.tableBooksGenerator = new TableBooksGenerator();
        const bookId = e.target.dataset.bookid;
        const data = await this.bookAPI.getBooks(bookId);
        if (bookId === data.id) {
          await this.bookAPI.deleteBook(bookId);
          const data = await this.bookAPI.getBooks();
          this.tableBooksGenerator.showAdminBooks(data);
        }
      });
    });
  }
}
