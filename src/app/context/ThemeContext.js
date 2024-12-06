'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    const brand = window.location.host;
    const themes = {
      default: {
        primary: '#ff0000',
        secondary: '#6c757d',
      },
      'localhost:3000': {
        primary: '#ffc107',
        secondary: '#33c1ff',
        logo: '/img/vacation_Club.jpg'
      },
      
    };

    setTheme(themes[brand] || themes.default);
  }, [pathname]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
