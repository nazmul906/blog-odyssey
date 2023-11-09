"use client";

import { SessionProvider } from "next-auth/react";
const AuthProvider = ({ children }) => {
  // we are assigning nextjs defalut session to our provider child via which user logged in
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
