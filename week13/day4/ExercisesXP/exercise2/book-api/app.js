import express from 'express'

let books = [
    { 'id': 1, 'title': 'The Catcher in the Rye', 'author': 'J.D. Salinger', 'publishedYear': 1951 },
    { 'id': 2, 'title': 'To Kill a Mockingbird', 'author': 'Harper Lee', 'publishedYear': 1960 },
    { 'id': 3, 'title': '1984', 'author': 'George Orwell', 'publishedYear': 1949 },
    { 'id': 4, 'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'publishedYear': 1925 }
  ];

  const app = express()
//get all books 
  app.get('/api/books', (req, res) => {
    res.json(books)
  })

  //get book by id
  app.get('/api/books/:bookId', (req, res) => {
    const bookId = req.params.bookId
    const book = books.find(b => b.id === +bookId)
    if (book){
        res.status(200).json({ status: 'OK', data: book });
    } else {
        res.status(404).json({ status: 'Book not found' })
    }
    
  })

//todo  Implement the “Create” route at POST /api/books. 
// Use the express.json() middleware to parse JSON body 
// content. Inside the route handler, create a new book 
// object with an incremented ID and the data from the request body. 
// Add the new book to the books array and return a JSON response with 
// the new book and a status code of 201 (Created).

  app.listen(5000, () => {
    console.log('server is running..')
  })