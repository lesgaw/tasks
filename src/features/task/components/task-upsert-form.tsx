"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Task, TaskStatus } from "@prisma/client";
import { upsertTask } from "../actions/upsert-task";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type TaskUpsertFormProps = {
    task?: Task;
}

const TaskUpsertForm = ({ task }: TaskUpsertFormProps) => {
    return (
        <form action={(formData) => upsertTask(task?.id, formData)} className="flex flex-col space-y-2 w-full">
            <input type="hidden" name="id" value={task?.id} />
            
            <div className="space-y-1">
                <Label htmlFor="title" className="text-sm font-light">Title</Label>
                <Input 
                    id="title" 
                    name="title" 
                    type="text"
                    defaultValue={task?.title}
                    required
                />
            </div>
            
            <div className="space-y-1">
                <Label htmlFor="project" className="text-sm font-light">Project</Label>
                <Select name="project" defaultValue={task?.project} required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Project" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Amber North">Amber North</SelectItem>
                        <SelectItem value="Sharp GA">Sharp GA</SelectItem>
                        <SelectItem value="PHWL">PHWL</SelectItem>
                        <SelectItem value="Atomic Architects">Atomic Architects</SelectItem>
                        <SelectItem value="Omecu">Omecu</SelectItem>
                        <SelectItem value="Grand Scale">Grand Scale</SelectItem>
                        <SelectItem value="Mentoring">Mentoring</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1">
                <Label htmlFor="description" className="text-sm font-light">Description</Label>
                <Textarea 
                    id="description" 
                    name="description"
                    defaultValue={task?.description}
                    required
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="status" className="text-sm font-light">Status</Label>
                <Select name="status" defaultValue={task?.status || TaskStatus.OPEN}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={TaskStatus.OPEN}>Open</SelectItem>
                        <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
                        <SelectItem value={TaskStatus.WAITING}>Waiting</SelectItem>
                        <SelectItem value={TaskStatus.COMPLETED}>Completed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button type="submit" className="w-full bg-black text-white dark:bg-amber-500 dark:text-black hover:bg-black">
                {task ? "Update Task" : "Create Task"}
            </Button>
        </form>
    )
} 

export default TaskUpsertForm;