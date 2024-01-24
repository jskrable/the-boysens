import { Memory } from '@/app/components/memory';
import { PageTitle } from '@/app/components/pageTitle';
import { prisma } from '@/db/client';

export default async function Page() {
  const data = await prisma.memory.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <PageTitle title="Memories" />
      <div className="flex flex-col gap-4">
        {data.map((memory) => (
          <Memory key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
}
