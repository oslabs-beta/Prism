import React, { FC, useState } from 'react';
import type { ReactNode } from 'react';

interface OveriewProps {
  frames: Array<ReactNode | null>;
}

const OverView: FC<OveriewProps> = ({ frames }) => {
  return <div className=' panelContainer '>{frames}</div>;
};

export default OverView;
