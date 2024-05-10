import type { Memory } from '@/db/prisma';
import { PageTitle } from '@/app/components/pageTitle';
import { AddMemory } from '@/app/memories/AddMemory';
import { prisma } from '@/db/client';
import { cache, useOptimistic } from 'react';
import { ShowMemories } from './ShowMemories';
import { createMemory } from './actions';

// TODO try useOptimistic? Fetch Memories on scroll?
export default async function Page() {
  let data: Memory[] = [];
  const getData = cache(async () => {
    return prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });
  });

  data = await getData();

  // const [optimisticData, addOptimisticData] = useOptimistic<Memory[]>(data, (state: Memory[], newMemory: string) => [
  //   ...state,
  //   { entry: { createdAt: new Date(), entry: newMemory } },
  // ]);

  // const [optimisticMemories, addOptimisticMemory] = useOptimistic<Memory[]>(data, (state) => state);

  return (
    <>
      <PageTitle title="Memories" />
      <AddMemory onSubmit={createMemory} />
      <ShowMemories data={data} />
    </>
  );
}
