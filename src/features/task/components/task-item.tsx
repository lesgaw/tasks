import clsx from "clsx";
import { Task } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { taskPath, taskEditPath } from "@/paths";
import { Button } from "@/components/ui/button";
import { LucideSquareArrowOutUpRight, LucideTrash2, LucidePencil } from "lucide-react";
import { deleteTask } from "../actions/delete-task";

type TaskItemProps = {
    task: Task;
    isDetail?: boolean;
}

export default function TaskItem({task, isDetail = true,} : TaskItemProps ) {
    const detailButton = (
        <Link href={taskPath(task.id)}>
            <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                <LucideSquareArrowOutUpRight className="w-4 h-4" />
            </Button>
        </Link>
    )

    const editButton = (
        <Link href={taskEditPath(task.id)} prefetch>
            <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                <LucidePencil className="w-4 h-4" />
            </Button>
        </Link>
    )

    const deleteButton = (
        <form action={deleteTask.bind(null, task.id)}>
            <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                <LucideTrash2 className="w-4 h-4" />
            </Button>
        </form>
    )

    return (
        <div className={clsx('w-full flex gap-x-1', {
            'max-w-[580px]': isDetail,
            'max-w-[420px]': !isDetail,
        })}>
            <Card key={task.id} className="w-full dark:bg-stone-900">
                <CardHeader>
                    <CardTitle>
                        {task.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx('whitespace-break-spaces text-sm', {
                        'line-clamp-3': !isDetail,
                    })}>
                        {task.description}
                    </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="text-xs">{task.project}</div>
                    <div className="lowrcase text-xs">{task.status}</div>
                </CardFooter>
            </Card>
            <div className="flex flex-col items-start">
                {isDetail ? (
                    <>
                      {editButton}
                    {deleteButton}
                    </>
                ) : (
                    <>
                        {detailButton}
                        {editButton}
                    </>
                )}
            </div>
        </div>
    )
}