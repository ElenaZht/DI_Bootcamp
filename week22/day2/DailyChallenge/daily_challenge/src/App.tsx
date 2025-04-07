import { useRef, useState } from 'react'
import './App.css'
import List from './List'

export type Book = {
  id: number,
  title: string,
  author: string
}

//   { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { id: 2, title: "1984", author: "George Orwell" },
//   { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
//   { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
//   { id: 6, title: "Moby-Dick", author: "Herman Melville" },
//   { id: 7, title: "War and Peace", author: "Leo Tolstoy" },
//   { id: 8, title: "The Odyssey", author: "Homer" },
//   { id: 9, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
//   { id: 10, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" }

const entryName: string = 'books'

const renderBooks = (book: Book): React.ReactNode => {
  return <div key={book.id}>
    <h3>{book.title}</h3>
    <p>by {book.author}</p>
    <hr />
  </div>
}

function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    
  ])

  const titleRef = useRef<HTMLInputElement>(null)
  const authorRef = useRef<HTMLInputElement>(null)


  const addEntry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (titleRef.current && authorRef.current){
      const title: string = titleRef.current.value
      const author: string = authorRef.current.value

      if (title && author){
        setBooks(
          [...books,
          {
            id: Date.now(),
            title: title,
            author: author
          }]
        )
      }
    }  
   
  }

  return (
    <>
      <form onSubmit={(e) => addEntry(e)}>
        <label htmlFor="title">title: </label>
        <input ref={titleRef} type="text" name='title'/>
        <label htmlFor="author">author: </label>
        <input ref={authorRef} type="text" name='author'/>
        <button type='submit' >Add book</button>
      </form>
      <List entries={books} entryName={entryName} renderItem={renderBooks}/>
    </>
  )
}

export default App
