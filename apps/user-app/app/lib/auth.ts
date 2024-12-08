import db from "@repo/database/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Password",
        },
      },
      // TODO: User credentials type from next-aut
      async authorize(credentials: any) {
        // Do zod validation, OTP validation here
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
              bankCustomerId: existingUser.bankCustomerId,
            };
          }
          return null;
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",

  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async jwt({ token, user }: any) {
      if (user) {
        // Add bankCustomerId to the token when a user is authenticated
        token.bankCustomerId = user.bankCustomerId;
      }
      return token;
    },
    async session({ token, session }: any) {
      session.user.id = token.sub;
      session.user.bankCustomerId = token.bankCustomerId;
      // session.bankCustomerId = token.bankCustomerId;
      return session;
    },
  },
};
