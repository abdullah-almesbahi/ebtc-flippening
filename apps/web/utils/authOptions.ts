import TwitterProvider from 'next-auth/providers/twitter'
import type { NextAuthOptions as NextAuthConfig, Profile } from 'next-auth'
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
    // we need to create user in authOptions.ts file,because we need to store username and twitter id, here is the only place we can get it
    signIn: async (params) => {
      const { profile } = params
      const p = profile as Profile & { data: { id: string; name: string; profile_image_url: string; username: string } }
      if (profile) {
        const userExists = await prisma.user.findUnique({
          where: { id: p.data.id },
        })
        if (!userExists) {
          await prisma.user.create({
            data: {
              id: p.data.id,
              name: p.data.name,
              image: p.data.profile_image_url,
              username: p.data.username,
            },
          })
        }
      }

      return true
    },
  },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/signup',
  },
} satisfies NextAuthConfig
