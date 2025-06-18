import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/lobster/400.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Sotlylaisse 71 vous invite",
  description: "Venez fêter la musique au Sotlylaisse !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`min-h-screen bg-black font-sans ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div id="stars-bg" className="pointer-events-none select-none fixed inset-0 z-0"></div>
        {children}
      </body>
    </html>
  );
}
