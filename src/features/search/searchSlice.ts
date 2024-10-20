import { createSlice } from "@reduxjs/toolkit";

interface searchItem {
    searchType: string;
    searchName: string;
    searchNickname: string;
}

const initialState: searchItem = {
    searchType: 'name',
    searchName: '',
    searchNickname: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearchType: (state, action) => {
            state.searchType = action.payload;
        },
        /** 검색타입이 레시피 일 때 검색 내용 */
        toggleSearchName: (state, action) => {
            state.searchName = action.payload;
        },
        /** 검색타입이 사용자 일 때 검색 내용 */
        toggleSearchNickname: (state, action) => {
            state.searchNickname = action.payload;
        }
    }
})

export const { toggleSearchType, toggleSearchName, toggleSearchNickname  } = searchSlice.actions;
export default searchSlice.reducer;