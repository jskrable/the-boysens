import { PageTitle } from '@/app/components/pageTitle';
import { prisma } from '@/db/client';
import Image from 'next/image';

export default async function Page() {
  const photos = await prisma.photo.findMany();

  // TODO add captions to DB
  // TODO arrange in collage and get rid of warnings

  return (
    <div>
      <PageTitle title="Photos" />
      <div className="flex flex-col gap-6">
        {photos.map(({ id, path }) => (
          <div key={id}>
            <Image src={path} alt="test" width={400} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
