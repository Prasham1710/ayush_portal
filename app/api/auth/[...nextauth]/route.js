import { connectMongoDB } from "@/lib/mongodb";
import InUser from "@/models/inuser";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          const inuser = await InUser.findOne({ email });

          if (user) {
            const passwordsMatch = await bcrypt.compare(password, user.password);
            if (!passwordsMatch ) {
            return null;
          }
          }
          else if (inuser) {
            const passwordsMatch = await bcrypt.compare(password, inuser.password);
                  if (!passwordsMatch ) {
                  return null;
                  }
                }
          else { return null; }
          
          

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };