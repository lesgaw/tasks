"use server";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import  {tasksPath} from "@//paths";

const createTask = async (formData: FormData) => {
    const data = {
        title: formData.get("title") as string,
        project: formData.get("project") as string,
        description: formData.get("description") as string,
        status: formData.get("status") as TaskStatus,
    }

    console.log(data);
    
    await prisma.task.create({
        data: {
            title: data.title,
            project: data.project,
            description: data.description,
            status: data.status,
        }
    });

    
    revalidatePath(tasksPath());
}

export default createTask;