import type { RootState } from "@/redux/store";
import type { DraftTask, ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "low" | "medium" | "high";
}
const initialState: InitialState = {
    tasks: [],
    filter: "all"
};

const createTask = (taskData: DraftTask) => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignTo: taskData.assignTo || null
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
        },
        filterTask: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            state.tasks.forEach(task => {
                if(task.assignTo === action.payload){
                    task.assignTo = null;
                }
            })
        })
    }
})

export const selectTasks = (state: RootState) => {
    if(state.todo.filter === "all") return state.todo.tasks;
    else if(state.todo.filter === "low") return state.todo.tasks.filter(task => task.priority === "Low")
    else if(state.todo.filter === "medium") return state.todo.tasks.filter(task => task.priority === "Medium")
    else if(state.todo.filter === "high") return state.todo.tasks.filter(task => task.priority === "High")
    else return state.todo.tasks;
};

export const {addTask, toggleCompletedState, deleteTask, updateTask, filterTask} = taskSlice.actions;

export default taskSlice.reducer;