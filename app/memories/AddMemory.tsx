'use client';

import { Button } from '@/app/components/button';
import { Modal } from '@/app/components/modal';
import { Typography } from '@/app/components/typography';
import { useState } from 'react';

interface AddMemoryProps {
  onSubmit: (entry: string) => Promise<string | undefined>;
}

function AddMemory({ onSubmit }: AddMemoryProps) {
  const [entry, setEntry] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const reset = () => {
    setEntry('');
    setError('');
    setShowInput(false);
  };

  const saveMemory = async () => {
    setLoading(true);
    const error = await onSubmit(entry);
    setLoading(false);
    if (error) setError(error);
    else reset();
  };

  // TODO use HTML form
  return (
    <div className="p-2 pb-4 text-left">
      <div className="flex flex-col gap-4 md:flex-row">
        <Typography variant="body">
          This is a place to share memories of Jim and Sam. Talk to them, think about them, remember them, carry them
          on.
        </Typography>
        {/* TODO center this on mobile */}
        <div className="md:w-1/2 text-center md:text-right">
          <Button onClick={() => setShowInput(true)}>Share Something</Button>
        </div>
      </div>
      <Modal id="enter-memory-modal" visible={showInput} onClose={reset}>
        <Typography variant="h2">Leave a memory</Typography>
        <textarea
          id="entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="p-2 w-full"
          placeholder="They did everything together..."
          rows={10}
          aria-disabled={loading}
          disabled={loading}
        />
        <div>
          <Button type="submit" disabled={!!error} loading={loading} onClick={saveMemory}>
            Save
          </Button>
        </div>
        {error && <p className="font-bold text-red-600">Something went wrong: {error}</p>}
      </Modal>
    </div>
  );
}

export { AddMemory };
