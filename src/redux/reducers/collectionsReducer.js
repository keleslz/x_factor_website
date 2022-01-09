import { createSlice } from '@reduxjs/toolkit'

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        items: [],
    },
    reducers: {
        add: (state, action) => {
            state.items = state.items.concat(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { add } = collectionsSlice.actions

export default collectionsSlice.reducer
