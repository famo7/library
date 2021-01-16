const books = [];
const bookElement = document.getElementById("book-tables");
const title = document.getElementById("title")
const author = document.getElementById("author")
const numP = document.getElementById("numOfPages")
const checkBox = document.getElementById("checkBox")
const form = document.getElementById("book-form");

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



const displayBooks = () =>{
  if(books.length === 0){
    document.getElementById("the-table").style.display = "none";
  }else{
    document.getElementById("the-table").style.display = "block";

  books.forEach(i =>{
   
    let ul = document.createElement("tr")
    

    let authorLi = document.createElement("td")
    authorLi.textContent=i.author

    let titleLi = document.createElement("td")
    titleLi.textContent=i.title

    let pagesLi = document.createElement("td")
    pagesLi.textContent=i.numOfPages

    let readTd = document.createElement("td")
    let read = document.createElement("input")
    read.type = "checkbox"
    read.checked = i.read
    
    
    readTd.appendChild(read)

    ul.appendChild(authorLi)
    ul.appendChild(titleLi)
    ul.appendChild(pagesLi)
    ul.appendChild(readTd)


  bookElement.appendChild(ul)

  })
}
  
}


form.addEventListener("submit", event => {
  event.preventDefault();

  if(Number(numP.value) < 0){
    alert("Pages cannot be less than 0, try again.");
  }else{
    const b = new Book(author.value, title.value,
      Number(numP.value), checkBox.checked)
      addBook(b)
 
      $('#myModal').modal('hide');
      displayBooks()
  }
  form.reset()
  
});
displayBooks()