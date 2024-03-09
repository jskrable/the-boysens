'use client';

import { Button } from '@/app/components/button';
import { Memory } from '@/app/components/memory';
import { Memory as IMemory } from '@/db/prisma';

interface ShowMemoriesProps {
  data: IMemory[];
}

function ShowMemories({ data }: ShowMemoriesProps) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {data.map((memory) => (
          <Memory key={memory.id} memory={memory} />
        ))}
      </div>
      <div className="py-8 text-center">
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</Button>
      </div>
    </div>
  );
}

export { ShowMemories };
