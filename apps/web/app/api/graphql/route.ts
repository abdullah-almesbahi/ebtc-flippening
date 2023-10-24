import 'reflect-metadata'

import { createYoga } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { prisma, resolvers } from 'database'
import type { GraphQLContext } from '@/server/graphql/context'

export const config = {
  api: {
    bodyParser: false,
  },
}

const schema = buildSchema({
  resolvers,
  validate: false,
})

const { handleRequest } = createYoga<GraphQLContext>({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: {
    prisma,
  },

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }
