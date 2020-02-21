import React, { createContext, useContext, useMemo } from 'react';
import { useSelectedRepos } from './useSelectedRepos';
import { useAuth } from './useAuth';

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigController = ({ children }) => {
  const auth = useAuth();
  const selectedRepos = useSelectedRepos();

  const config = useMemo(() => ({ auth, selectedRepos }), [
    auth,
    selectedRepos,
  ]);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
