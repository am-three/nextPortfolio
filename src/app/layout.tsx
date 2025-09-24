import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Head from "next/head";
import { useMemo } from "react";



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

  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map(() => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 2 + 0.6; // px
      const delay = Math.random() * 3; // s
      const duration = 4 + Math.random() * 5; // s
      const opacity = 0.25 + Math.random() * 0.75;
      return { left, top, size, delay, duration, opacity };
    });
  }, []);

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

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          <div className="relative w-full h-full">
            {stars.map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${s.left}%`,
                  top: `${s.top}%`,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  background: "white",
                  borderRadius: "50%",
                  opacity: s.opacity,
                  boxShadow: "0 0 6px rgba(255,255,255,0.9)",
                  transformOrigin: "center",
                  animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </div>
          <style>{`
            @keyframes twinkle {
              0% { transform: scale(1); opacity: 0.35; }
              50% { transform: scale(1.6); opacity: 1; }
              100% { transform: scale(1); opacity: 0.35; }
            }
          `}</style>
        </div>


        <ThemeProvider>

          <Navbar />

          <main className="min-h-screen pt-24"> {children} </main>

          <Footer />

        </ThemeProvider>


      </body>
    </html>
  );
}
