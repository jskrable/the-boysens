import type { Memory } from '@/db/prisma';
import { PageTitle } from '@/app/components/pageTitle';
import { AddMemory } from '@/app/memories/AddMemory';
import { prisma } from '@/db/client';
import { cache } from 'react';
import { ShowMemories } from './ShowMemories';
import { createMemory } from './actions';

// TODO try useOptimistic? Fetch Memories on scroll?
export default async function Page() {
  let data: Memory[] = [];
  const getData = cache(async () => {
    return prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });
  });

  data = await getData();

  return (
    <>
      <PageTitle title="Memories" />
      <AddMemory onSubmit={createMemory} />
      <ShowMemories data={data} />
    </>
  );
}
