"use server";

import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { tasksPath } from "@/paths";

export const upsertTask = async (id: string | undefined, formData: FormData) => {
    const data = {
        title: formData.get("title") as string,
        project: formData.get("project") as string,
        description: formData.get("description") as string,
        status: formData.get("status") as TaskStatus,
    };

    await prisma.task.upsert({
        where: {
            id: id || ""
        },
        update: data,
        create: data,
    });

    revalidatePath(tasksPath());

    // Redirect to the task detail page after an update    
    if (id) {
        redirect(tasksPath());
    }
}

export default upsertTask;