import Navbar from "@/components/navbar/navbar";
import { Providers } from "@/components/providers";
import Footer from "@/components/sections/footer";
import SmoothScroller from "@/components/smooth-scroller";
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
  title: "Ethereal | Future of Decentralized Art & Finance",
  description:
    "Discover the future of decentralized art and finance with Ethereal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SmoothScroller>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroller>
        </Providers>
      </body>
    </html>
  );
}
