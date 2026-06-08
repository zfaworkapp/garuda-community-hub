"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-cream transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_-8px_rgba(0,0,0,0.2)]" : ""
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#home" aria-label="Garuda Community Hub">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink transition-colors hover:text-garuda-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#join"
            className="btn-primary !px-5 !py-2.5 lg:!px-6 lg:!py-3 uppercase tracking-wide text-sm"
          >
            Join Community
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-cream md:hidden">
          <ul className="container-x flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="btn-primary w-full uppercase"
              >
                Join Community
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
