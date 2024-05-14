'use client';

import { useEffect, useState } from 'react';
import Routes from '../routes';
import { Link } from './link';
import { NavMenu } from './icons/NavMenu';

function Navbar({ mobile }: { mobile: boolean }) {
  const [open, setOpen] = useState(false);

  const Content = () => {
    if (mobile) {
      return (
        <div>
          <NavMenu onClick={() => setOpen(!open)} />
          {open ? (
            <div className="flex flex-col pt-2 pl-1 gap-2 text-canvas">
              <Link href={Routes.HOME}>HOME</Link>
              <Link href={Routes.MEMORIES}>memories</Link>
              <Link href={Routes.PHOTOS}>photos</Link>
              <Link href={Routes.SCRIPTS}>scripts</Link>
              <Link href={Routes.RESOURCES}>resources</Link>
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <>
        <Link href={Routes.HOME}>HOME</Link>
        <div className="flex gap-2 text-canvas">
          <Link href={Routes.MEMORIES}>memories</Link>
          <Link href={Routes.PHOTOS}>photos</Link>
          <Link href={Routes.SCRIPTS}>scripts</Link>
          <Link href={Routes.RESOURCES}>resources</Link>
        </div>
      </>
    );
  };

  return <nav className="sticky top-0 flex gap-4 p-4 bg-bark text-canvas">{Content()}</nav>;
}

export { Navbar };
