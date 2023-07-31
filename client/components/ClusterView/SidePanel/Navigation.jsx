import { NavLink } from 'react-router-dom';
import React from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import { FaCircleNodes, FaFreebsd } from 'react-icons/fa6';
import { FaServer } from 'react-icons/fa';

const Navigation = ({
  setViewOverview,
  setViewNode,
  setViewPods,
  setViewClusterMap,
}) => {
  return (
    <nav className='flex items-center justify-center py-7 gap-5 sm:flex-col '>
      * {/* START OF ONE LINK */}
      {/* <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/clusterview'
      >
        <span className='material-symbols-outlined'>overview</span>
        Overview
      </NavLink> */}
      <button
        onClick={() => {
          setViewOverview(true);
          setViewNode(false);
          setViewPods(false);
          setViewClusterMap(false);
        }}
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
      >
        <span className='material-symbols-outlined'>overview</span>Overview
      </button>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      {/* <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/clusterview/nodes'
      >
        <FaServer size={20} />
        Node
      </NavLink> */}
      <button
        onClick={() => {
          setViewOverview(false);
          setViewNode(true);
          setViewPods(false);
          setViewClusterMap(false);
          console.log('node test');
        }}
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
      >
        {' '}
        <FaServer size={20} />
        Node{' '}
      </button>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      {/* 
      <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/clusterview/pods'
      >
        <FaFreebsd size={21} />
        Pods
      </NavLink> */}
      <button
        onClick={() => {
          setViewOverview(false);
          setViewNode(false);
          setViewPods(true);
          setViewClusterMap(false);
          console.log('pod test');
        }}
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
      >
        {' '}
        <FaFreebsd size={21} /> Pods{' '}
      </button>
      {/* END OF ONE NavLink */}
      {/* START OF ONE NavLink */}
      {/* <NavLink
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
        to='/clusterview/clustermap'
      >
        <FaCircleNodes size={22} />
        Cluster Map
      </NavLink> */}
      <button
        onClick={() => {
          setViewOverview(false);
          setViewNode(false);
          setViewPods(false);
          setViewClusterMap(true);
          console.log('Clustermap test');
        }}
        className='hover:bg-[var(--secondary)] hover:px-2 hover:py-1 my-0 hover:text-[var(--primary)] rounded flex items-center gap-1 dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
      >
        {' '}
        <FaCircleNodes size={22} /> Cluster Map
      </button>
      {/* END OF ONE NavLink */}
    </nav>
  );
};

export default Navigation;
