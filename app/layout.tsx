import type { Metadata } from "next";
import { DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/ui/star-background";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
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
    <html lang="en" className={`${dmSans.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
