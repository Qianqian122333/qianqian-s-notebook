import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

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
    <html lang="en" className={`${kalam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
