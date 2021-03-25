function createTitle(title) {
  return `The ${title}`
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




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
