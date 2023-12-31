// @ts-nocheck
import type { PrismaClient } from 'database'
import type { Adapter, AdapterAccount } from 'next-auth/adapters'
import type { User } from '@/server/graphql/gen/graphql-types'

export function PrismaAdapter(p: PrismaClient): Adapter {
  const formatUser = (user: User) => {
    return {
      id: user.id,
      name: user.name || '',
      email: user.email || '',
      emailVerified: user.emailVerified || new Date(),
      image: user.image || '',
    }
  }

  return {
    createUser: async (data) => {
      // ugly hack to get around, we had to create user in authOptions.ts file,because we need to store username and twitter id
      const user = await p.user.findFirst({ where: { name: data.name, image: data.image } })

      return formatUser(user)
    },

    getUser: async (id) => {
      const user = await p.user.findUnique({ where: { id } })
      return user ? formatUser(user) : null
    },

    getUserByEmail: async (email) => {
      const user = await p.user.findUnique({ where: { email } })
      return user ? formatUser(user) : null
    },

    // getUserByAccount { providerAccountId: '181167167', provider: 'twitter' }
    getUserByAccount: async (provider_providerAccountId) => {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      })
      return account?.user ? formatUser(account.user) : null
    },

    updateUser: async ({ id, ...data }) => {
      const updatedUser = await p.user.update({ where: { id }, data })
      if (!updatedUser) throw new Error('Failed to update user.')
      return formatUser(updatedUser)
    },

    deleteUser: async (id) => {
      await p.user.delete({ where: { id } })
    },

    linkAccount: (data) => {
      return p.account.create({ data }) as unknown as AdapterAccount
    },
    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({ where: { provider_providerAccountId } }) as unknown as AdapterAccount,

    async getSessionAndUser(sessionToken: string) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      })

      if (!userAndSession) return null

      const { user, ...session } = userAndSession

      return {
        session,
        user: formatUser(user),
      }
    },

    createSession: (data) => {
      return p.session.create({ data })
    },
    updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),

    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create({ data })
      return verificationToken
    },

    async useVerificationToken(identifierToken) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token: identifierToken },
        })
        return verificationToken
      } catch (error) {
        if ((error as Prisma.PrismaClientKnownRequestError).code === 'P2025') return null
        throw error
      }
    },
  }
}
