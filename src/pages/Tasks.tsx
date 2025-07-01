import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold mb-3">Tasks</h2>
                <AddTaskModal />
            </div>
            <div className="space-y-3">
                {tasks.map(task => <TaskCard task={task} key={task.id}/>)}
            </div>
        </div>
    );
};

export default Tasks;