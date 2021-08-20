const addbookContainer = document.getElementById('addbook-container');
const rowTemplate = document.getElementById('rowTemplate');
const addBookButton = document.getElementById('addBookButton');
const addbookForm = document.getElementById('addBookForm');

addBookButton.addEventListener('click', function(){
    addbookContainer.style.display = 'flex';
});

addBookForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    let formData = {
        // bookName: 
    };


});

document.getElementById('cancelBtn').addEventListener('click', function(){
    addbookContainer.style.display = 'none';
});