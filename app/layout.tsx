import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdConfig from "./components/AdConfig";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBTI.AI - AI時代の最適キャリア診断",
  description: "AI時代に自分の理解と適職を知らないと、いつの間にかAIに代替されてしまう。今すぐ診断を受けて、あなたの最適なキャリアを見つけよう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdConfig />
        <Header />
        {children}
      </body>
    </html>
  );
}
