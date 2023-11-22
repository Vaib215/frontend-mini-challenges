import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Quiz App",
  description: "Created by Vaib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center bg-base-300`}
      >
        <Navbar />
        <div className="z-50 flex-1 flex item-center justify-center">{children}</div>
      </body>
    </html>
  );
}
