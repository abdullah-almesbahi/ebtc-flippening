import TwitterProvider from 'next-auth/providers/twitter'
import type { NextAuthOptions as NextAuthConfig } from 'next-auth'
import { prisma } from 'database'
import { PrismaAdapter } from '@/utils/PrismaAdapter'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: '2.0',
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      console.log('signIn', { user, account, profile })
      // try {
      //   await prisma.user.create({
      //     data: {
      //       name: user.name,
      //       image: user.image,
      //       // twitterId: user.id,
      //     },
      //   })
      // } catch (error) {
      //   console.log('xxxx', error)
      // }

      return true
    },
  },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/signup',
  },
} satisfies NextAuthConfig
