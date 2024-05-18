'use client';

import { type ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from './button';

interface ModalProps {
  id: string;
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

// TODO mobile styles are junk
function Modal({ id, children, visible, onClose }: ModalProps) {
  useEffect(() => {
    // TODO click out doesn't work on overflow
    window.onclick = (e) => {
      console.log(e);
      if ((e.target as Element).id === id) onClose();
    };
    window.onkeyup = (e) => {
      if (e.key === 'Escape') onClose();
    };
  }, [id, onClose]);

  return (
    <div
      id={id}
      className={clsx({
        'fixed overflow-auto bg-black/50 inset-0 z-10': true,
        // TODO transition does not work
        'transition-height duration-500 ease-in-out': visible,
        hidden: !visible,
      })}
    >
      <div className="relative m-auto mt-10 bg-canvas w-11/12 lg:w-3/4 p-4 shadow-2xl rounded-xl flex flex-col gap-5 items-center">
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export { Modal };
export type { ModalProps };
