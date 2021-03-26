function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name,age,pronouns) {
  return {
  name,
  age,
  pronouns,
}
}

var reviews = [];

function saveReview(reviewText, reviews) {
  if (reviews.includes(reviewText)){
  return
  }else{return reviews.push (reviewText)
  }
}

function calculatePageCount(bookTitle) {
  pageCount = bookTitle.length * 20;
  return pageCount
}

function writeBook(bookTitle,mainCharacter,genre) {
var book = {
  title: bookTitle,
  mainCharacter,
  genre,
  pageCount: calculatePageCount(bookTitle)
}
return book
}

function editBook(book) {
  return book.pageCount= book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
