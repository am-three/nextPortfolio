import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Khant Thu Aung",
  description: "Portfolio of Khant Thu Aung, a junior frontend developer skilled in React, Next.js, and TailwindCSS.",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Khant Thu Aung | Frontend Developer</title>
        <meta name="description" content="Khant Thu Aung, a junior frontend developer skilled in React, Next.js, and TailwindCSS." />
        <meta name="keywords" content="Frontend Developer, React, Next.js, Portfolio" />
        <meta name="author" content="Khant Thu Aung" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300 transaction-colors dark:bg-black dark:text-white`}
      >

        <ThemeProvider>

          <Navbar />

          <main className="min-h-screen pt-24"> {children} </main>

          <Footer />

        </ThemeProvider>


      </body>
    </html>
  );
}
