import { db } from '../config/db.js';

export const getAllBooksFromDB = () => {
    return db.raw("SELECT id, title, author, publishedYear from books");
};

export const getBookByIdFromDB = (id) => {
    return db.raw("SELECT id, title, author, publishedYear FROM books WHERE id = ?", [id]);
};

export const addBookToDB = (title, author, publishedYear) => {
    if (!title || !author || !publishedYear) {
        throw new Error("All fields (title, author, and publishedYear) are required.");
    }
    return db.raw(
      "INSERT INTO books (title, author, publishedYear) VALUES (?, ?, ?) RETURNING *",
      [title, author, publishedYear]
    );
  };
  
