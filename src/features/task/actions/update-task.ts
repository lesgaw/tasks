"use server";

import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { tasksPath } from "@/paths";

export async function updateTask(formData: FormData) {
    const data = {
        id: formData.get("id") as string,
        title: formData.get("title") as string,
        project: formData.get("project") as string,
        description: formData.get("description") as string,
        status: formData.get("status") as TaskStatus,
    };

    await prisma.task.update({
        where: {
            id: data.id
        },
        data: {
            title: data.title,
            project: data.project,
            description: data.description,
            status: data.status,
        }
    });

    revalidatePath(tasksPath());
    redirect(tasksPath());
} 