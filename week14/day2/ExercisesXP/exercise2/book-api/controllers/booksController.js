import { getAllBooksFromDB, getBookByIdFromDB, addBookToDB } from '../model/booksModel.js';

export const getAllBooks = (req, res) => {
    getAllBooksFromDB() // DB queries return promises
      .then(data => {
        res.json(data.rows);
      })
      .catch(e => {
        console.log(e);
        res.status(404).json({ message: "No books found" });
      });
};

export const getBookById = (req, res) => {
  const id = req.params.id
  getBookByIdFromDB(id)
  .then(data => {
    res.status(200).json(data.rows);
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({ message: "Book not found" });
  });
}

export const addBook = (req, res) => {
  const { title, author, publishedYear } = req.body
  addBookToDB(title, author, publishedYear)
  .then(data => {
    res.status(200).json(data.rows);
  })
  .catch(e => {
    console.log(e);
    res.status(500).json({ message: "Book not created" });
  });
}
