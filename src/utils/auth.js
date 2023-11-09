import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
// implementing oAuth for login via google
export const authOptions = {
  // prisma adapter will handle our user accounts and token automatically
  // so if u login by different provider(ggl/git) but with the same email,u dnt have to create two diffrernt user ,adapter handle the one account for single email
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // we will get this two key from console.cloud.google..Oauth
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
