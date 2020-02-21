import React, { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useConfig } from './components/ConfigController/ConfigController';

export const Apollo = ({ children }) => {
  const {
    auth: { token },
  } = useConfig();

  const cache = useMemo(() => new InMemoryCache(), []);
  const link = useMemo(
    () =>
      new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
          authorization: `bearer ${token}`,
        },
      }),
    [token],
  );

  const client = useMemo(() => new ApolloClient({ link, cache }), [
    link,
    cache,
  ]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
