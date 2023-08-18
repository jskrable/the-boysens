import { ReactNode } from "react";

type variant = 'p' | 'h1';
interface TypographyProps {
  children: ReactNode
  variant: variant;
  tag?: variant;
}

export default function Typography({ children, variant }: TypographyProps) {
  switch (variant) {
    case 'p':
      return <p>{children}</p>
    case 'h1':
      return <h1 className="text-lg ">{children}</h1>
    default:
      break;
  }
}
