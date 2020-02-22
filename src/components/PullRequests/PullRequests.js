import React from 'react';
import { useConfig } from '../ConfigController/ConfigController';
import { PullRequestsForRepo } from './PullRequestsForRepo';
import { useStyles } from './PullRequests.styles';

export const PullRequests = () => {
  const { selectedRepos } = useConfig();
  const styles = useStyles();

  return (
    <div className={styles.pullRequests}>
      {selectedRepos.repos.map(repo => (
        <PullRequestsForRepo
          key={repo.nameWithOwner}
          owner={repo.owner.login}
          name={repo.name}
        />
      ))}
    </div>
  );
};
