import getTasks from "@/features/task/queries/get-tasks";
import TaskItem from "./task-item";
export default async function TaskList () {
    const tasks = await getTasks();

    // if tasks are empty display a message
    if (tasks.length === 0) {
        return <div className="flex-1 flex-col flex items-center">No tasks found.</div>;
    }

    return (
        <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top m-y-10">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} isDetail={false} />
            ))}
        </div>
    )
}