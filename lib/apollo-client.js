import { ApolloClient, InMemoryCache } from '@apollo/client'

export function createApolloClient() {
  return new ApolloClient({
    uri: 'https://api-ap-northeast-1.hygraph.com/v2/cley16yxc0u1801ujc0ttavk8/master',
    cache: new InMemoryCache(),
  })
} 