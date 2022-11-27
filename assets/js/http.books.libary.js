export class BooksAPI {
  API_BOOKS_URL;
  constructor(url) {
    this.API_BOOKS_URL = url;
  }

  async getBooks(id = '') {
    const res = await fetch(this.API_BOOKS_URL + `${id}`);
    return await res.json();
  }

  async searchBooks(title) {
    const res = await fetch(`${this.API_BOOKS_URL}?title_like=${title}`);
    return await res.json();
  }

  async addBook(book) {
    const res = await fetch(this.API_BOOKS_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(book),
    });
    return await res.json();
  }

  async deleteBook(id) {
    await fetch(this.API_BOOKS_URL + `${id}`, {
      method: 'DELETE',
    });
  }
}
