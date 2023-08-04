import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

interface Props {

}

export default function Layout<Props>() {
  return (
    <main className='bg-[var(--primary-white)] p-10'>
      <Header />
      <Outlet />
    </main>
  );
}
