"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cities } from "@/lib/data";

export default function JoinForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    city: "",
    communityName: "",
    company: "", // honeypot anti-spam
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit() {
    if (form.company) return; // bot terdeteksi
    if (!form.fullName || !form.whatsapp || !form.email) {
      alert("Mohon lengkapi Nama, WhatsApp, dan Email.");
      return;
    }
    setLoading(true);

    // ====== INTEGRASI SUPABASE (Fase 2) ======
    // import { createClient } from "@supabase/supabase-js";
    // const supabase = createClient(URL, ANON_KEY);
    // await supabase.from("registrations").insert({
    //   full_name: form.fullName,
    //   whatsapp: form.whatsapp,
    //   email: form.email,
    //   city: form.city,
    //   community_name: form.communityName || null,
    //   source: form.communityName ? "register_community" : "join",
    // });
    await new Promise((r) => setTimeout(r, 700)); // simulasi
    // ==========================================

    setLoading(false);
    setSent(true);
  }

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-[#FFF8F3] py-16 lg:py-20"
    >
      {/* dekorasi */}
      <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-garuda-gold/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-6 h-48 w-48 rounded-full bg-garuda-red/10 blur-2xl" />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="heading text-2xl lg:text-3xl">
            Bergabung Dengan
            <br />
            <span className="text-garuda-red">Garuda Community Hub</span>
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            Jadilah bagian dari gerakan besar untuk mendukung Garuda dan
            memajukan sepak bola Indonesia.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-garuda-red/20 bg-cream p-10 text-center shadow-card">
            <CheckCircle2 className="h-12 w-12 text-garuda-red" />
            <h3 className="mt-4 font-display text-xl font-extrabold uppercase text-ink">
              Terima Kasih!
            </h3>
            <p className="mt-2 text-sm text-muted">
              Pendaftaranmu sudah kami terima. Tim Garuda Community Hub akan
              menghubungimu melalui WhatsApp/Email.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl bg-cream p-6 shadow-card lg:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="input"
                placeholder="Nama Lengkap"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
              />
              <input
                className="input"
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
              <select
                className="input text-muted"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              >
                <option value="">Kota</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                className="input sm:col-span-2"
                placeholder="Nama Komunitas (Jika Ada)"
                value={form.communityName}
                onChange={(e) => update("communityName", e.target.value)}
              />
              {/* honeypot tersembunyi */}
              <input
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary mt-4 w-full uppercase tracking-wide disabled:opacity-60"
            >
              {loading ? "Mengirim..." : "Gabung Sekarang"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.75rem 0.9rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: #C8102E;
          box-shadow: 0 0 0 3px rgba(200,16,46,.12);
        }
      `}</style>
    </section>
  );
}
