import Link from '@/components/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-lg pb-6'>They Did Everything Together</h1>
      <p>
        This is a memorial page for Jim and Sam Skrable. They left this world as they entered it,
        together.
      </p>
      <Link
        className='hover:underline'
        href='https://www.facebook.com/109Darlington/videos/355830855737887/'
        target='_blank'
        rel='noreferrer'
      >
        Recording of the funeral service
      </Link>
      <Link className='hover:underline' href='/memories'>
        Memories
      </Link>
      <Link className='hover:underline' href='/resources'>
        Resources
      </Link>
    </div>
  );
}
