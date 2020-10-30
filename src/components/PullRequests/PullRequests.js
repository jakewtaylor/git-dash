import React, { useMemo } from 'react';
import { useConfig } from '../ConfigController/ConfigController';
import { FilterModes } from '../ConfigController/useLabels';
import { PullRequest } from './PullRequest';
import { useStyles } from './PullRequests.styles';
import { usePullRequests } from '../../hooks/queries/usePullRequests';

export const PullRequests = () => {
  const { selectedRepos, labels, drafts } = useConfig();
  const styles = useStyles();

  const limit = selectedRepos.repos.length < 1 ? 10 : 100;

  const query = useMemo(() => {
    const repoQuery = selectedRepos.repos
      .map((r) => `repo:${r.nameWithOwner}`)
      .join(' ');

    const labelQuery = labels.filterEnabled
      ? labels.filterMode === FilterModes.BLACKLIST
        ? labels.blacklist.map((label) => `-label:"${label.name}"`).join(' ')
        : labels.whitelist.map((label) => `label:"${label.name}"`).join(' ')
      : '';

    const draftQuery =
      drafts.whitelisted && labels.filterMode === FilterModes.WHITELIST
        ? 'is:draft'
        : drafts.blacklisted && labels.filterMode === FilterModes.BLACKLIST
        ? '-is:draft'
        : '';

    return `is:pr is:open ${repoQuery} ${labelQuery} ${draftQuery}`;
  }, [selectedRepos.repos, labels, drafts]);

  const { loading, error, pullRequests } = usePullRequests(query, limit);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong...</p>
  ) : (
    <div className={styles.pullRequests}>
      {pullRequests.length > 0 ? (
        pullRequests.map((pullRequest) => (
          <PullRequest pullRequest={pullRequest} key={pullRequest.id} />
        ))
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>No open pull requests.</p>
        </div>
      )}
    </div>
  );
};
