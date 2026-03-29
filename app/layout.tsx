import type { Metadata } from "next";
import { Caveat, Kalam } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NotebookHoles } from "@/components/notebook-holes";

const caveat = Caveat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "QianqianWei - UX Designer Portfolio",
  description: "UX Designer portfolio with a handwritten notebook aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <NotebookHoles />
        <main className="flex-1 pl-8 md:pl-12">{children}</main>
      </body>
    </html>
  );
}
