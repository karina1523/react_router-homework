import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: null,
}

export const getTodos = createAsyncThunk("todosSlice/getTodos", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json()
    return data
})

const todosSlices = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
    }

})

export default todosSlices.reducer