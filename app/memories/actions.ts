'use server';

import { prisma } from '@/db/client';
import { revalidatePath } from 'next/cache';

async function createMemory(entry: string) {
  try {
    await prisma.memory.create({ data: { entry } });
    revalidatePath('/memories');
    return;
  } catch (e) {
    console.error('createMemory error > ', e);
    return 'Error saving memory, please try again';
  }
}

export { createMemory };
