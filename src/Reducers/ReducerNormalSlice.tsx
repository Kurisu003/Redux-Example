// Sets up reducer for normal slice to fetch Users from API
import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit/'
import {user} from '../Types/types'

export const userSlice = createSlice({
    name: 'user',
    initialState: [] as user[],
    reducers: {
        // Creates CRUD operations for user
        addUser: (state, action: PayloadAction<user>) => {
            state.push(action.payload)
        },
        addUsers: (state, action: PayloadAction<user[]>) => {
            state.push(...action.payload)
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)

        },
        removeUsers: (state, action: PayloadAction<number[]>) => {
            action.payload.forEach(id => {
                state.splice(id, 1)
            })
        },
        updateUser: (state, action: PayloadAction<user>) => {
            state[action.payload.id] = action.payload
        },
        updateUsers: (state, action: PayloadAction<user[]>) => {
            action.payload.forEach(user => {
                state[user.id] = user
            }
            )
        },
        clearUsers: (state) => {
            state = []
        }
    }
})

// exports all the possible Actions for the userSlice
export const { addUser, addUsers, removeUser, removeUsers, updateUser, updateUsers, clearUsers } = userSlice.actions;