import { data } from "./books.js";


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
const {author, title, pages, publicationDate, genres, hasMovieAdaptation} = book;
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
log(updatedBook)
