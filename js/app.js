const books = [];

class Book {
  constructor(author, title, numOfPages, read) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;
  }
}

const addBook = (b) => {
  books.push(b);
};

//const b = new Book("test", "teda", 300, true);

