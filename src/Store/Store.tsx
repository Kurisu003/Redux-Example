import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { apiSlice } from "../Reducers/ReducerApiSlice";
import { todoAdapter, todoSlice } from "../Reducers/ReducerEntitySlice";
import { userSlice } from "../Reducers/ReducerNormalSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        todos: todoSlice.reducer,
    },
    //used for API Slice
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export default store;

//! TYPES
//# getting TYPE of STATE
type RootState = ReturnType<typeof store.getState>;
//# getting TYPE of DISPATCH
type AppDispatch = typeof store.dispatch;

//! DISPATCH & SELECTOR
//# getting FUNCTION for DISPATCH
export const useAppDispatch = () => useDispatch<AppDispatch>();
//# getting FUNCTION for SELECTOR
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//! ENTITY ADAPTER
//# exports Selectors of Entity Adapter
// this is done here because the RootState is already defined here
// and the RootState is needed
export const todoSelectors = todoAdapter.getSelectors<RootState>(state => state.todos);
