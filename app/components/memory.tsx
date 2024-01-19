import { Memory as MemoryEntity } from '@/db/prisma';
import { Typography } from './typography';

interface MemoryProps {
  memory: MemoryEntity;
}

function Memory({ memory }: MemoryProps) {
  return (
    <div key={memory.id} className="border-2 rounded-lg p-2">
      <Typography variant="p">{memory.entry}</Typography>
      <span className="text-sm text-slate-500">{memory.createdAt.toLocaleDateString()}</span>
    </div>
  );
}

export { Memory };
