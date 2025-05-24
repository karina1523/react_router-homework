import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
}

export const getUsers = createAsyncThunk("usersSlice/getUsers", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return data
})

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }

})

export default usersSlice.reducer