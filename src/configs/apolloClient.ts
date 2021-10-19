import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import { K } from "../shared";

export const client = new ApolloClient({
  uri: `${K.BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});
