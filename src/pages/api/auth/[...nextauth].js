import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

export const authOptions = {
  	// Configure one or more authentication providers
  	providers: [
    	CredentialsProvider({
	        // The name to display on the sign in form (e.g. 'Sign in with...')
	        name: 'Credentials',
	        // The credentials is used to generate a suitable form on the sign in page.
	        // You can specify whatever fields you are expecting to be submitted.
	        // e.g. domain, username, password, 2FA token, etc.
	        // You can pass any HTML attribute to the <input> tag through the object.
	        credentials: {
	          	email: { label: "Email", type: "email", placeholder: "name@mail.com" },
	          	password: { label: "Password", type: "password" }
	        },
	        async authorize(credentials, req) {
	          	// You need to provide your own logic here that takes the credentials
	          	// submitted and returns either a object representing a user or value
	          	// that is false/null if the credentials are invalid.
	          	// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
	          	// You can also use the `req` object to obtain additional parameters
	          	// (i.e., the request IP address)

              const API_URL = process.env.NEXT_PUBLIC_API_URL
              
              const raw = {
                email: credentials.email,
                username: credentials.username,
                password: credentials.password,
              }
              
              const {data} = await axios.post(`${API_URL}/login`, raw, {
                headers: {
                  'Content-Type': 'application/json',
                }
              })

              if(data.message == 'User not found') {
                throw new Error('User not found')
                return;
              }
              
              return data
	        }
      	})
    	// ...add more providers here
  	],
  	callbacks: {
  		async jwt({token, user}){
            if(user){
                token.access_token = user.access_token
            }
            return token
        },
  		async session({ session, user, token }) {
  		    session.user.access_token = token.access_token;
  		    return session;
  		},
  	},
  	pages: {
  		signIn: '/auth/signin',
  		// signOut: '/auth/signout',
  	},
  	secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)

