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

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookTitle, genre) {
  //loops though the genre array
for(var i = 0 ; i < library.shelves[genre].length ; i++) {
  var title = library.shelves[genre][i].title
  if (title === bookTitle) {
    //remove it from the array and check it out
    library.shelves[genre].splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
