import React from 'react';
import LandingHeader from './LandingHeader';
import LandingMain from './LandingMain';
import LandingFooter from './LandingFooter';

export default function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col  '>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}
