// All tests are passing in Qualified.

// The project doesn't include any single-letter variables.

// The project makes at least one use of an arrow function.

// The project makes at least one use of each of the following native array methods: find(), filter(), map(), and reduce().

// The project employs at least one helper function, which helps support the tested functions.

// The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops.
// const accounts = require("../public/data/accounts")
// const books = require("../public/data/books")






function findAccountById(accounts, id) {
  //create a variable for result that uses dot notation to look into account and then find to see if the parameter you se equals the given id
  let result = accounts.find((accountsObj)=>{
    return accountsObj.id ===id
  })
  //return the result if it matches otherwise null (terinary operator)
  return result? result : null
}

function sortAccountsByLastName(accounts) {
  //sort through accounts and by going into the last name and checking if the nameA is less then nameB and if so -1 else 1
   accounts.sort((nameA,nameB)=>{
    return nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase()? -1 : 1
  })
  //return the accounts
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  //create a variable that equals 0
  let result = 0
//loop through books and then foreach book that is borrowed check if the accountid is eual to the borrowed id and then add it to the result
books.forEach(book => book.borrows.forEach(borrow => account.id === borrow.id && result++))
//return the result
return result


  // const accID = account.id
  // let hasBorr = books.forEach((booksObj) => {
  //   let borrowed = booksObj.borrows
  //   let borrID = borrowed.every(userHasBorr=>{
  //     return userHasBorr.id === accID
  //   })
  // return result
  
// }
}

// console.log(getTotalNumberOfBorrows(accounts, books))

function getBooksPossessedByAccount(account, books, authors) {
  // filter through books
  return books.filter((book)=>{
    //create a variable for the object shorthand for the first index of borrows
  let recent = book.borrows[0]
  //check to see if the borrow has not been returned and then if the recent id is equal to the givin account id
  return !recent.returned && recent.id === account.id
} )
//create a new array that finds the author and checks if the author id is equal to the books author id and then return the spread opperator for book and author 
.map((book)=>{
  let author = authors.find(author => author.id === book.authorId)
  return {...book, author}
})



}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
