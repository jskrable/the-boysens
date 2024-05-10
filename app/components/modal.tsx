'use client';

import { type ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';

interface ModalProps {
  id: string;
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

function Modal({ id, children, visible, onClose }: ModalProps) {
  useEffect(() => {
    // TODO click out doesn't work on overflow
    window.onclick = (e) => {
      if ((e.target as Element).id === id) onClose();
    };
  }, [id, onClose]);

  return (
    <div
      id={id}
      className={clsx({
        'fixed overflow-auto bg-black/50 inset-0 size-full z-10': true,
        // TODO transition does not work
        'transition-height duration-500 ease-in-out': visible,
        hidden: !visible,
      })}
    >
      <div className="relative m-auto mt-10 bg-canvas w-11/12 lg:w-3/4 p-10 shadow-2xl rounded-xl flex flex-col gap-5 items-center">
        {children}
      </div>
    </div>
  );
}

export { Modal };
export type { ModalProps };
