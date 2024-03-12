'use client';

import { Button } from '@/app/components/button';
import { Modal } from '@/app/components/modal';
import { Typography } from '@/app/components/typography';
import Loading from '@/app/loading';
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
    <div className="pt-2 pb-4 text-center">
      <Modal id="enter-memory-modal" visible={showInput} setVisible={setShowInput}>
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
          <Button type="submit" disabled={loading || !!error} onClick={saveMemory}>
            {loading ? <Loading size="SM" /> : 'Save'}
          </Button>
        </div>
        {/* TODO add color to typography */}
        {error && <p className="font-bold text-red-600">Something went wrong: {error}</p>}
      </Modal>
      <Button onClick={() => setShowInput(true)}>Add your own</Button>
    </div>
  );
}

export { AddMemory };
