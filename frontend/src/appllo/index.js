import { ApolloClient, InMemoryCache } from '@apollo/client';

const API = process.env.REACT_APP_DATA_API;

export const client = new ApolloClient({
  uri: API + '/graphql',
  cache: new InMemoryCache(),
});
