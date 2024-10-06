import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',

    initialState: {
        showUI: false
    },
    reducers: {
        toggleAlertUI: (state) => {
            state.showUI = !state.showUI
        }   
    }
});

export const { toggleAlertUI } = alertSlice.actions;
export default alertSlice.reducer;