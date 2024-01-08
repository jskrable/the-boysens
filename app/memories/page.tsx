import { prisma } from '@/db/client';
import { Memory } from '@/app/components/memory';
import { PageTitle } from '@/app/components/pageTitle';

export default async function Page() {
  const data = await prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <PageTitle title='Memories' />
      <div className='flex flex-col gap-4'>
        {data.map((memory) => <Memory memory={memory}/>)}
      </div>
    </div>
  );
}
