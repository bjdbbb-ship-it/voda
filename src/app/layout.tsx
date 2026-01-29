import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "../components/layout/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WhiskyVoda | 프리미엄 위스키 큐레이션 & 매거진",
  description: "당신만을 위한 완벽한 위스키를 찾아보세요. AI 큐레이션 엔진과 매일 업데이트되는 전문 매거진.",
  keywords: ["위스키", "위스키 추천", "싱글몰트", "버번", "위스키 매거진", "WhiskyVoda"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
