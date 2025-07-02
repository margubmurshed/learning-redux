import type { RootState } from "@/redux/store";
import type { DraftTask, ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}
const initialState: InitialState = {
    tasks: []
};

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
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if(index > -1){
                state.tasks[index] = action.payload;
            }
        }
    }
})

export const selectTasks = (state: RootState) => state.todo.tasks;

export const {addTask, toggleCompletedState, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;