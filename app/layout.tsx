import type { Metadata } from "next";
import { Ubuntu, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/ui/star-background";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayan Portfolio",
  description: "Software Developer Portfolio of Muhammad Rayan Hassan",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${geistMono.variable} antialiased`}
      >
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
