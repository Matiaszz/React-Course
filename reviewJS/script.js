const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 1001,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];


const log = console.log;
const getBooks = () => data;
const getBook = (id) => data.find((d) => d.id === id);

// destructuring

const book = getBook(2);

// dont use this:
// const title = book.title;
// const author = book.author;


// use this:
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } = book;
author; // Stanislaw Lem
title; // The Cyberiad
genres // an array of genres

// indexes of the genres array

// ...array = takes the value of an array
//      0             1              rest of items
const [primaryGenre, secondaryGenre, ...otherGenres] = genres
primaryGenre // science fiction
secondaryGenre // humor
otherGenres // a list with other genres

// i trying to add an genre in array
// basecally, this mode changes the principal array, while the teacher method,
// create a new array with the new value

// const newGenres = genres.push('epic')
// genres += epic


// what teacher does
const newGenres = [...genres, 'epic']
newGenres

const updatedBook = {
  ...book,

  // adding a new property
  moviePublicationDate: '2000-01-20',

  // overwriting an existing property
  pages: 23
}
updatedBook;

const summary = `${updatedBook.title} is a book with ${pages} pages and published in ${publicationDate} `
summary

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than thousand';
// log(pagesRange)

// Arrow functions
// its good to make 1 line functions

const getYear = (book) => book.split('-')[0];

const portugueseTranslation = book.translations.portuguese || 'Not translated';


// returns the second value if the first value is null or undefined
const questionMark = book.reviews.reviewsCount ?? 'no data'

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodreads + librarything
}

// log(getTotalReviewCount(book))


// array maps

// for each item in array, duplicate the value
// log([1, 2, 3, 4, 5, 6].map((item) => item * 2));


const books = getBooks();

// log(titles)

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book)
}))

// log(essentialData)

const longBooks = books.filter((book) => getTotalReviewCount(book) > 200)
// log(longBooks)

const pagesAllBooks = books.reduce((accumulator, book) => accumulator + book.pages, 0)
const titles = books.map((book) => book.title)
const words = titles.flatMap((title) => title.split(" "));

const frequencyTable = words.reduce((time, word) => {
  const lowerWord = word.toString().toLowerCase();
  time[lowerWord] = (time[lowerWord] || 0) + 1;
  return time;
}, {})

const x = [1, 45, 3, 2, 4, 356, 2, 43, 431, 12, 6]

const minorToHigher = x.slice().sort((a, b) => a - b)
// log(minorToHigher)

const sortByPages = books.slice().sort((a, b) => a.pages - b.pages)
// log(sortByPages)


const newBook = {
  id: 6,
  title: 'Harry Potter and the chamber of secrets',
  author: 'me, obviously'

}

const booksAfterAdd = [...books, newBook];

// const booksAfterUpdate = booksAfterDelete
//   .map((book) => book.id === 4 ? { ...book, pages: 99999999999999999 } : book)

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

// const request = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((data) => log(data))


async function getAPI() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos').json();
  // log(data)
  return data;
}

const getBooksInCinemaAndLong = books.filter((book) => book.pages > 500 && book.hasMovieAdaptation);
const getBooksTitles = getBooksInCinemaAndLong.map((book) => book.title);

function buttonClick() {
  const ul = document.getElementById('booksList');

  ul.innerHTML = '';
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.title;
    ul.appendChild(li);
  });
}

const renderBook = (book) => {
  const object = {
    title: book.title,
    author: book.author,
    pages: book.pages,
    hasMovieAdaptation: book.hasMovieAdaptation
  }
  const div = document.getElementById('div')
  div.innerHTML = '';

  const title = document.createElement('h2');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const hasMovieAdaptation2 = document.createElement('p');

  title.textContent = object.title;
  author.textContent = object.author;
  pages.textContent = object.pages;
  hasMovieAdaptation2.textContent = object.hasMovieAdaptation ? 'Has movie adaptation' : 'Dont has movie adaptation'

  div.appendChild(title)
  div.appendChild(author)
  div.appendChild(pages)
  div.appendChild(hasMovieAdaptation2)

  return div
}
renderBook(data[1])
