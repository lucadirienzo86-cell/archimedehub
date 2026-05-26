import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AI Classroom - ArchimedeHub | DI RIENZO SRL",
  description:
    "Sistema operativo per trasformare qualsiasi progetto in contenuti brevi, pubblicabili e misurabili. SOP universale per shorts, reels e video AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
