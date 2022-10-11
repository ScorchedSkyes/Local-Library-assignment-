// All tests are passing in Qualified.

// The project doesn't include any single-letter variables.

// The project makes at least one use of an arrow function.

// The project makes at least one use of each of the following native array methods: find(), filter(), map(), and reduce().

// The project employs at least one helper function, which helps support the tested functions.

// The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops.

//helper function to sort and truncate to just first 5 items

function getTotalBooksCount(books) {
  //return the length of the array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //return the length of the array
  return accounts.length;
}

// function getBooksBorrowedCount(books) {
//   //create a variable that filters books that are borrowed
//   let isBorr = books.filter((booksObj) => {
//     //create a variable that is object shorthand for borrows
//     let borrowed = booksObj.borrows;
//     //create another variable that checks if some of the returned are equal to false
//     let isBorrowed = borrowed.some((currBorr) => {
//       return currBorr.returned === false;
//     });
//     //return the variable checking for false
//     return isBorrowed;
//   });
//   //return the main variable and check the total number of objects in that array
//   return isBorr.length;
// }


function getBooksBorrowedCount(books) {//Create a function named getBooksBorrowedCount that takes in a books array
  return books.reduce( ( total, book ) =>{
    return book.borrows[0].returned ? total += 0 : total += 1;
  }, 0 );
 }




function getMostCommonGenres(books) {
  //use slice_sort helper function
  return slice_sort(
    //iterate through books by using reduce checking genres and book
    books.reduce((genres, book) => {
      //create a vaiable that finds if the name of the genre and the book genre match
      const matchGenre = genres.find((genre) => genre.name === book.genre);
      //call the variable created and if the genre does not match then push a new object with the name of the books genre and count of 1 otherwise add to the count of another genre
      !matchGenre
        ? genres.push({ name: book.genre, count: 1 })
        : matchGenre.count++;
      //return the genres
      return genres;
    }, [])
  );
}

function getMostPopularBooks(books) {
  //use slice_sort helper function
  return slice_sort(
    //create a new array of books with the object title and borrows
    books.map(({ title, borrows }) => ({
      //create the blank object with the name being the title and the count counting the array of all of the borrows
      name: title,
      count: countArray(borrows),
    }))
  );
}

function getMostPopularAuthors(books, authors) {
  //use slice_sort helper function
  return slice_sort(
    //create a new array with an object of name and a nested object of first and last, then id
    authors.map(({ name: { first, last }, id }) => ({
      //build the blank object using string interpolation of first and last
      name: `${first} ${last}`,
      //continue building the object using count and make use of the helper function borrowsForAuthor
      count: borrowsForAuthor(books, id),
    }))
  );
}

//Helper functions to assist

function slice_sort(arr, slicer = 5) {
  //create a variable to object shorthand the spread operator for arr
  const newArr = [...arr];
  //return the variable using an object for two counts then make sure count 2 is - count1
  return (
    newArr
      .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
      //slice at 0 then reference the parameter slicer
      .slice(0, slicer)
  );
}

function countArray(entry) {
  //return the length of the parameter
  return entry.length;
}

function borrowsForAuthor(books, id) {
  // iterate using reduce through books checking for total borrows and an deconstruct of authortId and borrows this will be a variable starting at 0
  return books.reduce((totalBorrows, { authorId, borrows }) => {
    //if authorId equals id. += total borrows to countArray(borrows)
    if (authorId === id) totalBorrows += countArray(borrows);
    //return total borrows
    return totalBorrows;
  }, 0);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
