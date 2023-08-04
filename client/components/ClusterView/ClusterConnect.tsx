import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {

}

const ClusterConnect: FC<Props> = () => {
  return (
    <main className='flex flex-col items-center'>
      {' '}
      <nav className='flex items-center justify-center py-7 gap-5 sm:flex-col '>
        {/* START OF ONE LINK */}
        <NavLink
          className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
          to='/clusterview'
        >
          Connect
        </NavLink>
        {/* END OF ONE NavLink */}
      </nav>
    </main>
  );
};

export default ClusterConnect;
