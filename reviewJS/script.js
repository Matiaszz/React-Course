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


const log = console.log
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

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
log(pagesRange)

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

log(getTotalReviewCount(book))