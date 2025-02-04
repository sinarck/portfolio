import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digital Portfolio",
  description: "Building things that solve my problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manRope.className} antialiased`}>{children}</body>
    </html>
  );
}

