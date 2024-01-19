import { PageTitle } from '@/app/components/pageTitle';
import { prisma } from '@/db/client';

export default async function Page() {
  const photos = await prisma.photo.findMany();

  return (
    <div>
      <PageTitle title="Photos" />
      <div className="flex flex-col gap-6">
        {photos.map(({ path }) => (
          <div className="basis-1/2">
            {/* TODO add captions to DB */}
            <img src={path} alt="test" />
          </div>
        ))}
      </div>
    </div>
  );
}
