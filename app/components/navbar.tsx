import Routes from '../routes';
import { Link } from './link';

function Navbar() {
  return (
    <nav className="p-4 bg-bark text-canvas">
      <Link href={Routes.HOME}>HOME</Link>
    </nav>
  );
}

export { Navbar };
