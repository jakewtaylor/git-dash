import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const TEST = gql`
  {
    repository(owner: "teampickr", name: "app") {
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
              author {
                login
                avatarUrl
              }
              state
            }
          }
        }
      }
    }
  }
`;

export const Test = () => {
  const { loading, data, error } = useQuery(TEST);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>something went wrong...</p>
  ) : (
    <pre className="text-xs">{JSON.stringify(data, null, 4)}</pre>
  );
};
