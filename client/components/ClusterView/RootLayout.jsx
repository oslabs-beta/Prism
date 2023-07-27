import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ClusterViewHeader from './ClusterViewHeader/ClusterViewHeader';
import SidePanel from './SidePanel/SidePanel';
import OverView from './Dashboard/Overview';
export default function RootLayout() {
  return (
    <div className=' flex flex-col  sm:grid sm:grid-areas-layout sm:grid-cols-layout sm:grid-rows-layout min-h-screen '>
      {' '}
      <header className='bg-[var(--primary-white)]  dark:bg-[var(--secondary)]  px-6 py-7  mb-0 sm:px-10 sm:grid-in-header  sm:justify-end sm:grid sm:auto-rows-max dark:bg[var(--secondary)] border-b-[3px] border-[var(--primary-grey)]  dark:border-[var(--primary)]'>
        <ClusterViewHeader />
      </header>
      <section className='h-[10rem] sm:h-full bg-[var(--primary-grey)] sm:grid-in-sidebar sm:justify dark:text-[var(--primary)] dark:bg-[var(--secondary)] drop-shadow-2xl dark:drop-shadow-3xl '>
        <SidePanel />
      </section>
      <main
        className=' bg-[var(--primary-white)]  text-[var(--secondary)] dark:bg-[var(--secondary)] sm:grid-in-main  dark:text-[var(--primary)]  panelContainerBig  
      '
      >
        {/* <OverView /> */}
        <Outlet />
      </main>
    </div>
  );
}
