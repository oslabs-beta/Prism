import React, { FC } from 'react';
import type { ReactNode } from 'react';

interface PodsViewProps {
  frames: Array<ReactNode | null>;
}

const PodsView: FC<PodsViewProps> = ({ frames }) => {
  return (
    <>
      <div className=' panelContainer '>{frames}</div>
    </>
  );
};

export default PodsView;
