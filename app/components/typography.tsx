import { ReactNode } from 'react';

type variant = 'body' | 'h1' | 'h2' | 'caption';
interface TypographyProps {
  children: ReactNode;
  variant: variant;
  tag?: variant;
}

function Typography({ children, variant }: TypographyProps) {
  switch (variant) {
    case 'body':
      return <p className="text-base text-wrap">{children}</p>;
    case 'caption':
      return <p className="text-sm text-gray">{children}</p>;
    case 'h1':
      return <h1 className="text-2xl">{children}</h1>;
    case 'h2':
      return <h2 className="text-lg">{children}</h2>;
    default:
      break;
  }
}

export { Typography };
