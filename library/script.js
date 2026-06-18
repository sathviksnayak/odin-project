let library=[]
function Book(title, author, pages, isRead){
    this.id=crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

library.push(
    new Book(
        "The Hobbit",
        "J.R.R. Tolkien",
        310,
        true
    ),

    new Book(
        "1984",
        "George Orwell",
        328,
        false
    )
);
function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title, author, pages, isRead);
    library.push(book);
    console.log(library);
}
const container =
document.getElementById(
   "Library-container"
);

function displayBooks() {
    container.innerHTML = '';
    library.forEach((book,index)=>{
        const bookElement = document.createElement('div');

        bookElement.className = 'book-card';
         const toggleBtn =document.createElement("button");
         toggleBtn.textContent =book.isRead? "Mark as Not Read": "Mark as Read";
         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Remove";
            toggleBtn.addEventListener('click', () => {
                book.toggleRead();
                displayBooks();
            });
            deleteBtn.addEventListener('click', () => {
                removeBook(book.id);
                displayBooks();
            });
        bookElement.innerHTML = `
            <h3>📚 ${book.title}</h3>
            <p class="meta">✍ ${book.author}</p>
<p class="meta">📄 ${book.pages} pages</p>
            <p class="status">Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
            <hr>
           
            
        `;

        bookElement.appendChild(toggleBtn);
        bookElement.appendChild(deleteBtn);
        container.appendChild(bookElement);
    });
}
document.addEventListener('DOMContentLoaded', displayBooks);


function removeBook(id) {
    library = library.filter(book => book.id !== id);
    displayBooks();
}

const addBtn =
document.getElementById(
   "newBook-btn"
);
const dialog =
document.getElementById(
   "add-book-dialog"
);
addBtn.addEventListener('click', () => {
 
       dialog.showModal();

   
});
const form =
document.getElementById(
   "book-form"
);
const cancelBtn =
document.getElementById(
   "cancel-btn"
);

cancelBtn.addEventListener(
  "click",
  ()=>{

      dialog.close();

  }
);



form.addEventListener(
   "submit",
   function(e){
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    addBookToLibrary(title, author, pages, isRead);
    dialog.close();
    form.reset();
    displayBooks();
   }
);
Book.prototype.toggleRead =
function(){

    this.isRead =
    !this.isRead;
}