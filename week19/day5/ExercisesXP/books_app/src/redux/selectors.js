import { createSelector } from '@reduxjs/toolkit';

const selectAllBooks = (state) => state.books

export const selectHorrorBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'horror')
)

export const selectFantasyBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'fantasy')
)

export const selectScienceFictionBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'sciencefiction')
)