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
        }
    ]
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;