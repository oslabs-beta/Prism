import React, { FC } from 'react';
import LightDarkMode from './LighDarkMode.tsx';
import Profile from './Profile.tsx';
import prismlogo from '../../../assets/prismlogo.png';
import prismlogodarkmode from '../../../assets/prismlogodarkmode.png';

interface Props {}

const ClusterViewHeader: FC<Props> = () => {
  return (
    <div className=' flex items-center justify-between '>
      <div className='sm:hidden flex items-center gap-1'>
        <img
          className='w-[2.8rem] sm:hidden hidden dark:block '
          src={prismlogodarkmode}
          alt='LOGO'
        />
        <img
          className='w-[2.8rem] sm:hidden dark:hidden '
          src={prismlogo}
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
