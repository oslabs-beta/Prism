import React, { FC } from 'react';

interface Props {

}

const Profile: FC<Props> = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <h3 className='dark:text-[var(--primary)]'>OSP-2</h3>
      <h2 className=' bg-[var(--secondary)] dark:bg-[var(--primary)] rounded-full w-12 h-12'></h2>
    </div>
  );
};

export default Profile;
