'use client';

import { Button } from '@/app/components/button';
import { ArrowRight } from '@/app/components/icons/ArrowRight';
import { Modal } from '@/app/components/modal';
import { Video } from '@/app/components/video';
import { useState } from 'react';

function HomeVideos() {
  const random = Math.random();

  const [open, setOpen] = useState<'rights' | 'splash' | null>(null);
  if (random <= 0.1) setOpen('rights');
  if (random >= 0.9) setOpen('splash');

  return (
    <div className="py-8 flex flex-col gap-4">
      <Modal id="right-violation-modal" visible={open === 'rights'} onClose={() => setOpen(null)}>
        <Video sources={[{ src: '/videos/right-violation.mov', type: 'video/mp4' }]} />
      </Modal>
      <Modal id="splashed-it-modal" visible={open === 'splash'} onClose={() => setOpen(null)}>
        <Video sources={[{ src: '/videos/splashed-it.mov', type: 'video/mp4' }]} />
      </Modal>
      <Button variant="text" onClick={() => setOpen('rights')}>
        Learn about your data rights
      </Button>
      <Button variant="text" onClick={() => setOpen('splash')}>
        See how the hell it's done
      </Button>
    </div>
  );
}

export { HomeVideos };