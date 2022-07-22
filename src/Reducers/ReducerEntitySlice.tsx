import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { todo } from "../Types/types";

// Entire reducer can be exported to access all the functionality of the slice
export const todoAdapter = createEntityAdapter<todo>();

export const todoSlice = createSlice({
    name: "todo",
    initialState: todoAdapter.getInitialState(),
    reducers: {
        // For documentation, see:
        // https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions

        // Adds Slice(s)
        addTodo: todoAdapter.addOne,
        addTodos: todoAdapter.addMany,
        
        // Removes Slice(s)
        removeTodo: todoAdapter.removeOne,
        removeTodos: todoAdapter.removeMany,
        
        // Updates Slice(s) ==> completly overwrites the old one
        updateTodo: todoAdapter.updateOne,
        updateTodos: todoAdapter.updateMany,
        
        // Upserts Slice(s) ==> updates the old one or adds a new one
        upsertTodo: todoAdapter.upsertOne,
        upsertTodos: todoAdapter.upsertMany,
        
        // sets entire state
        setTodos: todoAdapter.setAll,
    },
})