import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import GridScreen from "@/module/HomePage/components/Hero/GridScreen";
import { Figuras, Modal, NavLang } from "@/components";
import Navbar from "@/components/Navbar/Navbar";
import { getLocale } from "next-intl/server";
import LanguageSelector from "@/components/LanguajeSelector";
import { NextIntlClientProvider } from "next-intl";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

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
          <GridScreen />
          <Modal />
          <Navbar />
          <Figuras />
          <NavLang />
          <main className="h-screen">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
