import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',

    initialState: {
        profileImage: '',
        nickname: '',
        name: '',
        email: '',
        phoneNumber: '',
        introduce: ''
    },
    reducers: {
        toggleSetProfile: (state, action) => {
            console.log(action);
        }
    }
})

export const {toggleSetProfile} = profileSlice.actions;
export default profileSlice.reducer;