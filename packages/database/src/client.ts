import { PrismaClient } from '@prisma/client'
import { resolvers } from '@generated/type-graphql'
const prisma = global.prisma || new PrismaClient()

export { prisma, resolvers, PrismaClient }

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

declare global {
  var prisma: PrismaClient | undefined
}
