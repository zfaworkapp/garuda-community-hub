import { ArrowRight } from "lucide-react";
import { communities } from "@/lib/data";
import { CommunityBadge } from "./CommunityBadge";

export default function CommunityDirectory() {
  return (
    <section id="community" className="bg-cream py-16 lg:py-20">
      <div className="container-x">
        <div className="flex items-center justify-between">
          <h2 className="heading text-2xl lg:text-3xl">Direktori Komunitas</h2>
          <a
            href="#community"
            className="hidden items-center gap-1 text-sm font-semibold text-garuda-red hover:underline sm:inline-flex"
          >
            Lihat semua komunitas <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
          {communities.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-cream px-2 py-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <CommunityBadge name={c.name} />
              <p className="mt-3 text-center text-[11px] font-bold uppercase leading-tight text-ink">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
