import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'Title',
        author: 'Author',
        release_date: 'Release Date',
        length: 'Length',
        isbn: 'ISBN'
    },
    reducers: {
        chooseTitle: ( state, action ) => { state.title = action.payload },
        chooseAuthor: ( state, action ) => { state.author = action.payload },
        chooseReleaseDate: ( state, action ) => { state.release_date = action.payload },
        chooseLength: ( state, action ) => { state.length = action.payload },
        chooseISBN: ( state, action ) => { state.isbn = action.payload }

    }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseReleaseDate, chooseLength, chooseISBN } = rootSlice.actions;