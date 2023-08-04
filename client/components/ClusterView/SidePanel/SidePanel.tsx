import React, { FC } from 'react';
import Navigation from './Navigation.tsx';
import prismlogo from '../../../assets/prismlogo.png';
import prismlogodarkmode from '../../../assets/prismlogodarkmode.png';

interface LeftPanel {
  setViewOverview: (value: boolean) => void;
  setViewNode: (value: boolean) => void;
  setViewPods: (value: boolean) => void;
  setViewClusterMap: (value: boolean) => void;
}

const LeftPanel: FC<LeftPanel> = ({
  setViewOverview,
  setViewNode,
  setViewPods,
  setViewClusterMap,
}) => {
  return (
    <main className='flex flex-col py-7 items-center'>
      <div className=' hidden mb-1 sm:flex items-center gap-1'>
        <img
          className='w-[2.8rem] hidden dark:block '
          src={prismlogodarkmode}
          alt='LOGO'
        />
        <img
          className='w-[2.8rem] sm:block hidden dark:hidden '
          src={prismlogo}
          alt='LOGO'
        />
        <h1 className='text-[2.3rem] dark:text-[var(--primary)] font-bold'>
          Prism
        </h1>
      </div>
      <Navigation
        setViewOverview={setViewOverview}
        setViewNode={setViewNode}
        setViewPods={setViewPods}
        setViewClusterMap={setViewClusterMap}
      />
    </main>
  );
};

export default LeftPanel;
