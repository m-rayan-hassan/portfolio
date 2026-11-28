import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Editorial serif reserved for the big display headings */
const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayan Hassan | Computer Science & AI",
  applicationName: "Rayan Hassan",
  description:
    "Portfolio of Muhammad Rayan Hassan. Building scalable full-stack applications with clean architecture and auditable AI reasoning.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-zinc-100 selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
