import { prisma } from '@/lib/prisma'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {


        if (!credentials?.email || !credentials?.password){
          return null   //return null indicates that user credentials aren't correct
        }


        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
       
        if (!user){
          return null 
        }

        const isPasswordCorrect = await compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
          return null
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name
        }
      }
    })
  ],    
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }