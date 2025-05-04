'use client'

import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@/lib/apollo-client'

const client = createApolloClient()

export function ApolloProviderWrapper({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
} 