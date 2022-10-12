

function findAuthorById(authors, id) {
  //find authors and check to see if their id matches the given id
  return (result = authors.find((authorObj) => authorObj.id === id));
}

function findBookById(books, id) {
  //find books and check to see if their id matches the given id
  return (result = books.find((bookObj) => bookObj.id === id));
}

function partitionBooksByBorrowedStatus(books) {
  //create a variable that filters books that are borrowed
  let isBorr = books.filter((booksObj) => {
    //create a variable that is object shorthand for borrows
    let borrowed = booksObj.borrows;
    //create another variable that checks if some of the returned are equal to false
    let isBorrowed = borrowed.some((currBorr) => {
      return currBorr.returned === false;
    });
    //return the variable checking for false
    return isBorrowed;
  });
  //create a variable that filters books that are not borrowed
  let notBorr = books.filter((booksObj) => {
    //create a variable that is object shorthand for borrows
    let borrowed = booksObj.borrows;
    //create another variable that checks if some of the returned are equal to true
    let isNotBorrowed = borrowed.every((currBorr) => {
      return currBorr.returned === true;
    });
    //return the variable checking for true
    return isNotBorrowed;
  }); // return both main variables for borrowed and not borrowed
  return [isBorr, notBorr];
}

function partitionBooksByBorrowedStatus(books) {
  // reduce the books to accumlator(acc) and book remember to add a blank nested array
  return books.reduce(
    (acc, book) => {
      // set a variable that uses borrowed and returned to equal acc
      const [borrowed, returned] = acc;
      //create another variable for object shorthand that goes into books.borrowed at index 0
      const recent = book.borrows[0];
      //check the variable for returned status and push to returned if true or push to borrowed if false
      recent.returned ? returned.push(book) : borrowed.push(book);
      //return the acc
      return acc;
    },
    [[], []]
  );
}


function getBorrowersForBook(book, accounts) {
  //create a variable that creates a new array of book.borrows
  let result = book.borrows.map((borrows) => {
    //create another variable that finds if account id and borrows id are the same
    let account = accounts.find((account) => account.id === borrows.id);
    //return an object using the spread opperator for borrows and account
    return { ...borrows, ...account };
  });
  //return the result and then slice at 10
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
