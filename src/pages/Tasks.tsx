import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { UpdateTaskModal } from "@/components/module/tasks/UpdateTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterTask, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types";
import { useState } from "react";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();
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
                <div className="flex items-center gap-3">
                    <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all" onClick={() => dispatch(filterTask("all"))}>All</TabsTrigger>
                        <TabsTrigger value="low" onClick={() => dispatch(filterTask("low"))}>Low</TabsTrigger>
                        <TabsTrigger value="medium" onClick={() => dispatch(filterTask("medium"))}>Medium</TabsTrigger>
                        <TabsTrigger value="high" onClick={() => dispatch(filterTask("high"))}>High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
                </div>
            </div>
            <div className="space-y-3 grid grid-cols-3 gap-3 mt-5">
                {tasks.map(task => <TaskCard task={task} key={task.id} handleEditClick={handleEditClick} />)}
            </div>

            {selectedUpdateTask && <UpdateTaskModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} task={selectedUpdateTask} />}
        </div>
    );
};

export default Tasks;