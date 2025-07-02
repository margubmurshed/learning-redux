import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteTask, toggleCompletedState } from "@/redux/features/task/taskSlice";
import { Pencil, Trash2 } from "lucide-react";
import { selectUsers } from "@/redux/features/user/userSlice";

interface TaskCardProps {
    task: ITask,
    handleEditClick: (task: ITask) => void;
}

const TaskCard = ({ task, handleEditClick }: TaskCardProps) => {
    const users = useAppSelector(selectUsers)
    const user = users.find(user => user.id === task.assignTo);
    const dispatch = useAppDispatch();
    return (
        <Card className="w-full h-fit shadow-md border border-gray-200">
            <CardHeader className="flex flex-row justify-between items-start gap-4">
                <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Checkbox className="mr-2" onClick={() => dispatch(toggleCompletedState(task.id))} checked={task.isCompleted} />
                        <h1 className={cn({ "line-through": task.isCompleted })}>{task.title}</h1>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    {user && <p className="text-sm text-muted-foreground">Assigned to : {user.name}</p>}
                </div>
                <div className="flex items-center gap-3">
                    <Badge
                        className={cn("text-xs", {
                            "bg-red-500": task.priority === "High",
                            "bg-yellow-500": task.priority === "Medium",
                            "bg-gray-500": task.priority === "Low",
                        })}
                    >
                        {task.priority}
                    </Badge>
                    <Trash2 size="20px" onClick={() => dispatch(deleteTask(task.id))} />
                    <Pencil size="20px" onClick={() => handleEditClick(task)} />
                </div>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground flex justify-between">
                <span>Due: {task.dueDate}</span>
                <span className={task.isCompleted ? "text-green-600" : "text-yellow-600"}>
                    {task.isCompleted ? "Completed" : "Pending"}
                </span>
            </CardContent>
        </Card>
    );
};

export default TaskCard;