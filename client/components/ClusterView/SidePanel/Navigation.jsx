import { NavLink } from 'react-router-dom';
import React from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import { FaCircleNodes, FaFreebsd } from 'react-icons/fa6';
import { FaServer } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className='flex items-center justify-center py-7 gap-5 sm:flex-col '>
      {/* START OF ONE LINK */}
      <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/'
      >
        <span className='material-symbols-outlined'>overview</span>
        Overview
      </NavLink>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/nodes'
      >
        <FaServer size={20} />
        Node
      </NavLink>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/pods'
      >
        {/* <AiOutlineCluster size={28} /> */}
        <FaFreebsd size={21} />
        Pods
      </NavLink>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/clustermap'
      >
        <FaCircleNodes size={22} />
        Cluster Map
      </NavLink>
      {/* END OF ONE NavLink */}
    </nav>
  );
};

export default Navigation;
