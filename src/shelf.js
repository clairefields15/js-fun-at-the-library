function shelfBook(book, shelf) {
  if(shelf.length <= 2) {
    shelf.unshift(book)
  }else {
    return
  }
}

//should remove a book from the shelf by name
//test removes dune[1] and then hyperion[0]
//need to search for a match in array. try shelf.includes()?
//need to loop through the array, search for the name (book.title)
//need to know the position of the book, in order to splice
//if else statement: if book = book.title,
function unshelfBook(title, shelf) {
 for(var i = 0 ; i < shelf.length ; i ++){
   if(shelf[i].title.includes(title)){
     shelf.splice(i, 1)
   }
 }
}

//list titles function should list all book titles on a shelf
//to get titles needs to access book.title
//only parameter is shelf, when we access shelf we see book
//need to loop tolookat whole array
var titles = [];

function listTitles(shelf){
  for(var i = 0 ; i < shelf.length ; i ++){
  titles.push(shelf[i].title)
  }
return titles.join(', ')
}




//THIS works for first test, fails second
// function searchShelf(shelf, title) {
//   if (titles.includes(title)){
//     return true
//   } else {
//     return false
//   }
// }

//should tell us if a title is on the shelf, should return a boolean
//takes two parameters- shelf which is an array of objects and the title of the book
//loop through the shelf array and search for title = book.title return true

function searchShelf(shelf, title) {
for(var i = 0; i < shelf.length ; i++)
  if (shelf[i].title = title){
    console.log(shelf[i])
    return true
  } else {
    return false
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
