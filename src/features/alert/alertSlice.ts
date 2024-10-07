import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',

    initialState: {
        showUI: false,
        alertSeverity: '',
        alertMessage: ''
    },
    reducers: {
        toggleAlertUI: (state) => {
            state.showUI = !state.showUI
        },
        toggleAlertServerity: (state,action) => {
            state.alertSeverity = action.payload;
        },
        toggleAlertMessage: (state,action) => {
            state.alertMessage = action.payload;
        },
    }
});

export const { toggleAlertUI, toggleAlertServerity, toggleAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;