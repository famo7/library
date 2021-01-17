let books = []
// get data from localstorage if there is data
if (localStorage.getItem("myBooks") !== null) {
  books = JSON.parse(localStorage.getItem("myBooks"));
}

// get elements from the DOM
const bookElement = document.getElementById("book-tables");
const title = document.getElementById("title");
const author = document.getElementById("author");
const numP = document.getElementById("numOfPages");
const checkBox = document.getElementById("checkBox");
const form = document.getElementById("book-form");
const table = document.getElementById("the-table");

// Book class for books
class Book {
  constructor(author, title, numOfPages, read) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;
  }
}

// funtion to add book
const addBook = (b) => {
  books.push(b);
  localStorage.setItem("myBooks", JSON.stringify(books))
};

// function for displaying books
const displayBooks = () => {
  $("#book-tables").empty();

  if (books.length === 0) {
    table.style.display = "none";
  } else {
    table.style.display = "block";

    // dynamically create a list for every book
    books.forEach((i, index) => {
      let tr = document.createElement("tr");
      tr.dataset.index = index;

      let authorTd = document.createElement("td");
      authorTd.textContent = i.author;

      let titleTd = document.createElement("td");
      titleTd.textContent = i.title;

      let pagesTd = document.createElement("td");
      pagesTd.textContent = i.numOfPages;

      let readTd = document.createElement("td");
      let read = document.createElement("input");
      read.type = "checkbox";
      read.checked = i.read;
      // eventlistener for updating read
      read.addEventListener("click", function () {
        books[Number(this.parentElement.parentElement.dataset.index)].read = this.checked
        localStorage.setItem("myBooks", JSON.stringify(books))
      });

      
      let delBtn = document.createElement("BUTTON");
      delBtn.innerHTML = "Delete";
      delBtn.classList.add("btn", "btn-danger");
      // event listener for deleting a book
      delBtn.addEventListener("click", function(){
        // delete a book using dataset
        books.splice(Number(this.parentElement.dataset.index), 1)
        localStorage.setItem("myBooks", JSON.stringify(books))
        displayBooks()
      })
      readTd.appendChild(read);

      tr.appendChild(authorTd);
      tr.appendChild(titleTd);
      tr.appendChild(pagesTd);
      tr.appendChild(readTd);
      tr.appendChild(delBtn);

      bookElement.appendChild(tr);
    });
  }
};



// eventlistener for form submition
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (Number(numP.value) < 0) {
    alert("Pages cannot be less than 0, try again.");
  } else {
    addBook(
      new Book(author.value, title.value, Number(numP.value), checkBox.checked)
    );

    $("#myModal").modal("hide");
    displayBooks();
  }
  form.reset();
});



displayBooks();


