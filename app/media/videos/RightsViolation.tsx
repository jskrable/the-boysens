'use client';

import { Modal } from '@/app/components/modal';
import { Video } from '@/app/components/video';
import { useState } from 'react';

interface RightsViolationProps {
  initializeOpen?: boolean;
}

function RightsViolation({ initializeOpen = false }: RightsViolationProps) {
  const [show, setShow] = useState(initializeOpen);

  // TODO stop video on close
  return (
    <Modal id="right-violation-modal" visible={show} setVisible={setShow}>
      <Video
        sources={[
          { src: '/videos/right-violation.mov', type: 'video/mp4' },
          { src: '/videos/right-violation.m4v', type: 'video/mp4' },
        ]}
      />
    </Modal>
  );
}

export { RightsViolation };