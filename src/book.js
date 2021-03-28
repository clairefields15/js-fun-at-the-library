function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}

function saveReview(reviewText, reviews) {
  if(reviews.includes(reviewText)) {
    return
  }else {
    return reviews.push(reviewText)
  }
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20
  return bookPageCount
}

function writeBook(bookTitle, character, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book
}

function editBook(book) {
  return book.pageCount = book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
