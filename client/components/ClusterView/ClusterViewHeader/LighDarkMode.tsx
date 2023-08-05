import React, { FC, useContext } from 'react';
import { ThemeContext } from './themeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

interface Props {}

const LightDarkMode: FC<Props> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className='flex'>
      {theme === 'dark' ? (
        // Light mode button
        <div className='flex items-center justify-center gap-3'>
          <p className='w-xl dark:text-[var(--primary)]'>Light</p>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='flex dark:bg-transparent items-center justify-center gap-1 rounded-full py-2 px-2 scale-125 dark:text-[var(--primary)] dark:hover:text-[var(--secondary)] dark:hover:bg-[var(--primary)]'
          >
            <MdLightMode />
          </button>
        </div>
      ) : (
        // Dark mode button
        <div className='flex items-center justify-center gap-3'>
          <p className='w-xl'>Dark</p>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='items-center bg-transparent justify-center gap-2 text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] rounded-full py-2 px-2 scale-125'
          >
            <MdDarkMode />
          </button>
        </div>
      )}
    </div>
  );
};

export default LightDarkMode;
