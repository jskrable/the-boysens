import { prisma } from '@/db/client';

export default async function Page() {
  const data = await prisma.memory.findMany();

  return (
    <div>
      <h1>Memories</h1>
      <div>
        {data.map((memory) => (
          <p>{memory.entry}</p>
        ))}
      </div>
    </div>
  );
}
