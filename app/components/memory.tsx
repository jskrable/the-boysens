import type { Memory as MemoryEntity } from '@/db/prisma';
import { Typography } from './typography';

interface MemoryProps {
  memory: MemoryEntity;
}

function Memory({ memory }: MemoryProps) {
  return (
    <div id={memory.id.toString()} className="p-4 whitespace-pre-wrap">
      <Typography variant="body">{memory.entry}</Typography>
      <span className="block w-full text-xs text-right italic text-slate-800">
        {memory.createdAt.toLocaleDateString()}
      </span>
    </div>
  );
}

export { Memory };
