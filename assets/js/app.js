import { BooksAPI } from './http.books.libary.js';
import { BooksUI } from './UI.libary.js';
import { API_BOOKS_URL } from './config.js';
import { TableBooksGenerator } from './tableBooksGenerator.js';
import { Pagination } from './pagination.js';
import { Login } from './login.js';
import { Signup } from './signup.js';
import { ViewBookOverview } from './viewBookOverview.js';
import { HomepageItem } from './navHomepageItem.js';
import { DeleteAdminBook } from './deleteAdminBook.js';

const bookAPI = new BooksAPI(API_BOOKS_URL);
const bookUI = new BooksUI();
const tableBooksGenerator = new TableBooksGenerator();
const pagination = new Pagination();
const login = new Login();
const signup = new Signup();
const viewBookOverview = new ViewBookOverview();
const navHomepageItem = new HomepageItem();
const deleteAdminBook = new DeleteAdminBook();

const search = document.getElementById('search');
const searchBtn = document.querySelector('.btn-search');
const btnCloseModal = document.querySelector('.btn-close-modal');

const signUpBtn = document.querySelectorAll('.link-signup');
signUpBtn.forEach(btn =>
  btn.addEventListener('click', function () {
    bookUI.showForms('page-content-signup');
  })
);

const logInBtn = document.querySelectorAll('.link-login');
logInBtn.forEach(btn =>
  btn.addEventListener('click', function () {
    bookUI.showForms('page-content-login');
  })
);

const formLoginBtn = document.querySelector('#form-btn-login');
formLoginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  login.checkIsUserRegistered();
});

const formSignUpBtn = document.querySelector('#form-btn-signup');
formSignUpBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  signup.userRegistration();
  bookUI.showForms('page-content-login');
});

const showSearchResults = async function () {
  try {
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
      const data = await bookAPI.searchBooks(searchTerm);
      bookUI.showBooks(pagination.getBooksForCurrentPage(data));
      console.log(pagination.getBooksForCurrentPage(data));
      search.value = '';
    }
  } catch (err) {
    console.error(err.message);
  }
};

const navbarBtn = document.querySelector('.menu-bar');
navbarBtn.addEventListener('click', bookUI.navigationView);

searchBtn.addEventListener('click', showSearchResults);
search.addEventListener('keydown', async function (e) {
  if (e.key === 'Enter') {
    await showSearchResults();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    tableBooksGenerator.openAndCloseModal();
  }
});

const addBookForm = document.querySelector('.add-book-form');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
addBookForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(addBookForm);
  const jsonData = Object.fromEntries(formData.entries());
  await bookAPI.addBook(jsonData);
  const data = await bookAPI.getBooks();
  tableBooksGenerator.showAdminBooks(pagination.getBooksForCurrentPage(data));
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

const navigationContainer = document.getElementById('navigation');
navigationContainer.addEventListener('click', bookUI.navigation);

const homepageItem = document.querySelector('.homepage-item');
homepageItem.addEventListener('click', navHomepageItem.navHomepageItem);

document
  .querySelector('.admin-list-item-books')
  .addEventListener('click', async function () {
    const data = await bookAPI.getBooks();
    tableBooksGenerator.showAdminBooks(pagination.getBooksForCurrentPage(data));
    viewBookOverview.bookOverview();

    const btnOpenModal = document.querySelector('.show-modal-btn');
    btnOpenModal.addEventListener(
      'click',
      tableBooksGenerator.openAndCloseModal
    );
    btnCloseModal.addEventListener(
      'click',
      tableBooksGenerator.openAndCloseModal
    );
    deleteAdminBook.deleteBook();
  });

const arrowRight = document.querySelector('.page-arrow-right');
arrowRight.addEventListener('click', async function () {
  const data = await bookAPI.getBooks();
  pagination.nextPage();
  bookUI.showBooks(pagination.getBooksForCurrentPage(data));
});

const arrowLeft = document.querySelector('.page-arrow-left');
arrowLeft.addEventListener('click', async function () {
  const data = await bookAPI.getBooks();
  pagination.prevPage();
  bookUI.showBooks(pagination.getBooksForCurrentPage(data));
});
