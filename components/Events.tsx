import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Megaphone,
} from "lucide-react";
import { events } from "@/lib/data";

export default function Events() {
  return (
    <section id="events" className="bg-[#FBFBFC] py-16 lg:py-20">
      <div className="container-x">
        <div className="flex items-center justify-between">
          <h2 className="heading text-2xl lg:text-3xl">Event Terdekat</h2>
          <a
            href="#events"
            className="hidden items-center gap-1 text-sm font-semibold text-garuda-red hover:underline sm:inline-flex"
          >
            Lihat semua event <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-cream shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Foto event */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gelap tipis agar badge kategori tetap terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <span className="absolute left-3 top-3 rounded bg-garuda-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                  {e.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-extrabold uppercase leading-snug text-ink">
                  {e.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[13px] text-muted">
                  <li className="flex items-center gap-2">
                    {e.time ? (
                      <Calendar size={15} className="text-garuda-red" />
                    ) : (
                      <Megaphone size={15} className="text-garuda-red" />
                    )}
                    {e.date}
                  </li>
                  {e.time && (
                    <li className="flex items-center gap-2">
                      <Clock size={15} className="text-garuda-red" />
                      {e.time}
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    {e.category === "NOBAR" ? (
                      <Users size={15} className="text-garuda-red" />
                    ) : (
                      <MapPin size={15} className="text-garuda-red" />
                    )}
                    {e.place}
                  </li>
                </ul>
                <a
                  href="#join"
                  className="btn-primary mt-5 w-fit !px-5 !py-2.5 text-xs uppercase"
                >
                  {e.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
