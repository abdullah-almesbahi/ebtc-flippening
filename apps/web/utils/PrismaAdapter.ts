import type { Prisma, PrismaClient, User } from 'database/generated/prisma-client'
import type { Adapter, AdapterAccount } from 'next-auth/adapters'

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
      console.log('createUser', data)
      return formatUser(await p.user.create({ data }))
    },

    getUser: async (id) => {
      console.log('getUser', id)
      const user = await p.user.findUnique({ where: { id } })
      return user ? formatUser(user) : null
    },

    getUserByEmail: async (email) => {
      console.log('getUserByEmail', email)
      const user = await p.user.findUnique({ where: { email } })
      return user ? formatUser(user) : null
    },

    getUserByAccount: async (provider_providerAccountId) => {
      console.log('getUserByAccount', provider_providerAccountId)

      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      })
      return account?.user ? formatUser(account.user) : null
    },

    updateUser: async ({ id, ...data }) => {
      console.log('updateUser', id, data)

      const updatedUser = await p.user.update({ where: { id }, data })
      if (!updatedUser) throw new Error('Failed to update user.')
      return formatUser(updatedUser)
    },

    deleteUser: async (id) => {
      await p.user.delete({ where: { id } })
    },

    linkAccount: (data) => {
      console.log('linkAccount', data)

      return p.account.create({ data }) as unknown as AdapterAccount
    },
    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({ where: { provider_providerAccountId } }) as unknown as AdapterAccount,

    async getSessionAndUser(sessionToken: string) {
      console.log('getSessionAndUser', sessionToken)

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
      console.log('createSession', data)

      return p.session.create({ data })
    },
    updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),

    async createVerificationToken(data) {
      console.log('createVerificationToken', data)

      const verificationToken = await p.verificationToken.create({ data })
      return verificationToken
    },

    async useVerificationToken(identifierToken) {
      console.log('useVerificationToken', identifierToken)

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
