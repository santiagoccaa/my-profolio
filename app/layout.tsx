import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import GridScreen from "@/module/HomePage/components/Hero/GridScreen";
import { Modal } from "@/components";
import Navbar from "@/components/Navbar/Navbar";

const fredoka = Saira({
  variable: "--font-geist-sans",
  weight: ['300', '500', '600', '800'],
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
        <GridScreen />
        <Modal />
        <Navbar />
        <main className="h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
