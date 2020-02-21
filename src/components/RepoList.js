import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStyles } from './RepoList.styles';

import './RepoList.css';

export const RepoList = ({ repos, onRepoClick = null, removable = false }) => {
  const styles = useStyles();

  return (
    <TransitionGroup className={styles.repos}>
      {repos.map(repo => (
        <CSSTransition key={repo.nameWithOwner} timeout={200} classNames="item">
          <button
            className={styles.repo}
            onClick={onRepoClick ? onRepoClick(repo) : null}
          >
            <div className={styles.imageContainer}>
              <img
                src={repo.owner.avatarUrl}
                className={styles.image}
                alt={repo.nameWithOwner}
              />

              {removable ? (
                <div className={styles.removeOverlay}>
                  <p className={styles.removeIcon}>✕</p>
                </div>
              ) : null}
            </div>
            <p className={styles.text}>{repo.nameWithOwner}</p>
          </button>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
