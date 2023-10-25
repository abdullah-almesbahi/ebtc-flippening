import 'reflect-metadata'
import NextAuth from 'next-auth'
import { authOptions } from '@/utils/authOptions'

const handler = NextAuth(authOptions as any)

export { handler as GET, handler as POST }
