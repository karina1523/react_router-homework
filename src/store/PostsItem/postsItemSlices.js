import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsItem: null,
}

export const getPostsItem = createAsyncThunk("postsItemSlice/getPostsItem", async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return data
})

const postsItemSlices = createSlice({
    name: 'postsItemSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsItem.fulfilled, (state, action) => {
            state.postsItem = action.payload;
        })
    }

})

export default postsItemSlices.reducer