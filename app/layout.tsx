import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { NavBar, PageContainer } from "@/components";

const fredoka = Fredoka({
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
    <html lang="en">
      <body
        className={`${fredoka.className} overflow-hidden relative`}
      >
        <NavBar />
        <main>
          <PageContainer>
            {children}
          </PageContainer>
        </main>
      </body>
    </html>
  );
}
