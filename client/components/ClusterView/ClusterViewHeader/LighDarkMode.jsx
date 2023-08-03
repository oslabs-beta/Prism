import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const LightDarkMode = () => {
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
