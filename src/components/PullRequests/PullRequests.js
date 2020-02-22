import React from 'react';
import { useConfig } from '../ConfigController/ConfigController';
import { PullRequest } from './PullRequest';
import { useStyles } from './PullRequests.styles';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_PULL_REQUESTS = gql`
  query PullRequests($query: String!) {
    search(query: $query, type: ISSUE, last: 100) {
      nodes {
        ... on PullRequest {
          id
          title
          createdAt
          updatedAt
          permalink
          author {
            login
            avatarUrl
          }
          repository {
            nameWithOwner
            owner {
              avatarUrl
            }
          }
          labels(first: 15) {
            nodes {
              name
              color
            }
          }
          reviews(last: 100) {
            nodes {
              id
              createdAt
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

export const PullRequests = () => {
  const { selectedRepos } = useConfig();
  const styles = useStyles();

  const query =
    'is:pr is:open ' +
    selectedRepos.repos.map(r => `repo:${r.nameWithOwner}`).join(' ');
  const { loading, error, data } = useQuery(GET_PULL_REQUESTS, {
    variables: { query },
  });

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong...</p>
  ) : (
    <div className={styles.pullRequests}>
      {data.search.nodes.map(pullRequest => (
        <PullRequest pullRequest={pullRequest} key={pullRequest.id} />
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};
