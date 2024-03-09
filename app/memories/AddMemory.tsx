'use client';

import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { Typography } from '../components/typography';
import Loading from '../loading';

enum Elements {
  Modal = 'modal',
  ModalContent = 'modal-content',
  Entry = 'entry',
}

interface AddMemoryProps {
  onSubmit: (entry: string) => Promise<string | undefined>;
}

function AddMemory({ onSubmit }: AddMemoryProps) {
  const [entry, setEntry] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const reset = () => {
    setLoading(false);
    setEntry('');
    setShowInput(false);
  };

  const saveMemory = async () => {
    setLoading(true);
    const error = await onSubmit(entry);
    // TODO actually show errors
    if (error) setError(error);
    reset();
  };

  useEffect(() => {
    window.onclick = (e) => {
      if ((e.target as Element).id === Elements.Modal) setShowInput(false);
    };
  }, []);

  return (
    <div className="pt-2 pb-4 text-center">
      <div
        id={Elements.Modal}
        className={clsx({
          'fixed overflow-auto bg-black/50 inset-0 size-full z-10 shadow-2xl': true,
          // TODO transition does not work
          'transition-all duration-1000 ease-in-out': showInput,
          hidden: !showInput,
        })}
      >
        <div className="relative m-auto mt-10 object-center bg-canvas w-2/3 p-10 flex flex-col gap-5">
          <Typography variant="h2">Leave a memory</Typography>
          <textarea
            id={Elements.Entry}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="p-2"
            placeholder="They did everything together..."
            rows={10}
            disabled={loading}
          />
          <div>
            <Button type="submit" disabled={loading} onClick={saveMemory}>
              {loading ? <Loading size="SM" /> : 'Save'}
            </Button>
          </div>
          {/* TODO add color to typography */}
          {error && <Typography variant="body">Something went wrong, please try again: {error}</Typography>}
        </div>
      </div>
      <Button onClick={() => setShowInput(true)}>Add your own</Button>
    </div>
  );
}

export { AddMemory };
