import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "@/app/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
