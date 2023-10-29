import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/dataOfAllUsers";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email:email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return user;

          } else{
         return null}
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
callbacks:{
async jwt({token, user}){
  if(user) token.role= user.role
    return token
  
},
async session({session, token}) {
  if(session?.user) session.user.role = token.role
    return session
  }
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };