import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userCode: 0,
        userType: ""
    },
    reducers: {
        setUserCode: (state, action) => { //Function to set the userCode to distinguish between customer
            state.userCode = action.payload;
        },
        setUserType: (state, action) => { //Function to set the type of an user to determine if the admin mode should be turned on
            state.userType = action.payload;
        }
    }
})

export const {setUserCode} = userSlice.actions;
export const {setUserType} = userSlice.actions;

export default userSlice.reducer;