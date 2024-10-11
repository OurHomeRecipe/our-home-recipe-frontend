import { createSlice } from "@reduxjs/toolkit";

interface searchItem {
    searchType: string;
    searchContent: string;
}

const initialState: searchItem = {
    searchType: 'name',
    searchContent: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearchType: (state, action) => {
            state.searchType = action.payload;
        },
        toggleSearchContent: (state, action) => {
            state.searchContent = action.payload;
        }
    }
})

export const { toggleSearchType, toggleSearchContent } = searchSlice.actions;
export default searchSlice.reducer;