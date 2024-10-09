
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => {
      renderBooks(data);
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list"); 
  bookList.innerHTML = ""; 

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name; 
    bookList.appendChild(listItem);
  });
}


window.onload = fetchBooks;


