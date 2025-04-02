import Book from './InterfaceBook'

export default class Library{
    constructor(
        private _books: Book[]
    ){}
    
    addBook(book: Book){
        const newBook: Book = {
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,

        }
        if (book.genre){
            newBook.genre = book.genre
        }
        this._books.push(newBook)
    }

    getBookDetails(isbn: string){
        const idx = this._books.findIndex(book => book.isbn === isbn)
        if (idx === -1){
            return "no book details was found"
        }
        const book = this._books[idx]
        return `"${book.title}" by ${book.author} was published in ${book.publishedYear} ${book.genre? `in genre ${book.genre}` : ''}`
    }

    get books(): Book[] {
        return this._books
    }
}