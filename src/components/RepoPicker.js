import React from 'react';
import { useUserRepos } from '../hooks/queries/useUserRepos';

import { useConfig } from './ConfigController/ConfigController';
import { RepoList } from './RepoList';
import { useStyles } from './RepoPicker.styles';

export const RepoPicker = ({ onChoose }) => {
  const { loading, repos, error } = useUserRepos();
  const { selectedRepos } = useConfig();
  const styles = useStyles();

  const handleChoose = repo => e => {
    e.preventDefault();

    selectedRepos.addRepo(repo);
  };

  const removeRepo = repo => e => {
    e.preventDefault();

    selectedRepos.removeRepo(repo);
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Get started by picking some repos you want to see:
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>something went wrong...</p>
      ) : (
        <>
          <RepoList
            repos={repos.filter(r => !selectedRepos.containsRepo(r))}
            onRepoClick={handleChoose}
          />

          {selectedRepos.repos.length > 0 ? (
            <>
              <p className={styles.text}>Selected:</p>
              <RepoList
                repos={selectedRepos.repos}
                onRepoClick={removeRepo}
                removable
              />
            </>
          ) : null}
        </>
      )}
    </div>
  );
};
