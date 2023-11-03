function book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.read = read;
}
//Read or not button
book.prototype.toggleRead = function(){
    this.read = !this.read
}
function toggleRead(index){
    myLibrary[index].toggleRead()
    render()
}
//created a library for books to be stored
const myLibrary = []

function addBookToLibrary(){
   let title = document.querySelector("#title").value
   let author = document.getElementById("author").value
   let pages = document.getElementById("pages").value
   let read = document.getElementById("read").checked
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

//submits new book into the library 
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
    `<div class="card-header">
        <h2 class="title">${book.title}</h2>
        <h5 class="author">by ${book.author}</h5> 
    </div>
    <div class="card-body">
        <p>${book.pages}</p> pages 
        <p class ="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    </div>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>`
    bookCase.appendChild(bookElement)
}
}

//remove button
function removeBook(index){
    myLibrary.splice(index, 1)
    render()
}







