import CardCompact from "@/components/card-compact";
import { getTask } from "@/features/task/queries/get-task";
import { notFound } from "next/navigation";
import TaskUpdateForm from "@/features/task/components/task-update-form";


type Props = {
    params: Promise<{ taskId: string }>;
}

export default async function TaskEditPage({ params }: Props) {
    const { taskId } = await params;
    const task = await getTask(taskId);

    if (!task) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact 
                title="Edit Task"
                className="w-full max-w-[420px]"    
                content={<TaskUpdateForm task={task} />}
            />
        </div>
    )
}
