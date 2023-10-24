import { PrismaClient } from '../generated/prisma-client'

const prisma = global.prisma || new PrismaClient()

export { prisma }

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

declare global {
  var prisma: PrismaClient | undefined
}
