import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: null,
}

export const getPosts = createAsyncThunk("postsSlice/getPosts", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data
})

const postsSlices = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }

})

export default postsSlices.reducer