import Routes from '../routes';
import { Link } from './link';

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-bark text-canvas">
      <Link href={Routes.HOME}>HOME</Link>
      <div className="flex gap-2 text-canvas">
        <Link href={Routes.MEMORIES}>memories</Link>
        <Link href={Routes.PHOTOS}>photos</Link>
        <Link href={Routes.SCRIPTS}>scripts</Link>
        <Link href={Routes.RESOURCES}>resources</Link>
      </div>
    </nav>
  );
}

export { Navbar };
