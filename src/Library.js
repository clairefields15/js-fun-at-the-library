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


//this passes first test but not second
//each shelf has one book to start
//for the start of last test, fantasy has Dracula, others have 0
//test is looking for fifth season, is not on the fantasy shelf

function checkoutBook(library, bookTitle, genre) {
  //loops though the genre array
for(var i = 0 ; i < library.shelves[genre].length ; i++) {
  //looks at which titles are in the array
  var title = library.shelves[genre][i].title
  //if whats in the array matches the book we are looking for
  if (title === bookTitle) {
    //remove it from the array and check it out
    library.shelves[genre].splice(genre[i], 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    } else {
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    }
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

//brackets allow you to use a access object properties dynamically!!
