// Data konten landing page. Edit di sini untuk mengubah teks/angka.
// Di Fase 2-3, data ini akan diganti dengan query dari Supabase.

import {
  Users,
  Handshake,
  Shield,
  Megaphone,
  Ticket,
  UserPlus,
  HeartHandshake,
  MonitorPlay,
  Bus,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
  { label: "News", href: "#news" },
  { label: "Join Us", href: "#join" },
];

export const values: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users, title: "COMMUNITY", desc: "Kita adalah satu komunitas" },
  { icon: Handshake, title: "COLLABORATION", desc: "Bersama kita lebih kuat" },
  {
    icon: Shield,
    title: "NATIONAL PRIDE",
    desc: "Bangga dukung Timnas Indonesia",
  },
  {
    icon: Megaphone,
    title: "SUPPORT INDONESIA",
    desc: "Dukungan kita untuk Garuda",
  },
];

export const stats = [
  { value: "3.000+", label: "ANGGOTA TERDAFTAR" },
  { value: "50+", label: "KOMUNITAS" },
  { value: "20+", label: "KOTA DI INDONESIA" },
  { value: "10+", label: "AKTIVASI MATCHDAY" },
];

export const programs: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Ticket,
    title: "MATCHDAY EXPERIENCE",
    desc: "Pendampingan dan koordinasi dukungan Timnas di setiap pertandingan.",
  },
  {
    icon: UserPlus,
    title: "COMMUNITY CONNECT",
    desc: "Menghubungkan komunitas dari seluruh Indonesia.",
  },
  {
    icon: HeartHandshake,
    title: "VOLUNTEER PROGRAM",
    desc: "Relawan untuk mendukung event dan kegiatan sosial.",
  },
  {
    icon: MonitorPlay,
    title: "GATHERING & NOBAR",
    desc: "Aktivasi komunitas, nonton bareng dan networking.",
  },
  {
    icon: Bus,
    title: "AWAY DAY",
    desc: "Perjalanan bersama mendukung Timnas di berbagai kota.",
  },
  {
    icon: PartyPopper,
    title: "COMMUNITY FESTIVAL",
    desc: "Festival tahunan komunitas sepak bola Indonesia.",
  },
];

export const communities = [
  { name: "GARUDA FATMAWATI", city: "Jakarta" },
  { name: "GARUDA PRIORITY", city: "Jakarta" },
  { name: "GARUDA BEKASI", city: "Bekasi" },
  { name: "GARUDA TANGERANG", city: "Tangerang" },
  { name: "GARUDA DEPOK", city: "Depok" },
  { name: "GARUDA BANDUNG", city: "Bandung" },
];

export const events = [
  {
    category: "MATCHDAY",
    title: "INDONESIA VS MOZAMBIK",
    date: "Selasa, 9 Juni 2026",
    time: "20.00 WIB",
    place: "Gelora Bung Karno, Jakarta",
    cta: "DAFTAR SEKARANG",
    image:
      "https://priority.co.id/wp-content/uploads/2026/06/event-matchday.png",
  },
  {
    category: "NOBAR",
    title: "NOBAR TIMNAS INDONESIA",
    date: "Akan Diumumkan",
    time: "",
    place: "Bersama Komunitas di Seluruh Indonesia",
    cta: "LIHAT DETAIL",
    image: "https://priority.co.id/wp-content/uploads/2026/06/event-nobar.png",
  },
  {
    category: "GATHERING",
    title: "GATHERING KOMUNITAS",
    date: "Akan Diumumkan",
    time: "",
    place: "Jakarta",
    cta: "LIHAT DETAIL",
    image:
      "https://priority.co.id/wp-content/uploads/2026/06/event-gathering.png",
  },
];

export const news = [
  {
    title: "Perjalanan 500 Supporter Menuju GBK",
    excerpt: "Kisah kebersamaan dan semangat tanpa henti untuk Garuda.",
    date: "2 Mei 2026",
    image: "/images/news-1.jpg",
  },
  {
    title: "Nobar Akbar di 15 Kota, Satu Semangat",
    excerpt: "Ribuan supporter nonton bareng dukung Timnas Indonesia.",
    date: "30 April 2026",
    image: "/images/news-2.jpg",
  },
  {
    title: "Garuda Community Berbagi untuk Sesama",
    excerpt: "Kegiatan sosial komunitas untuk masyarakat sekitar.",
    date: "25 April 2026",
    image: "/images/news-3.jpg",
  },
];

export const partners = [
  {
    name: "PSSI",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/Logo_PSSI.png",
  },
  {
    name: "MILLS",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/logo-mills.jpg",
  },
  {
    name: "Telkomsel",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/logo-telkomsel.png",
  },
  {
    name: "Mandiri",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/logo-mandiri.png",
  },
  {
    name: "Indosiar",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/INDOSIAR_Logo-scaled.png",
  },
  {
    name: "tiket.com",
    logo: "https://superlatif.id/wp-content/uploads/2026/06/Tiket.com_logo.png",
  },
];

export const cities = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Medan",
  "Makassar",
  "Yogyakarta",
  "Semarang",
  "Lainnya",
];
