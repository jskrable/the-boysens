import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };

export default function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink className='hover:underline' {...props}>
      {children}
    </NextLink>
  );
}
