export class BooksUI {
  booksShow = document.getElementById('books');
  navigationLinks = document.querySelector('.navigation-links');
  firstPageWrapper = document.querySelector('.wrapper');
  secondPageWrapper = document.querySelector('.wrapper-1');
  modalWindow = document.querySelector('.modal-window');
  currentPage = 0;

  showForms(elementIdName) {
    const element = document.getElementById(elementIdName);
    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.add('hidden');
    }
    element.classList.remove('hidden');
    this.navigationLinks.innerHTML = '';
  }

  displaySecondPage() {
    this.firstPageWrapper.classList.add('hidden');
    this.secondPageWrapper.classList.remove('hidden');
  }

  showBooks(books) {
    this.booksShow.innerHTML = '';

    books.forEach(book => {
      const { id, title, author, coverUrl, category, description } = book;
      const bookEl = document.createElement('article');
      bookEl.classList.add('book-content');

      bookEl.innerHTML = `
          <h3 class="book-heading">${title}</h3>
          <div class="all-description">
            <img
              src="${coverUrl}"
              alt="${title}"
              class="img"
            />
            <div class="description">
              <h4 class="author">${author}, <span>1995</span></h4>
              <p class="book-category">Category: ${category}</p>
              <p class="book-description">'${description}'</p>
              <a href="#${id}" class="book-btn">Book Overview</a>
            </div>
          </div>
          `;
      this.booksShow.appendChild(bookEl);
    });
  }

  showBookOverview(books) {
    this.booksShow.innerHTML = '';

    const { title, author, coverUrl, category, description, year } = books;

    const bookEl = document.createElement('article');
    bookEl.classList.add('book-overview-content');

    bookEl.innerHTML = `
      <h3 class="book-overview-heading">${title}</h3>
      <div class="book-overview-all-description">
        <img
          src="${coverUrl}"
          alt="${title}"
          class="book-overview-img"
        />
        <div class="book-overview-description">
          <h4 class="book-overview-author">
            ${author}, <span>${year}</span>
          </h4>
          <p class="book-country-origin">Country: USA</p>
          <p class="book-overview-category">Category: ${category}</p>
          <p class="book-ISBN">ISBN: 1234567890</p>
          <p class="book-overview-description-1">${description}</p>
          <h4 class="book-overview-author">
            Nina Badzin, <span>USA</span>
          </h4>
          <p class="book-overview-description-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident sunt sapiente unde. Quis cumque soluta quisquam
            ullam officia, quasi error dolore fugit enim aperiam quo
            neque maxime corrupti explicabo. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt debitis ipsum
            laborum, nam dolor eos eligendi magni ab? Enim, atque?
          </p>
        </div>
      </div>
          `;
    this.booksShow.appendChild(bookEl);

    const createDivEl = document.createElement('div');
    createDivEl.innerHTML = `
    <button class="close-book-overview-btn">Close</button>
    `;
    this.booksShow.appendChild(createDivEl);
    document.querySelector('.list-1').classList.add('hidden');
  }

  navigationView() {
    const nav = document.querySelector('#navigation');
    const visibility = nav.getAttribute('data-visible');
    const mainContainer1 = document.querySelector('.main-container-1');

    if (visibility === 'false') {
      nav.setAttribute('data-visible', true);
      mainContainer1.style.transform = 'translateX(0%)';
    } else {
      nav.setAttribute('data-visible', false);
      mainContainer1.style.transform = 'translateX(-8%)';
    }
  }

  navigation(e) {
    const navlistItem = document.querySelectorAll('.navlist-item');
    const clicked = e.target.closest('.navlist-item');
    if (!clicked) return;
    navlistItem.forEach(navItem => navItem.classList.remove('active-nav-item'));
    clicked.classList.add('active-nav-item');
    document
      .querySelector(`.nav__content--${clicked.dataset.item}`)
      ?.classList.toggle('hidden');
  }
  homepageEl() {
    document.getElementById('homepage-heading-1').textContent = 'Homepage';
    document.getElementById('search').classList.remove('hidden');
    document.getElementById('filter').classList.remove('hidden');
    document.querySelector('.books-numbers').classList.remove('hidden');
    document.querySelector('.btn-search').classList.remove('hidden');
    document.querySelector('.btn-arrow').classList.remove('hidden');
  }
}
