import Link from '@/components/link';

export default async function Page() {
  return (
    <div>
      <h1>Resources</h1>
      <div>
        <Link
          href='https://harmreduction.org/resource-center/harm-reduction-near-you/'
          target='_blank'
          rel='noreferrer'
        >
          Harm Reduction Near You
        </Link>
        {/* TODO loading icon while iframe loads */}
        <iframe
          title='Naloxone Map'
          src='https://www.google.com/maps/d/u/0/embed?mid=1R4YEVrWzXD7zq2ZpyWVV7PEWYumijq6L'
          width='600'
          height='450'
        />
      </div>
    </div>
  );
}
