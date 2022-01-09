import { createSlice } from '@reduxjs/toolkit'

export const collectionsMetaSlice = createSlice({
    name: 'collectionsMetas',
    initialState: {
        metas: [],
    },
    reducers: {
        add: (state, action) => {
            state.metas = state.metas.concat(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { add } = collectionsMetaSlice.actions

export default collectionsMetaSlice.reducer
