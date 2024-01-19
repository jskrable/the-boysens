import { Link } from '@/app/components/link';
import { PageTitle } from '../components/pageTitle';
import Routes from '../routes';

// TODO come up with better name
export default function Page() {
  return (
    <div>
      <PageTitle title="Media" />
      <Link href={Routes.PHOTOS}>Photos</Link>
      <Link href={Routes.SCRIPTS}>Scripts</Link>
    </div>
  );
}
