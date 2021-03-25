function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name,age,pronouns) {
  return {
  name: name,
  age: age,
  pronouns: pronouns,
}
}

//create an array for reviews
var reviews = [];

//a function that adds reviews to the array "reviews"
// function saveReview(reviewText, reviews) {
// return reviews.push (reviewText)
// }

//before adding a new review, loop through the array and check for duplicates while looping

function saveReview(reviewText, reviews) {
  if (reviews.includes(reviewText)){
  return
  }else{return reviews.push (reviewText)
  }
}

//calculate page count function
//get number of characters in title
//multiply characters by 20 to add 20 pages per letter
//tried first with createTitle(bookTitle).length and did not work, why?
function calculatePageCount(bookTitle, bookPageCount) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount
}

function writeBook(title,mainCharacter,pageCount) {
var book = {
  title: title,
  mainCharacter: mainCharacter,
  pageCount: pageCount,
  genre: "fantasy"
}
return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
