import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sanyam Chavan | Full Stack Developer",
  description: "Portfolio of Sanyam Chavan. Building intelligent systems, offline-first React Native apps, and self-healing AI frameworks.",
  metadataBase: new URL('https://povsanyam.me'),
  openGraph: {
    title: "Sanyam Chavan | Portfolio",
    description: "Engineering intelligent systems that scale and adapt.",
    url: "https://povsanyam.me",
    siteName: "Sanyam Chavan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics gaId="G-9ZF3FHFE14" />
      </body>
    </html>
  );
}
