class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book){
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
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    showAlert(message, className){
        // Create Erorr Div
        const div = document.createElement('div');
 
        // Add class to error div
        div.className = `alert ${className}`;
    
        // Append message to error div
        div.appendChild(document.createTextNode(message));
        
        // Get Container
        const container = document.querySelector('.container');
    
        // get form
        const form = document.querySelector('#book-form');
    
        // intert error div before form
        container.insertBefore(div, form);
    
        // hide the error div after 3sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFormFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    
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
    
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please Fill out the form', 'error'); 
    } else { 
        ui.addBookToList(book); 
        ui.clearFormFields();
        ui.showAlert('Book Added!', 'success'); 
    }
    e.preventDefault();
});
    
// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
    
    ui.deleteBook(e.target);

    ui.showAlert('Book Deleted Successfully!!', 'success');

    e.preventDefault();
});