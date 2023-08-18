import Link from '@/components/link';
import Routes from './routes';

export default function Home() {
  return (
    // TODO standard page layout
    // TODO typography component
    <div className='flex flex-col gap-4'>
      <h1 className='text-lg pb-6'>They Did Everything Together</h1>
      <p>This is a memorial page for Jim and Sam Skrable. They left this world as they entered it, together.</p>
      <Link href='https://www.facebook.com/109Darlington/videos/355830855737887/' target='_blank' rel='noreferrer'>
        Recording of the funeral service
      </Link>
      <Link href={Routes.MEDIA}>Media</Link>
      <Link href={Routes.MEMORIES}>Memories</Link>
      <Link href={Routes.RESOURCES}>Resources</Link>
    </div>
  );
}
