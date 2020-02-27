import React, { createContext, useContext, useMemo } from 'react';
import { useSelectedRepos } from './useSelectedRepos';
import { useAuth } from './useAuth';
import { useLabels } from './useLabels';
import { useDarkMode } from './useDarkMode';

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigController = ({ children }) => {
  const auth = useAuth();
  const selectedRepos = useSelectedRepos();
  const labels = useLabels();
  const darkMode = useDarkMode();

  const config = useMemo(() => ({ auth, selectedRepos, labels, darkMode }), [
    auth,
    selectedRepos,
    labels,
    darkMode,
  ]);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
