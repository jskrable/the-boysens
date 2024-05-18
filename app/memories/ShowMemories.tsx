'use client';

import { Button } from '@/app/components/button';
import { Memory } from '@/app/components/memory';
import type { Memory as IMemory } from '@/db/prisma';
import { clsx } from 'clsx';
import { useCallback, useEffect, useState } from 'react';

interface ShowMemoriesProps {
  data: IMemory[];
}

function ShowMemories({ data }: ShowMemoriesProps) {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [showTop, setShowTop] = useState(false);

  const onScroll = useCallback(() => {
    if (!showTop && window.scrollY >= 150) setShowTop(true);
    if (showTop && window.scrollY === 0) setShowTop(false);
  }, [showTop]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  console.log({ showTop });
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
      <div
        className={clsx({
          'fixed bottom-3 right-3 md:bottom-6 md:right-6 z-50 opacity-70 hover:opacity-100': true,
          invisible: !showTop,
          visible: showTop,
        })}
      >
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</Button>
      </div>
    </div>
  );
}

export { ShowMemories };
