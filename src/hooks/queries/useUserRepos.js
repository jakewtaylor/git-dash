import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const USER_REPOS = gql`
  {
    viewer {
      repositories(
        first: 12
        affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
        ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
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

export const useUserRepos = () => {
  const { data, ...rest } = useQuery(USER_REPOS);

  return {
    data,
    repos: data ? data.viewer.repositories.nodes : null,
    ...rest,
  };
};
