import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}
const initialState: InitialState = {
    tasks: [
        {
            id: "1",
            title: "Make ecommerce website",
            description: "Make using wordpress and elementor",
            dueDate: "2025-7-15",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "2",
            title: "Make landing page",
            description: "Make using wordpress and elementor",
            dueDate: "2025-7-15",
            isCompleted: false,
            priority: "Medium"
        },
        {
            id: "3",
            title: "Fix firebase error",
            description: "Saudi Arabia project firebase error",
            dueDate: "2025-7-15",
            isCompleted: false,
            priority: "Low"
        }
    ]
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => state.todo.tasks;

export default taskSlice.reducer;