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
        }
    }
})

export const selectTasks = (state: RootState) => state.todo.tasks;

export const {addTask} = taskSlice.actions

export default taskSlice.reducer;