import { PageTitle } from '@/app/components/pageTitle';
import { prisma } from '@/db/client';
import Image from 'next/image';

export default async function Page() {
  const photos = await prisma.photo.findMany();

  return (
    <div>
      <PageTitle title="Photos" />
      <div className="flex flex-col gap-6">
        {photos.map(({ id, path }) => (
          <div key={id} className="basis-1/2">
            {/* TODO add captions to DB */}
            <Image src={path} alt="test" />
          </div>
        ))}
      </div>
    </div>
  );
}
