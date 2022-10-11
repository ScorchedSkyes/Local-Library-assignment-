// All tests are passing in Qualified.

// The project doesn't include any single-letter variables.

// The project makes at least one use of an arrow function.

// The project makes at least one use of each of the following native array methods: find(), filter(), map(), and reduce().

// The project employs at least one helper function, which helps support the tested functions.

// The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops.









function findAuthorById(authors, id) {
  //find authors and check to see if their id matches the given id
  return result = authors.find((authorObj)=>authorObj.id === id)
}





function findBookById(books, id) {
   //find books and check to see if their id matches the given id
  return result = books.find((bookObj)=>bookObj.id === id)
}






function partitionBooksByBorrowedStatus(books) {
  //create a variable that filters books that are borrowed
  let isBorr = books.filter((booksObj)=>{
    //create a variable that is object shorthand for borrows
    let borrowed = booksObj.borrows
    //create another variable that checks if some of the returned are equal to false
    let isBorrowed = borrowed.some(currBorr=>{
      return currBorr.returned === false
    })
    //return the variable checking for false
    return isBorrowed
  })
  //create a variable that filters books that are not borrowed
  let notBorr = books.filter((booksObj)=>{
    //create a variable that is object shorthand for borrows
    let borrowed = booksObj.borrows
    //create another variable that checks if some of the returned are equal to true
    let isNotBorrowed = borrowed.every(currBorr=>{
      return currBorr.returned === true
    })
    //return the variable checking for true
    return isNotBorrowed
  })// return both main variables for borrowed and not borrowed
  return [isBorr, notBorr]
}



function partitionBooksByBorrowedStatus(books){
  // reduce the books to accumlator(acc) and book remember to add a blank nested array 
  return books.reduce((acc,book)=> {
    // set a variable that uses borrowed and returned to equal acc
    const [borrowed, returned] = acc;
    //create another variable for object shorthand that goes into books.borrowed at index 0
    const recent = book.borrows[0];
    //check the variable for returned status and push to returned if true or push to borrowed if false
    recent.returned ? returned.push(book) : borrowed.push(book)
    //return the acc 
    return acc
  }, [[], []])
}



// return books.reduce((acc,book)=>{
//   const [borrowed] = acc
//   const recent = book.borrows[0]
//   recent.returned ? borrowed.push(book) : null
//   return acc
// }, [])


// function getBorrowersForBook(book={}, accounts={}) {
//   // destructure the array book to get to borrows
//   let {borrows} = book
//   //create a result variable that create a new array off of borrows
//   let result = borrows.map((borrower)=>{
//     //create another variable that takes accounts and finds if the account id is equal to the borrower id
//     let foundBorrower = accounts.find((account)=>{
//       return account.id === borrower.id
//     })
//     //recall the last variable, checking in returned, and put that information into the borrower.returned 
//     foundBorrower.returned = borrower.returned
//     //return the last variable
//     return foundBorrower
//   })
//   //return the result and slice it to not go larger then 10
//   return result.slice(0,10)
// }

function getBorrowersForBook(book, accounts){
  //create a variable that creates a new array of book.borrows
  let result = book.borrows.map((borrows)=> {
    //create another variable that finds if account id and borrows id are the same
    let account = accounts.find((account)=> account.id === borrows.id)
     //return an object using the spread opperator for borrows and account
    return {...borrows, ...account}
  })
  //return the result and then slice at 10
  return result.slice(0,10)
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
