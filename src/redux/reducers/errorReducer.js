import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        value: '',
    },
    reducers: {
        basic: (state) => {
            state.value = 'An error was occured';
        }
    }
})

// Action creators are generated for each case reducer function
export const { basic, cancel } = errorSlice.actions

export default errorSlice.reducer
