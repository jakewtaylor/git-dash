import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const SEARCH_REPOS = gql`
  query Repositories($query: String!, $limit: Int!) {
    search(query: $query, type: REPOSITORY, last: $limit) {
      nodes {
        ... on Repository {
          name
          nameWithOwner
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export const useRepoSearch = (query) => {
  const { data, ...rest } = useQuery(SEARCH_REPOS, {
    variables: { query, limit: 10 },
  });

  return {
    data,
    repos: data ? data.search.nodes : [],
    ...rest,
  };
};
