import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './Users/usersSlice'
import postsSlice from './Posts/postsSlice'
import postsItemSlice from './PostsItem/postsItemSlices'
import usersInfoSlice from './UsersInfo/usersInfoSlice'
import todosSlice from './Todos/todosSlice'




export const store = configureStore({
    reducer: {
        users: usersSlice,
        posts: postsSlice,
        todos: todosSlice,
        postsItem: postsItemSlice,
        usersInfo: usersInfoSlice,
    }
})