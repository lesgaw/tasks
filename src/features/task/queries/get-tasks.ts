import { prisma } from "@/lib/prisma";

export default async function getTasks()  {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return tasks;
};
