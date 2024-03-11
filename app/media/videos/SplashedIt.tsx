'use client';

import { Modal } from '@/app/components/modal';
import { Video } from '@/app/components/video';
import { useState } from 'react';

interface SplashedItProps {
  initializeOpen?: boolean;
}

function SplashedIt({ initializeOpen = false }: SplashedItProps) {
  const [show, setShow] = useState(initializeOpen);

  return (
    <Modal id="splashed-it-modal" visible={show} setVisible={setShow}>
      <Video sources={[{ src: '/videos/splashed-it.mov', type: 'video/mp4' }]} />
    </Modal>
  );
}

export { SplashedIt };
