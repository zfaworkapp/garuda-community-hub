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

const BASE_URL = "https://garudacommunityhub.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Garuda Community Hub — Indonesia's Football Community Ecosystem",
    template: "%s | Garuda Community Hub",
  },
  description:
    "Rumah kolaborasi komunitas sepak bola Indonesia. Menghubungkan komunitas, suporter, keluarga, dan pecinta sepak bola untuk mendukung Garuda dan memajukan sepak bola nasional.",
  keywords: [
    "komunitas sepak bola indonesia",
    "suporter timnas",
    "garuda",
    "nobar timnas",
    "matchday",
    "gathering komunitas",
    "ekosistem sepak bola",
  ],
  authors: [{ name: "Garuda Community Hub" }],
  creator: "Garuda Community Hub",
  publisher: "Garuda Community Hub",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://priority.co.id/wp-content/uploads/2026/06/logo-garuda-community-hub.png",
    apple:
      "https://priority.co.id/wp-content/uploads/2026/06/logo-garuda-community-hub.png",
  },
  openGraph: {
    siteName: "Garuda Community Hub",
    title:
      "Garuda Community Hub — Rumah Kolaborasi Komunitas Sepak Bola Indonesia",
    description:
      "Ekosistem digital yang menghubungkan komunitas, suporter, kreator, relawan, dan keluarga pecinta sepak bola Indonesia. Dukung Garuda, majukan sepak bola Indonesia.",
    url: BASE_URL,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://priority.co.id/wp-content/uploads/2026/06/hero.png",
        width: 1200,
        height: 630,
        alt: "Garuda Community Hub — Suporter Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garuda Community Hub",
    description:
      "Rumah kolaborasi komunitas sepak bola Indonesia untuk mendukung Garuda.",
    images: ["https://priority.co.id/wp-content/uploads/2026/06/hero.png"],
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
