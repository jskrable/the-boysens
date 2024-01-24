// import {PDF} from '@/app/components/pdf';
import { Link } from '@/app/components/link';
import { PageTitle } from '@/app/components/pageTitle';
import { Typography } from '@/app/components/typography';
import { prisma } from '@/db/client';

export default async function Page() {
  const scripts = await prisma.script.findMany();

  return (
    <div>
      <PageTitle title="Scripts" />
      <div className="flex flex-col items-center gap-6">
        {scripts.map((script) => (
          <div key={script.id} className="flex flex-col gap-4 items-start">
            <Typography variant="h2">{script.title}</Typography>
            <p className="">{script.description}</p>
            <Link href={script.path} target="_blank" rel="noreferrer" button>
              Read It!
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
