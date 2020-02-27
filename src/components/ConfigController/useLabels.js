import { useRememberedState } from '../../hooks/useRememberedState';
import { ConfigKeys } from './ConfigKeys';
import { useMemo, useCallback } from 'react';

export const FilterModes = {
  WHITELIST: 'WHITELIST',
  BLACKLIST: 'BLACKLIST',
};

export const useLabels = () => {
  const { BLACKLIST, WHITELIST } = FilterModes;
  const [filterEnabled, setFilterEnabled] = useRememberedState(
    ConfigKeys.LABEL_FILTER_ENABLED,
    false,
  );

  const [filterMode, setFilterMode] = useRememberedState(
    ConfigKeys.LABEL_FILTER_MODE,
    BLACKLIST,
  );

  const [whitelist, setWhitelist] = useRememberedState(
    ConfigKeys.LABEL_WHITELIST,
    [],
  );

  const [blacklist, setBlacklist] = useRememberedState(
    ConfigKeys.LABEL_BLACKLIST,
    [],
  );

  const addToList = useCallback(
    label => list => {
      const isDuplicate = list.findIndex(l => l.name === label.name) >= 0;

      return isDuplicate ? list : [...list, label];
    },
    [],
  );

  return useMemo(
    () => ({
      whitelist,
      blacklist,
      filterMode,
      filterList: filterMode === WHITELIST ? whitelist : blacklist,
      filterEnabled,

      listHasLabel(list, label) {
        return list.findIndex(l => l.name === label.name) >= 0;
      },

      toggleFilter() {
        setFilterEnabled(v => !v);
      },

      toggleFilterMode() {
        setFilterMode(f => (f === WHITELIST ? BLACKLIST : WHITELIST));
      },

      addToWhitelist(label) {
        setWhitelist(addToList(label));
      },

      clearWhitelist() {
        setWhitelist([]);
      },

      removeFromWhitelist(label) {
        setWhitelist(wl => wl.filter(l => l.name !== label.name));
      },

      addToBlacklist(label) {
        setBlacklist(addToList(label));
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
      filterEnabled,
      setFilterEnabled,
      BLACKLIST,
      WHITELIST,
      addToList,
    ],
  );
};
