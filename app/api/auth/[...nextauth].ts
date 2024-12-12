// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { connectToDatabase } from "@/lib/connectToDB";
import UserModel from "@/models/userModel";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;

        // Connect to MongoDB
        await connectToDatabase();

        // Find the user by email
        const user: any = await UserModel.findOne({ email });
        if (!user) {
          throw new Error("No user found");
        }

        // Compare the password (assuming the password is hashed)
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // If authentication is successful, return the user object
        return { id: user._id, email: user.email, name: user.name };
      },
    }),
  ],

  session: {
    strategy: "jwt", // Use JWT-based sessions
  },

  callbacks: {
    async jwt({ token, user }: any) {
      // Persist the user information in the JWT token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Add user information to the session
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Make sure to set this in your .env file
};

export default NextAuth(authOptions);
