import React, { useMemo } from 'react';
import { useConfig } from '../ConfigController/ConfigController';
import { FilterModes } from '../ConfigController/useLabels';
import { PullRequest } from './PullRequest';
import { useStyles } from './PullRequests.styles';
import { usePullRequests } from '../../hooks/queries/usePullRequests';

export const PullRequests = () => {
  const { selectedRepos, labels } = useConfig();
  const styles = useStyles();

  const limit = selectedRepos.repos.length < 1 ? 10 : 100;

  const query = useMemo(() => {
    const repoQuery = selectedRepos.repos
      .map(r => `repo:${r.nameWithOwner}`)
      .join(' ');

    const labelQuery = labels.filterEnabled
      ? labels.filterMode === FilterModes.BLACKLIST
        ? labels.blacklist.map(label => `-label:"${label.name}"`).join(' ')
        : labels.whitelist.map(label => `label:"${label.name}"`).join(' ')
      : '';

    return `is:pr is:open ${repoQuery} ${labelQuery}`;
  }, [selectedRepos.repos, labels]);

  const { loading, error, pullRequests } = usePullRequests(query, limit);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong...</p>
  ) : (
    <div className={styles.pullRequests}>
      {pullRequests.map(pullRequest => (
        <PullRequest pullRequest={pullRequest} key={pullRequest.id} />
      ))}
    </div>
  );
};
