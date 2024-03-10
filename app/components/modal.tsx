'use client';

import { clsx } from 'clsx';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  id: string;
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

function Modal({ id, children, visible, setVisible }: ModalProps) {
  useEffect(() => {
    window.onclick = (e) => {
      if ((e.target as Element).id === id) setVisible(false);
    };
  }, [id, setVisible]);

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
