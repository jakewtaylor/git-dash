import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useStyles } from './PullRequestsForRepo.styles';
import { StatusIcon } from './StatusIcon';

const query = gql`
  query PullRequests($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      pullRequests(first: 100, states: OPEN) {
        nodes {
          id
          title
          author {
            login
            avatarUrl
          }
          reviews(first: 100) {
            nodes {
              id
              state
              author {
                login
                avatarUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const PullRequestsForRepo = ({ name, owner }) => {
  const styles = useStyles();
  const { loading, error, data } = useQuery(query, {
    variables: { name, owner },
  });

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong...</p>
  ) : (
    <>
      {data.repository.pullRequests.nodes.map(pr => (
        <div className={styles.pullRequest} key={pr.id}>
          <div className={styles.titleBar}>
            <div>
              <p className={styles.repo}>
                {owner}/{name}
              </p>
              <p className={styles.title}>{pr.title}</p>
            </div>

            <div className={styles.author}>
              <img
                src={pr.author.avatarUrl}
                alt={pr.author.login}
                className={styles.authorAvatar}
              />
              <p className={styles.authorName}>{pr.author.login}</p>
            </div>
          </div>

          <div className={styles.reviewers}>
            {pr.reviews.nodes.map(review => (
              <div className={styles.review} key={review.id}>
                <img
                  src={review.author.avatarUrl}
                  alt={review.author.login}
                  className={styles.reviewerAvatar}
                />
                <StatusIcon status={review.state} />
              </div>
            ))}
          </div>

          {/* <pre>{JSON.stringify(pr, null, 2)}</pre> */}
        </div>
      ))}
    </>
  );
};
