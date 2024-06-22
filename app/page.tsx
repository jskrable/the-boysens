import { Typography } from '@/app/components/typography';
import { Memory } from './components/memory';
import { useRandomMemory } from './hooks/useRandomMemory';
import { HomeVideos } from './media/videos/HomeVideos';
import Routes from './routes';
import { Link } from './components/link';

export default async function Home() {
  const { getRandomMemory } = useRandomMemory();
  const randomMemory = await getRandomMemory();

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">They Did Everything Together</Typography>
      <Typography variant="h2">
        This is a memorial page for Jim and Sam Skrable. They left this world as they entered it, together.
      </Typography>

      {/* <Link href='https://www.facebook.com/109Darlington/videos/355830855737887/' target='_blank' rel='noreferrer'>
        Recording of the funeral service
      </Link> */}

      {randomMemory && (
        <div className="flex flex-col gap-4">
          <div className="border-2 border-slate-300 rounded-lg p-2">
            <Memory memory={randomMemory} />
          </div>
          <div className="text-center text-bark">
            <Link href={Routes.MEMORIES}>Click here to read more memories like the one above</Link>
          </div>
        </div>
      )}

      <HomeVideos />

      <Typography variant="body">Coming Soon..</Typography>
    </div>
  );
}
