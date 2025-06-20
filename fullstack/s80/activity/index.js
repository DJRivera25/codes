// Question #1: Add a new book with the following properties:
// Automatic unique ID assignment
// Title and author should be a string
// Year should be a positive number
// isAvailable defaults to true

//addBook(library,newBook) Output: true

const library = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: false },
];
const newBook = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 };

function addBook(library, newBook) {
  if (
    typeof newBook.title !== "string" ||
    typeof newBook.author !== "string" ||
    typeof newBook.year !== "number" ||
    newBook.year < 0
  ) {
    return "";
  }
  const updatedLibrary = library;
  const highestId = library.reduce((acc, book) => Math.max(acc, book.id), 0);

  const newB = { id: highestId + 1, ...newBook, isAvailable: true };
  updatedLibrary.push(newB);
  return true;
}

console.log(addBook(library, newBook));

// Question #2: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability.

//getBooks(library,1)
//Output:
/* 

    {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "isAvailable": true
    }

*/

function getBooks(library, id = null, filterAvailable = null) {
  if (id !== null) {
    return library.find((b) => b.id === id);
  } else if (filterAvailable !== null) {
    return library.filter((b) => b.isAvailable === filterAvailable);
  } else {
    return library;
  }
}

console.log(getBooks(library, 1));

// Question #3: Update a book's availability isAvailable after validating the book exists and ensuring the new isAvailable differs from the current.

//updateBookAvailability(library,1,false) Output: true
//updateBookAvailability(library,1,true) Output: true
//updateBookAvailability(library,4,false) Output: `book not found`

function updateBookAvailability(library, id, isAvailable) {
  if (id !== null) {
    const bookIndex = library.findIndex((b) => b.id === id);
    console.log(`question 3: book Index:`, bookIndex);
    if (bookIndex == -1) {
      return "book not found";
    }
    library[bookIndex].isAvailable = isAvailable;
    return true;
  }
}

console.log(updateBookAvailability(library, 1, true));

// Question #4: Remove a book by its ID only if it is marked as unavailable.

//removeBook(library,2) Output: true
//removeBook(library,1) Output: "Book must be unavailable to be removed."

function removeBook(library, id) {
  if (id !== null) {
    const bookIndex = library.findIndex((b) => b.id === id);
    console.log(`question 4: book index:`, bookIndex);
    if (bookIndex == -1) {
      return "book not found";
    }
    if (library[bookIndex].isAvailable) {
      return "Book must be unavailable to be removed";
    }
    library.splice(bookIndex, 1);
    console.log(library);
    return true;
  }
}
console.log(removeBook(library, 1));

// Question #5: List all books, with an option to filter by their availability isAvailable.

function listBooks(library, filterAvailable = null) {
  if (filterAvailable !== null) {
    return library.filter((b) => b.isAvailable === filterAvailable);
  } else {
    return library;
  }
}

console.log(listBooks(library, true));

//Flowchart Interview Questions

// Question #6 Given the following code, create the appropriate Flowchart.
// You can use draw.io and save the png into the activity folder.

function determineGrade(score) {
  // Input score as parameter
  if (typeof score !== "number") {
    // Return "invalid input" if score is not a number
    return "invalid input";
  }

  // Check if score is within valid range
  if (score < 0 || score > 100) {
    // Return "invalid score" if score is outside the range 0-100
    return "invalid score";
  }

  // Determine grade based on score
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Return the grade
  return grade;
}

try {
  module.exports = {
    addBook: typeof addBook !== "undefined" ? addBook : null,
    getBooks: typeof getBooks !== "undefined" ? getBooks : null,
    updateBookAvailability: typeof updateBookAvailability !== "undefined" ? updateBookAvailability : null,
    removeBook: typeof removeBook !== "undefined" ? removeBook : null,
    listBooks: typeof listBooks !== "undefined" ? listBooks : null,
  };
} catch (err) {}
