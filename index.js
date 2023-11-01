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
   console.log(newBook)

}
//when button new book is clicked the form appears
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block"
})
//submits new book into the console
document.querySelector("#new-book-form").addEventListener("submit", function(){
    event.preventDefault()
    addBookToLibrary();
})








// const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, true)


