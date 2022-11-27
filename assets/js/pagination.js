import { COUNT_PER_PAGE } from './config.js';

export class Pagination {
  currentPage = 1;
  numberOfPages = 0;

  getBooksForCurrentPage(books) {
    const booksLength = books.length;
    this.numberOfPages = Math.ceil(booksLength / COUNT_PER_PAGE);
    const startIndex = (this.currentPage - 1) * COUNT_PER_PAGE;
    const endIndex = this.currentPage * COUNT_PER_PAGE;

    return books.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage !== this.numberOfPages) this.currentPage++;
  }
  prevPage() {
    if (this.currentPage !== 1) this.currentPage--;
  }
}
