import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import createTask from "../actions/create-task";



const TaskCreateForm = () => {

    

    return (
        <form action={createTask} className="flex flex-col space-y-2 w-full max-w-xl">
            <div className="space-y-1">
                <Label htmlFor="title" className="text-sm font-light">Title</Label>
                <Input id="title" name="title" type="text" />
            </div>
            
            <div className="space-y-1">
                <Label htmlFor="project" className="text-sm font-light">Project</Label>
                <Select name="project" required>
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
                <Textarea id="description" name="description" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="status" className="text-sm font-light">Status</Label>
                <Select name="status" defaultValue="OPEN">
                    <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="OPEN">Open</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        <SelectItem value="WAITING">Waiting</SelectItem>
                        <SelectItem value="COMPLETED">Completed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button type="submit" className="w-full bg-black text-white dark:bg-amber-500 dark:text-black hover:bg-black">Create Task</Button>
        </form>
    )
}

export default TaskCreateForm