import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";

const TaskCard = ({ task }: { task: ITask }) => {
    return (
        <Card className="w-full max-w-md shadow-md border border-gray-200">
            <CardHeader className="flex flex-row justify-between items-start gap-4">
                <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Checkbox className="mr-2" />
                        {task.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                </div>
                <Badge
                    //   variant={task.priority === "High" ? "destructive" : "secondary"}
                    className={cn("text-xs", {
                        "bg-red-500": task.priority === "High",
                        "bg-yellow-500": task.priority === "Medium",
                        "bg-gray-500": task.priority === "Low",
                    })}
                >
                    {task.priority}
                </Badge>
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