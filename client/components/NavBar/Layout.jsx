import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
  return (
    <main className='bg-red-500'>
      <Header />
      <Outlet />
      <div></div>
    </main>
  );
}
