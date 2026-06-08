# Product Requirements Document (PRD)
## Garuda Community Hub — Indonesia's Football Community Ecosystem

| | |
|---|---|
| **Versi** | 1.0 |
| **Tanggal** | 8 Juni 2026 |
| **Status** | Draft untuk Review Klien |
| **Stack** | Next.js (App Router) · Tailwind CSS · Supabase (PostgreSQL + Auth) · Vercel |

---

## 1. Ringkasan Produk

**Garuda Community Hub** adalah platform ekosistem digital yang menghubungkan komunitas, suporter, kreator, relawan, dan keluarga pecinta sepak bola Indonesia dalam satu wadah kolaborasi. Tujuannya adalah memperkuat dukungan terhadap Timnas Indonesia (Garuda) dan memajukan sepak bola nasional melalui koordinasi komunitas, aktivasi matchday, kegiatan sosial, dan event bersama.

### 1.1 Visi
Menjadi rumah kolaborasi terbesar bagi seluruh komunitas sepak bola di Indonesia.

### 1.2 Masalah yang Dipecahkan
- Komunitas suporter tersebar dan tidak saling terhubung antar kota.
- Tidak ada satu kanal terpusat untuk mendaftarkan komunitas, mengelola event, dan berkoordinasi matchday.
- Sulit memobilisasi dukungan dan kegiatan sosial secara serentak di banyak kota.
- Mitra/sponsor kesulitan menjangkau komunitas secara terukur.

### 1.3 Target Pengguna
1. **Member** — individu pecinta sepak bola yang ingin bergabung & ikut event.
2. **Komunitas (Community Admin)** — pengelola/perwakilan komunitas yang mendaftarkan dan mengelola profil komunitas serta event-nya.
3. **Admin (Super Admin)** — tim Garuda Community Hub yang mengelola seluruh platform, verifikasi komunitas, dan publikasi konten.

---

## 2. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik (KPI) | Target Awal |
|---|---|---|
| Pertumbuhan anggota | Jumlah member terdaftar | 3.000+ |
| Jangkauan komunitas | Jumlah komunitas terverifikasi | 50+ |
| Jangkauan geografis | Jumlah kota terjangkau | 20+ |
| Aktivasi event | Aktivasi matchday per tahun | 10+ |
| Engagement | Pendaftaran event per bulan | Naik bertahap |

---

## 3. Lingkup (Scope)

### 3.1 Fase 1 — Landing Page (Prioritas Saat Ini)
Halaman publik yang menampilkan brand, value, program, direktori komunitas, event, berita, mitra, serta form pendaftaran cepat. **Tanpa autentikasi**, fokus pada konversi (Gabung Sekarang / Daftarkan Komunitas). Deploy ke Vercel.

### 3.2 Fase 2 — Autentikasi & Dashboard
- Registrasi & login (Supabase Auth) untuk 3 role.
- Dashboard Member, Dashboard Komunitas, Dashboard Admin.

### 3.3 Fase 3 — Modul Inti
- Manajemen Komunitas (CRUD, verifikasi).
- Manajemen Event (matchday, nobar, gathering, away day, festival) + RSVP.
- Manajemen Berita/Cerita (CMS sederhana).
- Manajemen Mitra/Sponsor.
- Newsletter & notifikasi.

### 3.4 Di Luar Lingkup (Saat Ini)
- Pembayaran/tiket berbayar (integrasi payment gateway) — fase lanjutan.
- Aplikasi mobile native.
- Live chat / forum real-time.

---

## 4. Fitur & Persyaratan Fungsional

### 4.1 Landing Page (Fase 1)
| ID | Fitur | Deskripsi |
|---|---|---|
| LP-01 | Navigasi | Header dengan menu (Home, About, Community, Events, Partners, News, Join Us) + CTA "Join Community". Sticky on scroll. |
| LP-02 | Hero | Headline utama, deskripsi, 2 CTA (Gabung Sekarang, Daftarkan Komunitas), visual suporter Garuda. |
| LP-03 | Tentang Kami | Deskripsi + 4 nilai (Community, Collaboration, National Pride, Support Indonesia). |
| LP-04 | Statistik | 4 metrik (anggota, komunitas, kota, aktivasi matchday). |
| LP-05 | Program Utama | 6 kartu program. |
| LP-06 | Direktori Komunitas | Grid kartu komunitas + link "Lihat semua". |
| LP-07 | Event Terdekat | 3 kartu event dengan kategori (Matchday/Nobar/Gathering) + CTA. |
| LP-08 | Berita & Cerita | 3 kartu artikel + tanggal. |
| LP-09 | Mitra Kami | Grid logo mitra. |
| LP-10 | Form Pendaftaran | Nama, WhatsApp, Email, Kota, Nama Komunitas (opsional) → simpan ke Supabase. |
| LP-11 | Footer | Menu, kontak, sosial media, newsletter. |
| LP-12 | Responsif | Mobile-first, optimal di semua ukuran layar. |

