'use client';

import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import Loading from '../loading';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'filled' | 'outline';
};

// TODO button size
function Button({ children, disabled, loading = false, type, variant = 'filled', ...props }: ButtonProps) {
  const classes = clsx({
    'border rounded-md self-auto px-8 py-2': true,
    'bg-bark hover:brightness-200 text-canvas': variant === 'filled',
    'bg-canvas hover:brightness-50 text-bark': variant === 'outline',
  });
  return (
    <button {...props} type={type} className={classes} disabled={disabled || loading}>
      {loading ? <Loading size="SM" /> : children}
    </button>
  );
}

export { Button };
