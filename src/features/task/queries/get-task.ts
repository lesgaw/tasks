import { prisma } from '@/lib/prisma';

export async function getTask(id: string) {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
}
