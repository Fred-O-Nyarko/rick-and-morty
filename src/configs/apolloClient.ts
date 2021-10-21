import { Character, Info, Maybe } from './../generated/graphql';
import { ApolloClient, InMemoryCache, FieldPolicy } from '@apollo/client';

import { K } from '../shared';

interface PaginationResult {
  info: Info;
  results: Character[];
}

function mergePagination(keyArgs?: string[]): FieldPolicy {
  return {
    keyArgs: keyArgs ?? false, // the only argument the cache should consider when accessing values for this field
    merge: (existing: Maybe<PaginationResult>, incoming: PaginationResult) => {
      return {
        ...incoming,
        results: existing
          ? [...existing.results, ...incoming.results]
          : incoming.results,
      };
    },
  };
}

export const client = new ApolloClient({
  uri: `${K.BASE_URL}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: mergePagination(['filter']),
        },
      },
    },
  }),
});
