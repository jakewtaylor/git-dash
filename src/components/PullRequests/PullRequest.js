import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import { useStyles } from './PullRequest.styles';
import { Labels } from './Labels';
import { useConfig } from '../ConfigController/ConfigController';
import { BuildStatus } from './BuildStatus';
import { Reviews } from './Reviews';
import { DraftLabel } from '../DraftLabel';

export const PullRequest = ({ pullRequest }) => {
  const styles = useStyles();
  const { labels } = useConfig();

  const created = format(parseISO(pullRequest.createdAt), 'do MMM HH:mm');
  const updated = format(parseISO(pullRequest.updatedAt), 'do MMM HH:mm');

  const buildStatus = useMemo(() => {
    const { nodes } = pullRequest.commits;
    const { commit } = nodes[nodes.length - 1] || { commit: null };

    return commit && commit.statusCheckRollup
      ? commit.statusCheckRollup.state
      : null;
  }, [pullRequest]);

  return (
    <div className={styles.pullRequest} key={pullRequest.id}>
      <div className={styles.titleBar}>
        <div>
          <div className={styles.preTitle}>
            <div className={styles.owner}>
              <img
                src={pullRequest.repository.owner.avatarUrl}
                alt={pullRequest.repository.nameWithOwner}
                className={styles.ownerAvatar}
              />
              <p className={styles.repo}>
                {pullRequest.repository.nameWithOwner}
              </p>
            </div>

            {pullRequest.isDraft && <DraftLabel />}

            <Labels
              labels={pullRequest.labels.nodes}
              buttons={({ className, label, hideTooltip }) => {
                const inWhitelist = labels.listHasLabel(
                  labels.whitelist,
                  label,
                );
                const inBlacklist = labels.listHasLabel(
                  labels.blacklist,
                  label,
                );

                return (
                  <>
                    <button
                      className={className}
                      onClick={() => {
                        if (inWhitelist) {
                          labels.removeFromWhitelist(label);
                        } else {
                          labels.addToWhitelist(label);
                        }
                        hideTooltip();
                      }}
                    >
                      {inWhitelist ? 'remove from' : 'add to'} whitelist
                    </button>
                    <button
                      className={className}
                      onClick={() => {
                        if (inBlacklist) {
                          labels.removeFromBlacklist(label);
                        } else {
                          labels.addToBlacklist(label);
                        }
                        hideTooltip();
                      }}
                    >
                      {inBlacklist ? 'remove from' : 'add to'} blacklist
                    </button>
                  </>
                );
              }}
            />
          </div>
          <a
            className={styles.title}
            href={pullRequest.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pullRequest.title}
          </a>
        </div>

        <div className={styles.author}>
          <img
            src={pullRequest.author.avatarUrl}
            alt={pullRequest.author.login}
            className={styles.authorAvatar}
          />
          <p className={styles.authorName}>{pullRequest.author.login}</p>
        </div>
      </div>

      <p className={styles.branches}>
        <span>{pullRequest.baseRefName}</span>
        <ArrowLeftRoundedIcon />
        <span>{pullRequest.headRefName}</span>
      </p>

      <p className={styles.timestamps}>
        created {created}, last updated {updated}
        <BuildStatus status={buildStatus} />
      </p>

      <Reviews reviews={pullRequest.reviews.nodes} />
    </div>
  );
};
