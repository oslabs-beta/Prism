import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
  return (
    <main className='bg-[var(--primary-white)] p-10'>
      <Header />
      <Outlet />
    </main>
  );
}
