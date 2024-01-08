import {Link} from '@/app/components/link';
import { Typography } from '@/app/components/typography';
import Routes from './routes';
import { Memory } from './components/memory';
import { useRandomMemory } from './hooks/useRandomMemory';

export default async function Home() {
  
  const { getRandomMemory } = useRandomMemory();
  const randomMemory = await getRandomMemory();

  return (
    <div className='flex flex-col gap-4 lg:w-3/4'>
      <Typography variant='h1'>They Did Everything Together</Typography>
      <Typography variant='h2'>This is a memorial page for Jim and Sam Skrable. They left this world as they entered it, together.</Typography>
      {/* <Link href='https://www.facebook.com/109Darlington/videos/355830855737887/' target='_blank' rel='noreferrer'>
        Recording of the funeral service
      </Link> */}
      {/* <Link href={Routes.MEDIA}>Media</Link>
      <Link href={Routes.MEMORIES}>Memories</Link>
      <Link href={Routes.RESOURCES}>Resources</Link> */}
      {randomMemory && <Memory memory={randomMemory} />}
    </div>
  );
}
