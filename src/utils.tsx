import { useEffect, useState } from 'react';

const getTheme = (): string => {
  const localTheme = localStorage.getItem('theme');
  if (localTheme === 'dark' || localTheme === 'light') {
    return localTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const setThemeToLocal = (theme: string) => {
  localStorage.setItem('theme', theme);
};

export const useThemeSelector = (): [string, (value: string) => void] => {
  const [theme, setTheme] = useState<string>(getTheme());

  useEffect(() => {
    setThemeToLocal(theme);
  }, [theme]);

  return [theme, setTheme];
};
