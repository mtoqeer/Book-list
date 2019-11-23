// Book Contractor
function Book(title, author, isbn){

    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Contractor
function UI(){}

// UI prototype
UI.prototype.addBookToList = function(book){
    console.log(book);
}


document.getElementById('book-form').addEventListener('submit',function(e){

    // Get Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate Book Object
    const book = new Book(title,author,isbn);

    // Instantiate UI
    const ui = new UI();
 
    ui.addBookToList(book);

    e.preventDefault();
});

