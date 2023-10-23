import Twitter from 'next-auth/providers/twitter'
import NextAuth from 'next-auth/next'

export const auth = NextAuth({
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
  ],
})

export { auth as GET, auth as POST }
