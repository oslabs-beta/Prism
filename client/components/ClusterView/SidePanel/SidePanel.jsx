import React from 'react';
import Navigation from './Navigation';
import Logo from '../../../assets/prism-logo.png';
import LogoDarkMode from '../../../assets/prism-logo-dark-mode.png';

const LeftPanel = ({ setViewOverview, setViewNode, setViewPods, setViewClusterMap }) => {
  return (
    <main className='flex flex-col py-7 items-center'>
      <div className=' hidden mb-1 sm:flex items-center gap-1'>
        <img
          className='w-[2.8rem] hidden dark:block '
          src={LogoDarkMode}
          alt='LOGO'
        />
        <img
          className='w-[2.8rem] sm:block hidden dark:hidden '
          src={Logo}
          alt='LOGO'
        />
        <h1 className='text-[2.3rem] dark:text-[var(--primary)] font-bold'>
          Prism
        </h1>
      </div>
      <Navigation setViewOverview={setViewOverview} setViewNode={setViewNode} setViewPods={setViewPods} setViewClusterMap={setViewClusterMap} />
    </main>
  );
};

export default LeftPanel;
