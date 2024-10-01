import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',

    initialState: {
        loginPageShow: false,
        loginState: false,
        accessToken: null,
        refreshToken:null
    },
    reducers: {
        // 로그인 화면 보이는지 여부
        toggleLoginPage: (state, action) => {
            state.loginPageShow = action.payload;
        },
        //로그인 상태 여부
        toggleLoginState: (state, action) => {
            state.loginState = action.payload;
        },
        toggleAccessToken:(state, action) => {
            state.accessToken = action.payload;
        },
        toggleRefreshToken:(state, action) => {
            state.refreshToken = action.payload;
        },       
    }
});

export const { toggleLoginPage, toggleLoginState, toggleAccessToken, toggleRefreshToken } = loginSlice.actions;
export default loginSlice.reducer;