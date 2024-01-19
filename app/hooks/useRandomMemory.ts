import { prisma } from '@/db/client';

function useRandomMemory() {
  const getRandomMemory = async () => {
    const rows = await prisma.memory.count();
    const random = Math.floor(Math.random() * rows);
    return prisma.memory.findFirst({ skip: random });
  };
  return { getRandomMemory };
}

export { useRandomMemory };
