import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface sampleType {
    sampleData: string;
}

const initialState:sampleType = {
    sampleData: "test"
}

export const sampleSlice = createSlice({
    name: "sample",
    initialState,
    reducers: {
        sampleInit: (state: sampleType) => {
            let sampleData: string = "initSample";

            state.sampleData = sampleData;
        },
        changeSampleData: (state: sampleType, action: PayloadAction<string>) => {
            state.sampleData = action.payload
        }
    }
})

export const { sampleInit, changeSampleData } = sampleSlice.actions;
export default sampleSlice.reducer;