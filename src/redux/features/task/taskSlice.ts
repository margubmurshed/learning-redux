import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}
const initialState: InitialState = {
    tasks: []
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask) => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<ITask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompletedState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach(task => {
                if(task.id === action.payload){
                    task.isCompleted = !task.isCompleted;
                }
            })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const selectTasks = (state: RootState) => state.todo.tasks;

export const {addTask, toggleCompletedState, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;