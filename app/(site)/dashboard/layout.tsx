import { ImageDataProvider } from "@/app/context/ImageDataContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "add some data here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
