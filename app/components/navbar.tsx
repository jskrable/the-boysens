'use client';

import { type ReactNode, useState, useCallback, useEffect } from 'react';
import Routes from '../routes';
import { Home } from './Icons/Home';
import { NavMenu } from './Icons/NavMenu';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navConfig = [
  { route: Routes.MEMORIES, children: 'memories' },
  { route: Routes.PHOTOS, children: 'photos' },
  { route: Routes.SCRIPTS, children: 'scripts' },
  { route: Routes.RESOURCES, children: 'resources' },
];

interface NavLinkProps {
  route: string;
  children: ReactNode;
}

function Navbar({ mobile }: { mobile: boolean }) {
  const [open, setOpen] = useState(false);
  const activePath = usePathname();

  function NavLink({ route, children }: NavLinkProps) {
    return (
      <NextLink
        onLoad={() => setOpen(false)}
        onClick={() => setOpen(false)}
        className={clsx({
          'p-3 hover:bg-yellow-800 hover:border-b-4 hover:border-canvas': true,
          'bg-yellow-900 border-b-4 border-canvas': activePath === route,
        })}
        href={route}
      >
        {children}
      </NextLink>
    );
  }

  const Content = () => {
    if (mobile) {
      return (
        <div className="p-3 w-full">
          <NavMenu onClick={() => setOpen(!open)} />
          {open ? (
            <div className="flex flex-col pt-2 pl-1 text-canvas opacit">
              <NavLink route={Routes.HOME}>home</NavLink>
              {navConfig.map((section) => (
                <NavLink key={section.route} {...section} />
              ))}
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <>
        <NavLink route={Routes.HOME}>
          <Home />
        </NavLink>
        <div className="flex text-canvas">
          {navConfig.map((section) => (
            <NavLink key={section.route} {...section} />
          ))}
        </div>
      </>
    );
  };

  return <nav className="sticky top-0 flex bg-bark text-canvas">{Content()}</nav>;
}

export { Navbar };
