import { useRememberedState } from '../../hooks/useRememberedState';
import { ConfigKeys } from './ConfigKeys';

export const useDrafts = () => {
  const [whitelisted, setWhitelisted] = useRememberedState(
    ConfigKeys.DRAFTS_WHITELISTED,
    false,
  );
  const [blacklisted, setBlacklisted] = useRememberedState(
    ConfigKeys.DRAFTS_BLACKLISTED,
    false,
  );

  return {
    whitelisted,
    blacklisted,

    toggleWhitelisted() {
      setWhitelisted((prev) => !prev);
    },

    toggleBlacklisted() {
      setBlacklisted((prev) => !prev);
    },
  };
};
