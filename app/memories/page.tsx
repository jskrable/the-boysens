import { PageTitle } from '@/app/components/pageTitle';
import { AddMemory } from '@/app/memories/AddMemory';
import { prisma } from '@/db/client';
import { ShowMemories } from './ShowMemories';

export default async function Page() {
  const data = await prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });

  async function createMemory(entry: string) {
    'use server';
    try {
      const result = await prisma.memory.create({ data: { entry } });
      // TODO figure out how to toss this into the cached data
      // console.log(result);
      // data.push(result);
      return;
    } catch (e) {
      console.error('createMemory error > ', e);
      return (e as Error).message;
    }
  }

  return (
    <div>
      <PageTitle title="Memories" />
      <AddMemory onSubmit={createMemory} />
      <ShowMemories data={data} />
    </div>
  );
}
