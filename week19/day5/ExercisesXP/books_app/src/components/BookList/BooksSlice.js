import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
    books: [
        { id: 1, title: "The Haunting", author: "John Smith", genre: "horror" },
        { id: 2, title: "A Dream of Stars", author: "Alice Johnson", genre: "sciencefiction" },
        { id: 3, title: "The Witch's Curse", author: "Sarah Lee", genre: "horror" },
        { id: 4, title: "Mystic Realms", author: "Robert Brown", genre: "fantasy" },
        { id: 5, title: "Space Odyssey", author: "David Miller", genre: "sciencefiction" },
        { id: 6, title: "Blood Moon", author: "Emily Clark", genre: "horror" },
        { id: 7, title: "The Enchanted Forest", author: "Jessica Adams", genre: "fantasy" },
        { id: 8, title: "Alien Invasion", author: "Peter Harris", genre: "sciencefiction" },
        { id: 9, title: "The Dark Woods", author: "Michael Roberts", genre: "horror" },
        { id: 10, title: "Kingdoms of Magic", author: "Rachel Evans", genre: "fantasy" }
    ],
    genre: 'all'
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setGenre: (state, action) => {
           state.genre = action.payload 
        }
    }
})

export const {setGenre} = booksSlice.actions
export default booksSlice.reducer