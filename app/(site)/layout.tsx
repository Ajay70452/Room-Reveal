"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import "../globals.css";
const roboto = Roboto({subsets: ["latin"] ,weight:"400"});

import ToasterContext from "../context/ToastContext";
import { ImageDataProvider } from "../context/ImageDataContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${roboto.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* <Lines />
          <Header /> */}
          <ImageDataProvider>

          <ToasterContext /> 
          {children}
          </ImageDataProvider>
          {/* <Footer />
          <ScrollToTop /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
