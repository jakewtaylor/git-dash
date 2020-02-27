import { useRememberedState } from '../../hooks/useRememberedState';
import { ConfigKeys } from './ConfigKeys';
import { useMemo, useEffect } from 'react';

const userPrefersDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useRememberedState(
    ConfigKeys.DARK_MODE,
    userPrefersDarkMode(),
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('mode-dark');
    } else {
      document.documentElement.classList.remove('mode-dark');
    }
  }, [isDarkMode]);

  return useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode() {
        setIsDarkMode(v => !v);
      },
    }),
    [isDarkMode, setIsDarkMode],
  );
};
