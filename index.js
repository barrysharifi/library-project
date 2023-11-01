function book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`
    }
}
//created a library for books to be stored
const myLibrary = []

function addBookToLibrary(){
   let title = document.querySelector("#title").value
   let author = document.getElementById("author").value
   let pages = document.getElementById("pages").value
   let read = document.getElementById("read").value
   let newBook = new book(title, author, pages, read)
   myLibrary.push(newBook)
   render()

}
//when button new book is clicked the form appears
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block"
})
//submits new book into the console
document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault()
    addBookToLibrary();
})
//loop through myLibrary adds a <p> element to #library
function render(){
    let bookCase = document.querySelector("#library")
    bookCase.innerHTML = ""
    for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = 
    `<h3>${book.title}</h3> by
    <h5>${book.author}</h5> 
    <p>${book.pages}</p> pages 
    <p>${book.read ? "Read" : "Not Read Yet"}</p>`
    bookCase.appendChild(bookElement)
}
}






// const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, true)


