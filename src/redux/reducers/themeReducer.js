import { createSlice } from '@reduxjs/toolkit'

const white = 'white';
const black = 'black';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        actual : 'dark',
        text : `text-${white}`,
        bg : `bg-${black}`,
    },
    reducers: {
        dark: (state) => {
            state.text = `text-${white}`;
            state.bg = `bg-${black}`
            state.actual = 'dark';
        },
        light : (state) => {
            state.text = `bg-${white}`;
            state.bg = `text-${black}`;
            state.actual = 'light';
        },
    }
})

// Action creators are generated for each case reducer function
export const { dark, light } = themeSlice.actions

export default themeSlice.reducer
