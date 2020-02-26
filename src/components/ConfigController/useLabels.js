import { useRememberedState } from '../../hooks/useRememberedState';
import { ConfigKeys } from './ConfigKeys';
import { useMemo } from 'react';

export const FilterModes = {
  WHITELIST: 'WHITELIST',
  BLACKLIST: 'BLACKLIST',
};

export const useLabels = () => {
  const [filterMode, setFilterMode] = useRememberedState(
    ConfigKeys.LABEL_FILTER_MODE,
    FilterModes.BLACKLIST,
  );

  const [whitelist, setWhitelist] = useRememberedState(
    ConfigKeys.LABEL_WHITELIST,
    [],
  );

  const [blacklist, setBlacklist] = useRememberedState(
    ConfigKeys.LABEL_BLACKLIST,
    [],
  );

  return useMemo(
    () => ({
      whitelist,
      blacklist,
      filterMode,

      toggleFilterMode() {
        const { WHITELIST, BLACKLIST } = FilterModes;
        setFilterMode(f => (f === WHITELIST ? BLACKLIST : WHITELIST));
      },

      addToWhitelist(label) {
        setWhitelist(wl => [...wl, label]);
      },

      clearWhitelist() {
        setWhitelist([]);
      },

      removeFromWhitelist(label) {
        setWhitelist(wl => wl.filter(l => l.name !== label.name));
      },

      addToBlacklist(label) {
        setBlacklist(bl => [...bl, label]);
      },

      clearBlacklist() {
        setBlacklist([]);
      },

      removeFromBlacklist(label) {
        setBlacklist(bl => bl.filter(l => l.name !== label.name));
      },
    }),
    [
      whitelist,
      blacklist,
      setWhitelist,
      setBlacklist,
      filterMode,
      setFilterMode,
    ],
  );
};
