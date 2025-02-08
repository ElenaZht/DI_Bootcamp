const books = [
    {"id": 0, "titlr": "The Dog's heart", "author": "M.Bulgakov"}
];

export const getAllBooks = (req, res) => {
    //Get all books
    if (books){
        res.send(books)
    } else {
        res.sendStatus(404)
    }
    
}

export const addBook = (req, res) => {
    //Create a new book with a JSON request body
    const id = books.length
    const { title, author } = req.body

    if (title && author){
        books.push({"id": id, "title": title, "author": author})
        res.status(200).json(books[id])

    } else {
        res.sendStatus(400)
    }
    
}

export const updateBook = (req, res) => {
    //Update a book by ID with a JSON request body
    const id = +req.params.id //id from params comes as a string
    const { title, author } = req.body
    const book = books.find(b => b.id === id)
    if (book){
        console.log(book)
        if (title){
            book.title = title
        }
    
        if (author){
            book.author = author
        }
        res.status(200).json(book)
    } else {
        res.sendStatus(404)
    }
    
}

export const deleteBook = (req, res) => {
    //Delete a book by ID
    const id = +req.params.id //id from params comes as a string
    const index = books.findIndex(b => b.id === id)
    if (index !== -1){
        books.splice(index, 1)
        res.status(200).json("book deleted")

    } else {
        res.sendStatus(404)
    }
    
}