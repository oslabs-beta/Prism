import React from 'react';
import { PiCopyrightBold } from 'react-icons/pi';

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[var(--secondary)] text-[var(--primary)] flex flex-col items-center py-6 '>
      <ul className='flex text-xl'>
        <li className='hover:text-[var(--primary-600)]'>
          <a
            href='https://www.linkedin.com/in/prism-kubernetes-visualizer/'
            target='_blank'
            className='text-[16px]'
          >
            LinkedIn
          </a>
        </li>
        <li className='hover:text-[var(--primary-600)]'>
          <a
            href='https://github.com/oslabs-beta/Prism'
            target='_blank'
            className='text-[16px]'
          >
            Github
          </a>
        </li>
        <li className='hover:text-[var(--primary-600)]'>
          <a
            href='https://twitter.com/K8sPrism'
            target='_blank'
            className='text-[16px]'
          >
            Twitter
          </a>
        </li>
      </ul>
      <div className='flex items-center gap-1 '>
        <h3>Copyright </h3>
        <PiCopyrightBold />
        <h3>{currentYear}</h3>
      </div>
    </footer>
  );
}
