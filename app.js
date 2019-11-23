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
    
    const list = document.getElementById('book-list');

    // Create Element
    const row = document.createElement('tr'); 

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    
    `;

    list.appendChild(row);


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

