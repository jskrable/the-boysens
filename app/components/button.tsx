'use client';

import { DOMAction } from '@/app/@types/dom';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps<Action> = ButtonHTMLAttributes<HTMLButtonElement> & {
  action?: DOMAction<Action>;
  variant?: 'filled' | 'outline';
};

// TODO find DOM generic to extend so we don't have to add all new actions
function Button<Action extends ScrollToOptions>({
  children,
  type,
  action,
  variant = 'filled',
  ...props
}: ButtonProps<Action>) {
  const classes = clsx({
    'border rounded-md self-auto px-8 py-2': true,
    'bg-bark hover:brightness-200 text-canvas': variant === 'filled',
    'bg-canvas hover:brightness-50 text-bark': variant === 'outline',
  });
  // const onClick = action ? () => window[action.method](action.args) : undefined;
  return (
    // <button type={type} {...props} onClick={onClick} className={classes}>
    <button type={type} {...props} className={classes}>
      {children}
    </button>
  );
}

export { Button };
