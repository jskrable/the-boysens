import { Memory as MemoryEntity } from '@/db/prisma';
import { Typography } from './typography';

interface MemoryProps {
  memory: MemoryEntity;
}

function Memory({ memory }: MemoryProps) {
  return (
    <div key={memory.id} className="border-2 border-slate-300 rounded-lg p-2 whitespace-pre-wrap">
      {/* TODO newlines not showing properly */}
      <Typography variant="body">{memory.entry}</Typography>
      <span className="text-sm text-slate-500">{memory.createdAt.toLocaleDateString()}</span>
    </div>
  );
}

export { Memory };
