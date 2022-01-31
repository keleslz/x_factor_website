import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        modal : {
            isOpen : false,
            isConnected : false,
        }
    },
    reducers: {
        open: (state) => {
            state.modal.isOpen = true;
        },
        close : (state) => {
            state.modal.isOpen = false;
        },
        connect : (state) => {
            state.modal.isConnected = true;
        },
        disconnect : (state) => {
            state.modal.isConnected = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { open, close, connect, disconnect } = walletSlice.actions

export default walletSlice.reducer
