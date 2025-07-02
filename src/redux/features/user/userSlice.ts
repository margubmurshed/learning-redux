import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    users: IUser[]
}

const initialState: InitialState = {
    users: []
};

const createUser = (name: string) => {
    return {
        id: nanoid(),
        name
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = createUser(action.payload);
            state.users.push(user);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
    }
})

export const selectUsers = (state: RootState) =>  state.user.users;

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;