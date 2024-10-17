import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataUsers: [],
    dataUserSingle: [],
    tokenUser: ""
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDataUser: (state, action) => {
            state.dataUsers = action.payload
        },
        setTokenUser: (state, action) => {
            state.tokenUser = action.payload
            console.log(state.tokenUser);
        },
        setDataUserSingle: (state, action) => {
            state.dataUserSingle = action.payload;
        }
    }
})

export const { setDataUser, setTokenUser, setDataUserSingle } = usersSlice.actions

export default usersSlice.reducer