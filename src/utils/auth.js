import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/github";

// implementing oAuth for login via google
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      // we will get this two from console.cloud.google..Oauth
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
  ],
};
