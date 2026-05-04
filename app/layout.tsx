import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Figuras, GridBox, Modal, NavLang } from "@/components";
import Navbar from "@/components/Navbar/Navbar";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const fredoka = Saira({
  variable: "--font-geist-sans",
  weight: ['300', '500', '600', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Contreras",
  description: "Portafolio de santiago contreras",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${fredoka.className} relative floating`}
      >
        <NextIntlClientProvider>
          <GridBox />
          <Modal />
          <Figuras />
          <main className="min-h-screen shadow-2xl">
            {children}
            <Navbar />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
