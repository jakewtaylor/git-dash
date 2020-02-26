import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_PULL_REQUESTS = gql`
  query PullRequests($query: String!, $limit: Int!) {
    search(query: $query, type: ISSUE, last: $limit) {
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

export const usePullRequests = (query, limit) => {
  const { data, ...rest } = useQuery(GET_PULL_REQUESTS, {
    variables: { query, limit },
    pollInterval: 30000,
  });

  return {
    data,
    pullRequests: data ? data.search.nodes : null,
    ...rest,
  };
};
