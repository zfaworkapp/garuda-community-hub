import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://priority.co.id/wp-content/uploads/2026/06/hero.png";

function HeroVisual() {
  return (
    <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-2xl lg:rounded-none lg:rounded-l-[40px]">
      <Image
        src={HERO_IMAGE}
        alt="Suporter Garuda Indonesia di stadion"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-garuda-red/25 via-garuda-dark/15 to-garuda-deep/30" />
      <span className="absolute right-5 top-5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
        Garuda
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="container-x grid items-stretch gap-10 py-12 lg:grid-cols-[1fr_1.05fr] xl:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:py-0">
        <div className="flex flex-col justify-center py-6 lg:py-24">
          <h1
            className="heading text-[44px] leading-[0.9] sm:text-[58px] lg:text-[72px] opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            Rumah Kolaborasi
            <br />
            Komunitas Sepak Bola
            <br />
            <span className="text-garuda-red">Indonesia</span>
          </h1>

          <p
            className="mt-6 max-w-md text-[15px] leading-relaxed text-muted opacity-0 animate-fade-up sm:text-base"
            style={{ animationDelay: "150ms" }}
          >
            Garuda Community Hub menghubungkan komunitas, supporter, keluarga,
            dan pecinta sepak bola Indonesia dalam satu ekosistem untuk
            mendukung Garuda dan memajukan sepak bola Indonesia.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-up sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#join" className="btn-primary uppercase tracking-wide">
              Gabung Sekarang <ArrowRight size={16} />
            </a>
            <a href="#join" className="btn-outline uppercase tracking-wide">
              Daftarkan Komunitas <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
