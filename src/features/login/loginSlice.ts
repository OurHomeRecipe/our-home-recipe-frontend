import { createSlice } from "@reduxjs/toolkit";

interface loginItem {
    loginPageShow: boolean;  // 로그인 모달창 표시 여부
    loginState: boolean;     // 로그인 상태 여부
    accessToken: string;     // 액세스 토큰
    refreshToken: string;    // 리프레시 토큰
}

const initialState:loginItem = {
    loginPageShow: false,   // 로그인 모달창은 기본적으로 표시되지 않음
    loginState: false,      // 기본적으로 로그아웃 상태
    accessToken: '',        // 액세스 토큰 초기값
    refreshToken: ''        // 리프레시 토큰 초기값
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        /**
         * 로그인 페이지 표시 여부 토글
         * @param state - 현재 상태
         * @param action - 새로운 로그인 페이지 표시 상태 (true 또는 false)
         */
        toggleLoginPage: (state, action) => {
            state.loginPageShow = action.payload;  // 로그인 페이지 표시 상태 업데이트
        },
        /**
         * 로그인 상태 변경
         * @param state - 현재 상태
         * @param action - 새로운 로그인 상태 (true: 로그인, false: 로그아웃)
         */
        toggleLoginState: (state, action) => {
            state.loginState = action.payload;     // 로그인 상태 업데이트
        },
        /**
         * 액세스 토큰 업데이트
         * @param state - 현재 상태
         * @param action - 새로운 액세스 토큰
         */
        toggleAccessToken: (state, action) => {
            state.accessToken = action.payload;    // 액세스 토큰 저장
        },
        /**
         * 리프레시 토큰 업데이트
         * @param state - 현재 상태
         * @param action - 새로운 리프레시 토큰
         */
        toggleRefreshToken: (state, action) => {
            state.refreshToken = action.payload;   // 리프레시 토큰 저장
        },   
    }
});

export const { toggleLoginPage, toggleLoginState, toggleAccessToken, toggleRefreshToken } = loginSlice.actions;
export default loginSlice.reducer;