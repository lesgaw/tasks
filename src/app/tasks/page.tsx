import {Suspense} from "react";
import TaskList from "@/features/task/components/task-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/spinner";
import TaskCreateForm from "@/features/task/components/task-create-form";
import CardCompact from "@/components/card-compact";


export default function TasksPage() {
    return (
        <div className="flex-1 flex flex-col gap-y-8">

            {/* Create Task Card with form */}
            <CardCompact 
            title="Create Task" 
            content={<TaskCreateForm />} 
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
