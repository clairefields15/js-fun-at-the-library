function createLibrary(libraryName) {
  var library = {
    name: libraryName,
//shelf object with three arrays (fantasy, fiction, nonfiction)
    shelves: {
      fantasy: [],
      fiction:[],
      nonFiction:[],
    }
  }
  return library
}

function addBook(library, bookTitle) {
  library.shelves[bookTitle.genre].push(bookTitle)
}

//brackets allow you to use a access properties dynamically!!
function checkoutBook(library, bookTitle, genre) {
//iterate through the genre array
for(var i = 0 ; i < genre.length ; i++) {
  //access the genre array in the object library and remove the bookTitle from the array
    library.shelves[genre].splice(bookTitle[i], 1)
  }
  //return a string "you have checked out"
  return `You have now checked out ${bookTitle} from the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
