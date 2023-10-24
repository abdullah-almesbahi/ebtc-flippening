import 'reflect-metadata'
import { makeExecutableSchema } from '@graphql-tools/schema'
import type { BuildSchemaOptions } from 'type-graphql'
import { buildSchemaSync, createResolversMap } from 'type-graphql'
import { printSchema } from 'graphql'
import { resolvers as generatedResolvers } from 'database'

function buildTypeDefsAndResolversSync(options: BuildSchemaOptions) {
  const schema = buildSchemaSync(options)
  const typeDefs = printSchema(schema)
  const resolvers = createResolversMap(schema)
  return { typeDefs, resolvers }
}

export const { resolvers, typeDefs } = buildTypeDefsAndResolversSync({
  resolvers: [...generatedResolvers],
  // scalarsMap: [{ type: Date, scalar: DateTimeResolver }],
  validate: false,
})

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
