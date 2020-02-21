import { ConfigKeys } from './ConfigKeys';
import { useRememberedState } from '../../hooks/useRememberedState';
import { useMemo } from 'react';

export const useAuth = () => {
  const [token, setToken] = useRememberedState(ConfigKeys.AUTH, '');

  return useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken],
  );
};
