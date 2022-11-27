export class TableBooksGenerator {
  booksShow = document.getElementById('books');

  showAdminBooks(books) {
    this.booksShow.innerHTML = '';

    const tableEl = document.createElement('table');
    tableEl.classList.add('book-overview-content-table');
    tableEl.innerHTML = `
            <thead>
                <tr class="book-content-table-head">
                <th class="book-content-table-head-item"></th>
                <th class="book-content-table-head-item-img">Image</th>
                <th class="book-content-table-head-item-title">Title</th>
                <th class="book-content-table-head-item-author">Author</th>
                <th class="book-content-table-head-item-year">Year</th>
                <th class="book-content-table-head-item-category">
                    Category
                </th>
                <th class="book-content-table-head-item-description">
                    Description
                </th>
                <th class="book-content-table-head-item-isbn">ISBN</th>
                <th class="book-content-table-head-item-review">Review</th>
                <th class="book-content-table-head-item-overview">
                    Go to Book Overview
                </th>
                <th class="book-content-table-head-item"></th>
                </tr>
            </thead>
        `;

    books.forEach(book => {
      const { id, title, author, coverUrl, category, isbn, year } = book;

      tableEl.innerHTML += `
        <tbody>
          <tr class="book-content-table-body">
            <td class="book-content-table-body-item">
              <i class="fas fa-regular fa-ellipsis-vertical"></i>
            </td>
            <td class="book-content-table-head-item-img">
              <img
                src="${coverUrl}"
                class="book-content-table-img"
                alt="${title}"
              />
            </td>
            <td class="book-content-table-body-item-title">
              ${title}
            </td>
            <td class="book-content-table-body-item-author">
              ${author}
            </td>
            <td class="book-content-table-body-item-year">${year}</td>
            <td class="book-content-table-body-item-category">
              General, ${category}
            </td>
            <td class="book-content-table-body-item-description">
              <a href="#">Read more</a>
            </td>
            <td class="book-content-table-body-item-isbn">
              ${isbn}
            </td>
            <td class="book-content-table-body-item-review">
              <a href="#${id}" class="book-btn">Book Overview</a>
            </td>
            <td class="book-content-table-body-item-overview">
              <i class="fa fa-duotone fa-book"></i>
            </td>
            <td class="book-content-table-body-item-overview">
              <i class="fa-solid fa-xmark x-btn" data-bookid="${id}"></i>
            </td>
          </tr>
        </tbody>
          `;
      document.getElementById('homepage-heading-1').textContent = 'Books';
      document.getElementById('search').classList.add('hidden');
      document.getElementById('filter').classList.add('hidden');
      document.querySelector('.books-numbers').classList.add('hidden');
      document.querySelector('.btn-search').classList.add('hidden');
      document.querySelector('.btn-arrow').classList.add('hidden');
      this.booksShow.appendChild(tableEl);
    });

    const tFoot = document.createElement('tfoot');
    tFoot.innerHTML = `
      <tr class="book-content-table-foot">
        <td colspan="10">
          <ul class="list-1-foot">
            <li>Rows per page:</li>
            <li>
              <a href="#"
                >6&emsp;<i
                  class="fa-sharp fa-solid fa-caret-down"
                ></i
              ></a>
            </li>
            <li>1-6 of 104</li>
            <li class="page-arrow-left-foot">
              <i class="fa-solid fa-chevron-left"></i>
            </li>
            <li class="page-arrow-right-foot">
              <i class="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </td>
      </tr>
    `;
    tableEl.appendChild(tFoot);

    const divEl = document.createElement('div');
    divEl.innerHTML = `<button class="add-book-overview-btn show-modal-btn">Add Book</button>`;
    this.booksShow.appendChild(divEl);
  }

  openAndCloseModal() {
    document.querySelector('.modal-window').classList.toggle('hidden');
    document.querySelector('.overlay').classList.toggle('hidden');
  }
}
