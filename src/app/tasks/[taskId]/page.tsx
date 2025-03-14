import TaskItem from "@/features/task/components/task-item";
import { getTask } from "@/features/task/queries/get-task";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Placeholder from "@/components/placeholder";
import { tasksPath } from "@/paths";

type TaskPageProps = {
    params: Promise<{ taskId: string }>;
}

export default async function TaskPage({ params }: TaskPageProps) {
    const { taskId } = await params;
    const task = await getTask(taskId);

    if (!task) {
        return (
            <Placeholder 
                label="Task not found" 
                button={
                    <Button asChild variant="outline">
                        <Link href={tasksPath()}>
                            Go To Tasks
                        </Link>
                    </Button>
                }
            />
        );
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TaskItem task={task} isDetail={true} />
        </div>
    );
}