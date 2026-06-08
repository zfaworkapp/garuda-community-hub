import { Users, Users2, MapPin, Ticket } from "lucide-react";
import { stats } from "@/lib/data";

const icons = [Users, Users2, MapPin, Ticket];

export default function Stats() {
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-xl border border-gray-100 bg-cream px-5 py-6 shadow-card"
            >
              <Icon
                className="h-9 w-9 shrink-0 text-garuda-gold"
                strokeWidth={2}
              />
              <div>
                <div className="font-display text-3xl font-extrabold text-ink lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
