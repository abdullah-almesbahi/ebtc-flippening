import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import type { NextAuthOptions as NextAuthConfig } from 'next-auth'

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: '2.0',
    }),
  ],
} satisfies NextAuthConfig
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
