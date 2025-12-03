import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components";

const fredoka = Saira({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Contreras",
  description: "Portafolio de santiago contreras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${fredoka.className} relative floating`}
      >
        <NavBar />
        <main className="h-screen">

          {children}

        </main>
      </body>
    </html>
  );
}
