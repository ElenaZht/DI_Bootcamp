import Book from "./InterfaceBook";
import DigitalLibrary from "./ClassDigitalLibrary.js";

const library = new DigitalLibrary('www.diglib.com', [])
const booksForLib = [
    {    
        title: "The Dog heart",
        author: "M.Bulgakov",
        isbn: "978-3-16-148410-0",
        publishedYear: 1925,
        genre: 'Science fiction'
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "isbn": "978-0-452-28423-4",
        "publishedYear": 1949,
        "genre": "Dystopian"
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "isbn": "978-0-7432-7356-5",
        "publishedYear": 1925,
        "genre": "Fiction"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "isbn": "978-0-06-112008-4",
        "publishedYear": 1960,
        "genre": "Southern Gothic"
    },
    {
       "title": "Brave New World",
        "author": "Aldous Huxley",
        "isbn": "978-0-06-085052-4",
        "publishedYear": 1932,
        "genre": "Science Fiction" 
    }
]

booksForLib.forEach(book => {
    library.addBook(book)
})

console.log(library.listBooks())