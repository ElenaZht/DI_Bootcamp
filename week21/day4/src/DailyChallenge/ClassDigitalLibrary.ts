import Library from "./ClassLibrary.js"
import Book from "./InterfaceBook"

export default class DigitalLibrary extends Library{
    constructor(
        readonly website: string,
        books: Book[]
    ){
        super(books)
    }

    listBooks(){
        return this.books.map(book => book.title)
    }
}