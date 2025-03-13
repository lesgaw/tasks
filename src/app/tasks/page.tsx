import {Suspense} from "react";
import TaskList from "@/features/task/components/task-list";
import Spinner from "@/components/spinner";
import CardCompact from "@/components/card-compact";
import TaskUpsertForm from "@/features/task/components/task-upsert-form";

export default function TasksPage() {
    return (
        <div className="flex-1 flex flex-col gap-y-8">

            {/* Create Task Card with form */}
            <CardCompact 
            title="Create Task" 
            content={<TaskUpsertForm />} 
            className="w-full max-w-[420px] self-center"
            />
            {/* Task List */}
            <div className="animate-fade-from-top">
                <Suspense fallback={<Spinner />}>
                    <TaskList />
                </Suspense>
            </div>
        </div>
    );
}
