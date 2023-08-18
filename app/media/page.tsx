import Link from '@/components/link';
import Routes from '../routes';

// TODO come up with better name
export default function Page() {
  return (
    <div>
      <h1>Media</h1>
      <Link href={Routes.PHOTOS}>Photos</Link>
      <Link href={Routes.SCRIPTS}>Scripts</Link>
    </div>
  );
}
