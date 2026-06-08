"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { Logo } from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function subscribe() {
    if (!email) return;
    // INTEGRASI SUPABASE: supabase.from("newsletter_subscribers").insert({ email })
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 2500);
  }

  return (
    <footer className="border-t border-gray-100 bg-cream pt-14">
      <div className="container-x grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Logo />
          <div className="mt-5 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-muted transition-colors hover:border-garuda-red hover:bg-garuda-red hover:text-white"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink">
            Menu
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {["Home", "About", "Community", "Events"].map((m) => (
              <li key={m}>
                <a href="#" className="hover:text-garuda-red">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners menu */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink">
            Partners
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {["News", "Join Us", "Contact Us"].map((m) => (
              <li key={m}>
                <a href="#" className="hover:text-garuda-red">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink">
            Kontak
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-garuda-red" />
              partnership@garudacommunityhub.id
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-garuda-red" />
              +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-garuda-red" />
              Jakarta, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-100">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink">
              Newsletter
            </h4>
            <p className="mt-1 text-sm text-muted">
              Dapatkan informasi terbaru tentang kegiatan dan program kami.
            </p>
          </div>
          <div className="flex w-full max-w-sm gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-garuda-red"
            />
            <button
              onClick={subscribe}
              className="flex h-[42px] w-12 shrink-0 items-center justify-center rounded-md bg-garuda-red text-white transition-colors hover:bg-garuda-dark"
              aria-label="Subscribe"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
        {done && (
          <p className="container-x pb-4 text-sm font-medium text-garuda-red">
            Terima kasih sudah berlangganan!
          </p>
        )}
      </div>

      <div className="border-t border-gray-100 py-5 text-center text-xs text-muted">
        © 2026 Garuda Community Hub. All Rights Reserved.
      </div>
    </footer>
  );
}
