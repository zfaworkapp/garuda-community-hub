import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="bg-[#FBFBFC] py-16 lg:py-20">
      <div className="container-x">
        <div className="flex items-center justify-between">
          <h2 className="heading text-2xl lg:text-3xl">Mitra Kami</h2>
          <a
            href="#partners"
            className="hidden items-center gap-1 text-sm font-semibold text-garuda-red hover:underline sm:inline-flex"
          >
            Lihat semua mitra <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-24 items-center justify-center rounded-xl border border-gray-100 bg-cream px-4 shadow-card transition-all hover:shadow-card-hover"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
