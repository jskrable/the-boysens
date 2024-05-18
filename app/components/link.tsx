import { clsx } from 'clsx';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  button?: boolean;
};

function Link({ children, button = false, ...props }: LinkProps) {
  const classes = clsx({
    'hover:underline': !button,
    'border rounded-md bg-bark hover:brightness-200 text-canvas text-center self-auto px-8 py-2': button,
  });
  return (
    <NextLink className={classes} {...props}>
      {children}
    </NextLink>
  );
}

export { Link };
