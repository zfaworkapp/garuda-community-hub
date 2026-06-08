import { ArrowRight } from "lucide-react";
import { news } from "@/lib/data";

export default function News() {
  return (
    <section id="news" className="bg-cream py-16 lg:py-20">
      <div className="container-x">
        <div className="flex items-center justify-between">
          <h2 className="heading text-2xl lg:text-3xl">
            Berita &amp; Cerita Komunitas
          </h2>
          <a
            href="#news"
            className="hidden items-center gap-1 text-sm font-semibold text-garuda-red hover:underline sm:inline-flex"
          >
            Lihat semua berita <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="group flex gap-4 rounded-xl border border-gray-100 bg-cream p-3 shadow-card transition-all hover:shadow-card-hover"
            >
              {/* AREA FOTO — ganti dengan <Image src={n.image} .../> */}
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-garuda-red to-garuda-deep">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 40% 50%, rgba(255,255,255,.35) 0 2px, transparent 3px)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
              <div className="flex flex-col py-1">
                <h3 className="text-sm font-bold leading-snug text-ink group-hover:text-garuda-red">
                  {n.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                  {n.excerpt}
                </p>
                <span className="mt-auto pt-2 text-[11px] font-medium text-muted">
                  {n.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
