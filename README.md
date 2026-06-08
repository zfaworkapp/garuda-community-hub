# Garuda Community Hub — Landing Page

Landing page resmi **Garuda Community Hub**, Indonesia's Football Community Ecosystem.
Dibangun dengan **Next.js 14 (App Router) + Tailwind CSS**, siap deploy ke **Vercel**.

## 🚀 Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## ☁️ Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. Framework otomatis terdeteksi sebagai **Next.js**. Klik **Deploy**.
4. Selesai — Vercel memberi URL live.

> Tidak perlu konfigurasi tambahan untuk Fase 1 (landing page). Variabel Supabase baru dibutuhkan di Fase 2.

## 🖼️ Mengganti Gambar Placeholder

Saat ini hero, event, dan berita memakai **placeholder visual** (gradient + SVG) agar tampil rapi tanpa foto. Untuk memasang foto asli:

- **Hero**: edit `components/Hero.tsx` → komponen `HeroVisual`. Ganti `<div>` gradient dengan background image, contoh:
  ```tsx
  <div className="absolute inset-0 bg-cover bg-center"
       style={{ backgroundImage: "url('/images/hero.jpg')" }} />
  ```
- **Event & Berita**: di `components/Events.tsx` dan `components/News.tsx`, ganti area gradient dengan komponen `next/image` memakai path dari `lib/data.ts`.

Taruh file gambar di folder `public/images/`. Lihat `public/images/README.md` untuk daftar gambar + prompt generate.

## ✏️ Mengedit Konten

Semua teks, angka statistik, program, komunitas, event, berita, dan mitra ada di **`lib/data.ts`** — cukup edit file itu.

## 🔌 Integrasi Supabase (Fase 2)

1. `npm install @supabase/supabase-js`
2. Isi `.env.local` dari `.env.example`.
3. Jalankan skema SQL dari `ERD-Garuda-Community-Hub.md` di Supabase SQL Editor.
4. Aktifkan kode insert di `components/JoinForm.tsx` dan `components/Footer.tsx` (sudah ada komentar penanda).

## 📁 Struktur

```
app/            # layout, page, global css
components/     # komponen tiap section
lib/data.ts     # konten landing (mudah diedit)
public/images/  # tempat foto/aset
```
