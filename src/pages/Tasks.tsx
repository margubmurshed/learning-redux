import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { UpdateTaskModal } from "@/components/module/tasks/UpdateTaskModal";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types";
import { useState } from "react";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedUpdateTask, setSelectedUpdateTask] = useState<ITask | null>(null);

    const handleEditClick = (task: ITask) => {
        setSelectedUpdateTask(task);
        setOpenEditModal(true);
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold mb-3">Tasks</h2>
                <AddTaskModal />
            </div>
            <div className="space-y-3">
                {tasks.map(task => <TaskCard task={task} key={task.id} handleEditClick={handleEditClick} />)}
            </div>

            {selectedUpdateTask && <UpdateTaskModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} task={selectedUpdateTask} />}
        </div>
    );
};

export default Tasks;