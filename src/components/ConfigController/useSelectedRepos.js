import { useMemo } from 'react';
import { useRememberedState } from '../../hooks/useRememberedState';
import { ConfigKeys } from './ConfigKeys';
import { mapToGroups } from '../../helpers/mapToGroups';

export const useSelectedRepos = () => {
  const [repos, setRepos] = useRememberedState(ConfigKeys.SELECTED_REPOS, []);

  const groupedRepos = useMemo(
    () => mapToGroups(repos, (repo) => repo.owner.login),
    [repos],
  );

  const repoKeys = useMemo(() => repos.map((repo) => repo.nameWithOwner), [
    repos,
  ]);

  return useMemo(
    () => ({
      repos,
      groupedRepos,
      repoKeys,

      containsRepo(repo) {
        return repoKeys.includes(repo.nameWithOwner);
      },

      addRepo(repo) {
        setRepos((rs) => [...rs, repo]);
      },

      addRepos(repos) {
        setRepos((rs) => [...rs, ...repos]);
      },

      removeRepo(repo) {
        setRepos((rs) =>
          rs.filter((r) => r.nameWithOwner !== repo.nameWithOwner),
        );
      },
    }),
    [repos, groupedRepos, repoKeys, setRepos],
  );
};
