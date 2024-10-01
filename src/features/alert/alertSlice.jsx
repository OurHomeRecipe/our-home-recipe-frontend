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
        // // 로그인 화면 보이는지 여부
        // toggleLoginPage: (state, action) => {
        //     state.loginPageShow = action.payload;
        // },
        // //로그인 상태 여부
        // toggleLoginState: (state, action) => {
        //     state.loginState = action.payload;
        // },
        // toggleAccessToken:(state, action) => {
        //     state.accessToken = action.payload;
        // },
        // toggleRefreshToken:(state, action) => {
        //     state.refreshToken = action.payload;
        // },       
    }
});

export const { toggleAlertUI } = alertSlice.actions;
export default alertSlice.reducer;