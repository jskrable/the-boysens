'use client';

import { Button } from '@/app/components/button';
import { Modal } from '@/app/components/modal';
import { Typography } from '@/app/components/typography';
import Loading from '@/app/loading';
import { useEffect, useState } from 'react';

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
          disabled={loading}
        />
        <div>
          <Button type="submit" disabled={loading} onClick={saveMemory}>
            {loading ? <Loading size="SM" /> : 'Save'}
          </Button>
        </div>
      </Modal>
      {/* TODO add color to typography */}
      {error && <Typography variant="body">Something went wrong, please try again: {error}</Typography>}
      <Button onClick={() => setShowInput(true)}>Add your own</Button>
    </div>
  );
}

export { AddMemory };
