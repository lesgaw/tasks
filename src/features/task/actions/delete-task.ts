"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { tasksPath } from "@/paths";
import { redirect } from "next/navigation";

export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath(tasksPath());
  redirect(tasksPath());
}