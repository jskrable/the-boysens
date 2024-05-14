'use client';

import { Button } from '@/app/components/button';
import { Memory } from '@/app/components/memory';
import type { Memory as IMemory } from '@/db/prisma';
import { useState } from 'react';

interface ShowMemoriesProps {
  data: IMemory[];
}

function ShowMemories({ data }: ShowMemoriesProps) {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((memory, idx) => {
          const { id } = memory;
          if (id === selected)
            return (
              <div key={memory.id} className="md:col-span-2 lg:col-span-3 bg-slate-100 shadow-lg rounded-md">
                <Memory memory={memory} />
              </div>
            );
          return (
            <div
              id={id.toString()}
              key={id}
              onClick={() => setSelected(id)}
              onKeyUp={(e) => {
                console.log(e);
                if (e.key === 'Enter') setSelected(id);
              }}
              tabIndex={idx}
              className="grow border-2 border-slate-300 rounded-md p-2 hover:bg-slate-200"
            >
              {`${memory.entry.slice(0, 50)}...`}
            </div>
          );
        })}
      </div>
      <div className="py-8 text-center">
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</Button>
      </div>
    </div>
  );
}

export { ShowMemories };
