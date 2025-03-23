import React from 'react'
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../../redux/selectors';

export default function BookList() {
    const books = useSelector(state => state.books)
    const horrorBooks = useSelector(selectHorrorBooks)
    const fantasyBooks = useSelector(selectFantasyBooks)
    const scienceFictionBooks = useSelector(selectScienceFictionBooks)
    const genre = useSelector(state => state.genre)

    let currentBooks = books
    if (genre === 'horror') currentBooks = horrorBooks
    if (genre === 'fantasy') currentBooks = fantasyBooks
    if (genre === 'sciencefiction') currentBooks = scienceFictionBooks

    return (
        <div className='booksList'>
            {currentBooks && currentBooks.map(book => {
                return (
                    <div key={book.id}>
                        <h4>{book.title}</h4> <span>by {book.author}</span>
                        <p><small>{book.genre}</small></p>
                        <hr />
                    </div>
                )
            })}
            {!currentBooks || !currentBooks.length &&
                <div>this category is empty</div>
            }
        </div>
    )
}
