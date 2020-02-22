import React from 'react';
import { parseISO, format } from 'date-fns';
import { useStyles } from './PullRequest.styles';
import { StatusIcon } from './StatusIcon';
import { Labels } from './Labels';

export const PullRequest = ({ pullRequest }) => {
  const styles = useStyles();

  const created = format(parseISO(pullRequest.createdAt), 'do MMM HH:mm');
  const updated = format(parseISO(pullRequest.updatedAt), 'do MMM HH:mm');

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

            <Labels labels={pullRequest.labels.nodes} />
          </div>
          <p className={styles.title}>
            <a href={pullRequest.permalink}>{pullRequest.title}</a>
          </p>
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

      <p className={styles.timestamps}>
        created {created}, last updated {updated}
      </p>

      <div className={styles.reviewers}>
        {pullRequest.reviews.nodes
          .filter(review => review.state !== 'COMMENTED')
          .map(review => (
            <div
              className={styles.review}
              key={review.id}
              title={`Created ${format(
                parseISO(review.createdAt),
                'do MMM HH:mm',
              )}`}
            >
              <img
                src={review.author.avatarUrl}
                alt={review.author.login}
                className={styles.reviewerAvatar}
              />
              <StatusIcon status={review.state} />
            </div>
          ))}
      </div>

      {/* <pullRequeste>{JSON.stringify(pullRequest, null, 2)}</pullRequeste> */}
    </div>
  );
};
