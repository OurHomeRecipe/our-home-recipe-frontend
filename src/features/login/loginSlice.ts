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
        toggleLoginToken: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        }
        
    }
});

export const { toggleLoginPage, toggleLoginState, toggleLoginToken } = loginSlice.actions;
export default loginSlice.reducer;