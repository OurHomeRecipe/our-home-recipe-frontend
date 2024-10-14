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
        toggleSearchName: (state, action) => {
            state.searchName = action.payload;
        },
        toggleSearchNickname: (state, action) => {
            state.searchNickname = action.payload;
        }
    }
})

export const { toggleSearchType, toggleSearchName, toggleSearchNickname  } = searchSlice.actions;
export default searchSlice.reducer;