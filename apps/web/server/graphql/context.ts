import type { IncomingMessage } from 'node:http'
import type { PrismaClient } from 'database'
import type { NextApiResponse } from 'next'

export interface GraphQLContext {
  prisma: PrismaClient
  req: IncomingMessage
  res: NextApiResponse
}
