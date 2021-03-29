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

//this passes first test but not second
function checkoutBook(library, bookTitle, genre) {
  //loops though the genre array
for(var i = 0 ; i < library.shelves[genre].length ; i++) {
  var title = library.shelves[genre][i].title
  console.log("this is loop number >>" + i)
  //if title at that index matches bookTitle
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
