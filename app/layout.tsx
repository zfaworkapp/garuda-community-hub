import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garuda Community Hub — Indonesia's Football Community Ecosystem",
  description:
    "Rumah kolaborasi komunitas sepak bola Indonesia. Menghubungkan komunitas, suporter, keluarga, dan pecinta sepak bola untuk mendukung Garuda dan memajukan sepak bola Indonesia.",
  keywords: [
    "komunitas sepak bola indonesia",
    "suporter timnas",
    "garuda",
    "nobar timnas",
    "matchday",
  ],
  icons: {
    icon: "https://priority.co.id/wp-content/uploads/2026/06/logo-garuda-community-hub.png",
    apple:
      "https://priority.co.id/wp-content/uploads/2026/06/logo-garuda-community-hub.png",
  },
  openGraph: {
    title: "Garuda Community Hub",
    description:
      "Rumah kolaborasi komunitas sepak bola Indonesia untuk mendukung Garuda.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
