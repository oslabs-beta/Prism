import React from 'react';
import LightDarkMode from './LighDarkMode';
import Profile from './Profile';
import Logo from '../../../assets/prism-logo.png';
import LogoDarkMode from '../../../assets/prism-logo-dark-mode.png';

const ClusterViewHeader = () => {
  return (
    <div className=' flex items-center justify-between '>
      <div className='sm:hidden flex items-center gap-1'>
        <img
          className='w-[2.8rem] sm:hidden hidden dark:block '
          src={LogoDarkMode}
          alt='LOGO'
        />
        <img
          className='w-[2.8rem] sm:hidden dark:hidden '
          src={Logo}
          alt='LOGO'
        />
        <h1 className='text-[2.3rem] dark:text-[var(--primary)] font-bold'>
          Prism
        </h1>
      </div>

      <div className='flex items-center justify-between gap-5 '>
        <LightDarkMode />
        <Profile />
      </div>
    </div>
  );
};

export default ClusterViewHeader;
