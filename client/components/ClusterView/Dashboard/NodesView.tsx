import React, { FC } from 'react';
import type { ReactNode } from 'react';

interface Props {
  frames: Array<ReactNode | null>;
}

const NodesView: FC<Props> = ({ frames }) => {
  return <div className=' panelContainer '>{frames}</div>;
};

export default NodesView;
