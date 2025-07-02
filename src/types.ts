export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "High" | "Medium" | "Low";
    assignTo: string | null;
}

export type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignTo">;

export interface IUser {
    id: string;
    name: string;
}
