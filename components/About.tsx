import { values } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 lg:py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] xl:grid-cols-[1fr_1fr]">
        <div>
          <p className="section-eyebrow">Tentang Kami</p>
          <h2 className="heading mt-3 text-3xl lg:text-[34px]">
            Garuda Community Hub
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Garuda Community Hub adalah Indonesia&apos;s Football Community
            Ecosystem yang mempertemukan komunitas, supporter, kreator, relawan,
            dan keluarga pecinta sepak bola Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-garuda-red text-white shadow-card">
                <Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
