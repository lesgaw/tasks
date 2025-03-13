import CardCompact from "@/components/card-compact";
import { getTask } from "@/features/task/queries/get-task";
import { notFound } from "next/navigation";
import TaskUpsertForm from "@/features/task/components/task-upsert-form";

type Props = {
    params: Promise<{ taskId: string }>;
}

const TaskEditPage = async ({ params }: Props) => {
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
                content={<TaskUpsertForm task={task} />}
            />
        </div>
    )
}

export default TaskEditPage;
