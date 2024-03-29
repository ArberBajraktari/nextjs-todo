import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import z from 'zod'
import {User} from "@/app/lib/definitions"
import {sql} from '@vercel/postgres'
const bcrypt = require('bcryptjs');

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: "Email", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compareSync(password, user.password);
          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      }
    }),
    GitHub,
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    session: async({session, token}) => {
      if(session?.user && typeof token.sub === 'string'){
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async({user, token}) => {
      if(user){
        token.uid = user.id
      }
      return token
    }
  },
  session: {
    strategy: 'jwt',
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
