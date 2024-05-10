'use client';

import { useState } from 'react';
import Routes from '../routes';
import { Link } from './link';

function Navbar() {
  // TODO check tailwind breakpoint
  const mobile = window.screen.width <= 400;
  const [open, setOpen] = useState(false);

  const Content = () => {
    if (mobile) {
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
          >
            <title>navmenu</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
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
