import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersInfo: null,
}

export const getUsersInfo = createAsyncThunk("usersInfoSlice/getUsersInfo", async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json()
    return data
})

const usersInfoSlices = createSlice({
    name: 'usersInfoSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersInfo.fulfilled, (state, action) => {
            state.usersInfo = action.payload;
        })
    }

})

export default usersInfoSlices.reducer