### 4.2 Autentikasi (Fase 2)
| ID | Fitur |
|---|---|
| AUTH-01 | Registrasi member via email + password (Supabase Auth). |
| AUTH-02 | Login / logout / reset password. |
| AUTH-03 | Role-based access control (member, community_admin, admin). |
| AUTH-04 | Pendaftaran komunitas → status `pending` → verifikasi admin. |

### 4.3 Modul Komunitas (Fase 3)
| ID | Fitur |
|---|---|
| COM-01 | Komunitas mengelola profil (nama, kota, logo, deskripsi, kontak, sosmed). |
| COM-02 | Admin memverifikasi/menolak komunitas. |
| COM-03 | Direktori publik komunitas terverifikasi (filter kota). |
| COM-04 | Member bergabung ke komunitas (membership). |

### 4.4 Modul Event (Fase 3)
| ID | Fitur |
|---|---|
| EVT-01 | Komunitas/Admin membuat event (judul, kategori, tanggal, lokasi, kuota, deskripsi). |
| EVT-02 | Member RSVP/daftar event. |
| EVT-03 | Status event (draft, published, ongoing, finished, cancelled). |
| EVT-04 | Halaman detail event publik. |

### 4.5 Modul Konten & Mitra (Fase 3)
| ID | Fitur |
|---|---|
| CNT-01 | Admin publish berita/cerita (judul, cover, isi, kategori, tanggal). |
| CNT-02 | Admin kelola mitra/sponsor (nama, logo, tier, link). |
| CNT-03 | Newsletter subscription + ekspor daftar email. |

---

## 5. Persyaratan Non-Fungsional
- **Performa**: Landing page LCP < 2.5s, skor Lighthouse ≥ 90.
- **Responsif & Aksesibilitas**: Mobile-first, kontras warna sesuai WCAG AA, alt text gambar.
- **SEO**: Meta tags, Open Graph, sitemap, semantic HTML.
- **Keamanan**: Supabase Row Level Security (RLS), validasi input, proteksi spam form (honeypot/rate limit).
- **Skalabilitas**: Arsitektur modular (komponen Next.js + tabel ternormalisasi).
- **Bahasa**: Bahasa Indonesia (siap multi-bahasa di masa depan).

---

## 6. Arsitektur Teknis
- **Frontend**: Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, lucide-react (ikon).
- **Backend/DB**: Supabase (PostgreSQL, Auth, Storage untuk logo/cover, RLS).
- **Hosting**: Vercel (frontend) + Supabase (data).
- **Form Handling**: Server Action / Supabase client → tabel `registrations` & `newsletter_subscribers`.
- **State/Data Fetching**: Server Components untuk data publik, Client Components untuk interaksi.

```
[ Browser ] → [ Vercel (Next.js) ] → [ Supabase: Postgres + Auth + Storage ]
```

---

## 7. Role & Hak Akses

| Modul | Member | Komunitas | Admin |
|---|---|---|---|
| Lihat landing/direktori/event publik | ✅ | ✅ | ✅ |
| Daftar & RSVP event | ✅ | ✅ | ✅ |
| Kelola profil komunitas | — | ✅ (milik sendiri) | ✅ (semua) |
| Buat/kelola event | — | ✅ (milik sendiri) | ✅ (semua) |
| Verifikasi komunitas | — | — | ✅ |
| Kelola berita & mitra | — | — | ✅ |
| Kelola seluruh pengguna | — | — | ✅ |

---

## 8. User Flow Utama
1. **Member**: Buka landing → klik "Gabung Sekarang" → isi form/registrasi → terima konfirmasi → (Fase 2) login → ikut event.
2. **Komunitas**: Klik "Daftarkan Komunitas" → isi data komunitas → status `pending` → admin verifikasi → komunitas aktif & bisa buat event.
3. **Admin**: Login dashboard → verifikasi komunitas → publish berita → kelola event & mitra.

---

## 9. Roadmap Ringkas
- **Sprint 1 (sekarang)**: Landing page + form pendaftaran + deploy Vercel.
- **Sprint 2**: Supabase Auth + role + dashboard dasar.
- **Sprint 3**: Modul komunitas + verifikasi.
- **Sprint 4**: Modul event + RSVP.
- **Sprint 5**: CMS berita + mitra + newsletter.

---

## 10. Asumsi & Risiko
- **Asumsi**: Logo mitra (PSSI, Telkomsel, dll.) memerlukan izin/aset resmi dari pemilik brand sebelum produksi.
- **Asumsi**: Konten foto/visual disediakan klien atau di-generate terpisah.
- **Risiko**: Spam pada form publik → mitigasi rate limit + verifikasi.
- **Risiko**: Moderasi komunitas → perlu proses verifikasi manual oleh admin.
