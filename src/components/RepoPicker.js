import React from 'react';
import { useUserRepos } from '../hooks/queries/useUserRepos';
import { useConfig } from './ConfigController/ConfigController';
import { RepoList } from './RepoList';
import { useStyles } from './RepoPicker.styles';
import { RepoPickerToggle } from './RepoPickerToggle';
import { CSSTransition } from 'react-transition-group';
import { useRememberedState } from '../hooks/useRememberedState';
import { ConfigKeys } from './ConfigController/ConfigKeys';

import './RepoPicker.css';

export const RepoPicker = ({ onChoose }) => {
  const { loading, repos, error } = useUserRepos();
  const { selectedRepos } = useConfig();
  const [open, setOpen] = useRememberedState(ConfigKeys.REPO_PICKER_OPEN, true);
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
    <>
      <RepoPickerToggle
        open={open}
        selectedCount={selectedRepos.repos.length}
        onClick={() => setOpen(o => !o)}
      />
      <CSSTransition in={open} timeout={200} classNames="picker" unmountOnExit>
        <div className={[styles.container]}>
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
      </CSSTransition>
    </>
  );
};
